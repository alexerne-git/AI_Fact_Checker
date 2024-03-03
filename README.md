<h1 align="center"> Lab 2: Data-Buckets & BigQuery </h1>
<div>
<td> 
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_Universit%C3%A9_de_Lausanne.svg/2000px-Logo_Universit%C3%A9_de_Lausanne.svg.png" style="padding-right:10px;width:240px;float:left"/></td>
<h2 style="white-space: nowrap">Cloud and Advanced Analytics </h2></td>
<hr style="clear:both">
<p style="font-size:0.85em; margin:2px; text-align:justify">
<br>
<br>
</div>




Welcome to this week's lab where we will delve into Google Storage and BigQuery. We will learn to leverage this powerful tool within our notebooks and enhance our SQL knowledge.

## Learning Goals:
By the end of this lab, you will be able to:
- Understand the functionalities and navigation of Google BigQuery and Cloud Storage
- Upload and explore data in BigQuery
- Query datasets in BigQuery to reinforce your SQL skills

## Introduction:


## Lab Walkthrough
In this lab, TAs will demonstrate the following on the Google Console:
* Cloud Storage and buckets 
* Exploring Google Cloud Console features

## Table of contents 
* [Exercise 1 Cloud Storage and Buckets](#exercise-1-cloud-storage-and-buckets)
* [Exercise 2 Big Query](#exercise-2-big-query)
* [Exercise 3 Hints for Assignment 1](#exercise-3-hints-for-assignment-1)



-----------------------------------
### **Exercise 1: Cleaning the Database (CSV) and Augmenting**
-----------------------------------
The dataset was taken from a Github repository that can be found [here](https://github.com/awhstin/Dataset-List/blob/master/presidents.csv). This dataset seems to have taken public data provided from the Guardian, which can be found [here](https://www.theguardian.com/news/datablog/2012/oct/15/us-presidents-listed).

The dataset includes information on all U.S. presidents, featuring details such as the president's name, party affiliation, term duration, and a numerical identifier representing their order in the sequence of U.S. presidents.

The structure of the dataset is the following: 
- It contains 4 rows:
    - **President Name:**  The name of the individual who served as the president.
    - **Years in Office:** The duration (years) during which the president held office.
    - **Number:** The president number, based on all US presidents
    - **Party:** The political party affiliation of the president during their term(s) in office.

**However**, we need to simplify the structure of the dataset to provide a more comprehensive way to query the information of this dataset. In addition, we would like to augment the response (Fact-checked or not) with actual reliable sources (which lacks in ChatGPT's current version). To do so, we are going to go through the two following steps:

Both steps can be found on the [Notebook]()
- **Step 1: Simplifying / Renaming the dataset:** In this step, we are going to rename columns and reorganize the database
- **Step 2: Augmenting the database:** In this step, we are going to add another column with actual links related to the presidents, in order to provide an advanced search to the user once the statement or fact is checked ! 
- **Step 3: Saving the final database for later use**


-----------------------------------
### **Exercise 2: SQL as our logic programming checker**
-----------------------------------

In this section, we are going to use SQL to query the answer sent from chatGPT to see if the answer to that query is actually in our database. A visual illustration of that process can be found below:

--- ADD image

To do so and have a quick deployable solution, we are going to use Google Big Query. To do so, we generated the given keys and completed the following [Notebook]() **NOTE** To make it easier, it is better to run the code directly on Google Colab. The main steps are described below:
- **Step 1: Connect to the Big Query - Google Cloud Platform** In this step, we imported our dataset on Big Query and generated the keys to have access to the database from our notebook **NOTE** Big query is not free for too many queries, so please beware of not sending to many queries at the time
- **Step 2: Test the database and simple queries** In this step, we created simple SQL queries to test the connection
- **Step 3: Sample query from chatGPT and fact check!** In this step, we created sample queries and looked at the results given by our database, more on the notebook.


-----------------------------------
### **Exercise 3: Creating a query from an answer prompt**
-----------------------------------
The important question is to see how we can truly get the SQL query in the correct format in order to compare it to our database. To answer this question, we will test two theories and find the best one. For both, we will use 10 queries and see which method is the best. 
- **Method 1: prompt engineering** This is the more simple method, where we explicitely ask to chatGPT the formatted query
- **Method 2: Name Entity Resolution** We will use NER from spacy to try to create the formatted query. 



-----------------------------------
### **Exercise 4: Adding it all together**
-----------------------------------



### **Exercise 3: Augmented answers to questions**

References to Github (works, to execute on Google Colab GPU): https://github.com/the-ogre/LLM-FinetuningBERTforQuestionAnswering/blob/main/bert-fine-tuning-for-qa.ipynb
