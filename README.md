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


