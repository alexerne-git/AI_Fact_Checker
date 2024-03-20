<h1 align="center">
Outils Formels Avancés 2024</h1>
<div>
<td> 
<img src="./read_me_img/logo.png"></td>
<h2 style="white-space: nowrap">Project: AI Fact Checker</h2></td>
<hr style="clear:both">
<p style="font-size:0.85em; margin:2px; text-align:justify">
<br>
<br>
</div>

This repository contains all the informations related to our Fact AI checking project for the course of Outils Formels Avancés 2024 - Master Program at the University of Geneva. 

## Table of contents 
* [1 Performance metric 1 ROUGE](#1-performance-metric-1-rouge)
* [2 Performance metric 2 Sentiment Analysis](#2-performance-metrix-2-sentiment-analysis)
* [3 Performance metric 3 Fact Checking](#3-performance-metric-3-fact-checking)


### Performance metrics:

**Why?** We want to evaluate text generating LLMs, to do so, we need to define precise performance metrics, below we have defined X performance metrics, all of them have corresponding notebooks, in order to use them.

-----------

#### **Guide of use of the performance metrics**

- **1. Performance metric 1: ROUGE** >Notebooks>Metric_1_ROUGE.ipynb
- **2. Performance metric 2: BLUE** >Notebooks>Metric_2_BLUE.ipynb 
- **3. Performance metric 3: Fact Checking:** >Notebooks>Metric_3_fact_checking.ipynb 

-------------------------------------------
#### **1 Performance metric 1 ROUGE** 

Rouge, also called **Recall-Oriented Understudy for Gisting Evaluation** is a metric designed to measure the quality of summaries by comparing them to human reference summaries. ROUGE contains multiple metrics, the one we decided to use is ROUGE-N, which measures the **overlap of N-grams between the LLM-generated summary and the reference summary**.

- **How does it work ?** Compares quality / similarity between reference and generated summary using N-grams. For the reference dataset, we will use the [Xsum](https://paperswithcode.com/dataset/xsum) dataset. This dataset contains 226'771 news articles accompanied with a one-sentence summary. The articles are collected from BBC articles (2010 to 2017) - covering a variety of domains (News, Politics, Sports, Weather, Business, Technology...). 


<img height="100%" width="450px" src="./read_me_img/practice.png">


**References:**

- [1] Medium article on the [ROUGE metric](https://gandhikunal1021.medium.com/summarization-using-llm-and-measuring-the-performance-with-rouge-part-1-8532ea70c8da)
- [2] [Github Notebook](https://github.com/gk1021/Summarization-LLM) on ROUGE metric
- [3] Medium article on [all metrics](https://medium.com/@bukowski.daniel/a-practical-framework-for-evaluating-text-generation-llms-4016ffa93736)
-------------------------------------------
#### **2 Performance metric 2 Sentiment Analysis** 

This metric uses the [IMDB dataset](https://huggingface.co/datasets/imdb) from Huggin Face that has 25,000 highly polar movie reviews for training and provides labels to the corresponding review, either being Positive or Negative. The goal is to query the LLM to ask it if the sentiment is positive and negative. Gathering the data, we then put a score between 0 and 1. 

<img height="100%" width="450px" src="./read_me_img/sentiment.png">

-------------------------------------------
#### **3 Performance metric 3 Fact Checking**

This metric uses WikiData and SparQL in order to create queries to specific known facts in Wikipedia. Queries are created to query Wikidata using sparQL and a prompt is asked to the LLM to provide a response to which we have the answer. We repeated this 10 times for different topics and created a score between 0 and 1. For information, link to [wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page?uselang=fr) or i.e [person](https://www.wikidata.org/wiki/Q215627)

<img height="100%" width="450px" src="./read_me_img/fact_check.png">

-------------------------------------------

### **Combining all together: comparing models and results**

In this notebook, we combine all the results to visualize them in a dataframe, to compare the resuts. 



