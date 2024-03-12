from flask import Flask, jsonify,request
from google.cloud import bigquery
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Set the path to your service account key JSON file
key_path = './database_keys_secret.json'
# Set your project ID
project_id = 'fact-ai-checker'

# Explicitly set the credentials
client = bigquery.Client.from_service_account_json(key_path, project=project_id)

@app.route('/presidents', methods=['GET'])
def get_presidents():
    try:
        # Run a query to select all columns from the presidents table
        query = f"SELECT * FROM `{project_id}.fact_ai_database.presidents` LIMIT 5"
        query_job = client.query(query)

        # Collect the query results
        results = []
        for row in query_job:
            results.append(dict(row))

        return jsonify(results)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def extract_president_info(sentence):
    # Find the index of "QUERY HERE"
    query_index = sentence.find("QUERY HERE")

    if query_index == -1:
        return None

    # Extract the substring after "QUERY HERE"
    info_str = sentence[query_index + len("QUERY HERE"):].strip()

    # Remove the outer double quotes and split the information string to extract individual components
    parts = [part.strip() for part in info_str.strip('"').split('", "')]
    
    # Assigning variables
    if len(parts) == 3:
        president_name, pres_num, begin_office = parts
        end_office = None
    elif len(parts) == 4:
        president_name, pres_num, begin_office, end_office = parts
    else:
        raise ValueError("Invalid format")

    return president_name, pres_num, begin_office, end_office

@app.route('/factcheck', methods=['GET'])
def evaluate_factcheck():
    try:
        # Retrieve parameters from the request
        query_data = request.args.get('query_data')
        president_name, pres_num, begin_office, end_office = extract_president_info(query_data)
        # Call the evaluate_query function with specific parameters
        result_df = evaluate_query(president_name, pres_num, begin_office, end_office)
        
        results = result_df.to_dict('records')

        return jsonify(results)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def evaluate_query(president_name, pres_num, begin_office, end_office):
    # Construct the parameterized query
    query_template = """
    SELECT *
    FROM `{}.fact_ai_database.presidents`
    WHERE president_name = @president_name
      AND pres_num = @pres_num
      AND begin_office = @begin_office
      AND end_office = @end_office
    """

    # Prepare the job configuration with the parameters
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("president_name", "STRING", president_name),
            bigquery.ScalarQueryParameter("pres_num", "STRING", pres_num),
            bigquery.ScalarQueryParameter("begin_office", "STRING", begin_office),
            bigquery.ScalarQueryParameter("end_office", "STRING", end_office),
        ]
    )

    formatted_query = query_template.format(project_id)
    query_job = client.query(formatted_query, job_config=job_config)
    result_df = query_job.to_dataframe()

    if len(result_df) == 1:
        return result_df
    else:
        return "This is incorrect!"

if __name__ == '__main__':
    app.run(debug=True)
