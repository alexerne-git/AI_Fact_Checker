Server steps:

pip install flask_cors
pip install flask google-cloud-bigquery
- python server.py



on postman: http://localhost:5000/presidents

For the dockerfile
- Check the version of python: python --version, and add it to the dockerfile, at the top

For the requirements.txt, pip freeze and check the versions of the libraries

References for the dockerfile on Flask: https://www.freecodecamp.org/news/how-to-dockerize-a-flask-app/
