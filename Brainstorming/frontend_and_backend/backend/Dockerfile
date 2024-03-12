# Use a specific version of the Python image
FROM python:3.8-slim-buster

WORKDIR /backend
COPY . /backend
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000
# Command to run on container start
CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=5000"]
