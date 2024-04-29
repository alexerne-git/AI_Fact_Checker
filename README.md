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

## Introduction: 

The goal of this project was to create a fact checker to evaluate LLMS, therefore we have created known performance metrics such as rouge metric, sentiment analysis, fact checking... allowing to prompt engineer text generative models to generate well structured answer that we can then check using our metrics.

## Table of contents 

* [1. ROUGE](#1-rouge)
* [2. BLEU](#2-bleu)


-------------------------------------------
#### **1: ROUGE** 

ROUGE, also called **Recall-Oriented Understudy for Gisting Evaluation** is a metric designed to measure the quality of **summaries** by comparing them to **human reference summaries**. ROUGE contains multiple metrics, the one we decided to use is ROUGE-N, which measures the **overlap of N-grams between the LLM-generated summary and the reference summary** - in other words, it looks for the longest common sequence of N-grams between the reference and the summarized text.

- **How does it work ?** Compares quality / similarity between reference and generated summary using N-grams. For the reference dataset, we will use the [Xsum](https://paperswithcode.com/dataset/xsum) dataset. This dataset contains 226'771 news articles accompanied with a one-sentence summary. The articles are collected from BBC articles (2010 to 2017) - covering a variety of domains (News, Politics, Sports, Weather, Business, Technology...). Therefore, we decided to select 500 random rows of that dataset, then computed the average number of words in the documents / actual article we want to summarize and the summaries generated by humans. This allowed us to filter out summaries that were too short or too long (that could cause problems when prompt engineering - i.e: text too long and the LLM can't handle too long queries). Therefore, we only keept text between 200 and 500 words and then created a final dataset of 10 articles, containing the summary, the actual article and a unique id. This allowed us to have a csv dataset easy to import for testing the models. Finally, we studied the number of words in the human generated summary (i.e the average) and established to prompt the LLMs 25 word summaries.  

The image below illustrates the process we have taken for this metric: 
- 1. On one hand we have the reference dataset (containing 10 human made summaries)
- 2. On the other hand we prompt engineer the LLM to provide a 25 word length summary of the article
- 3. Then we combine each of those 10 - reference summary and generated summary and calculate the ROUGE score 
<div style="display: flex; justify-content: center;">
    <img height="100%" width="450px" src="./read_me_img/practice.png" alt="Description of the image">
</div>

- **How to use it?** For more information, you can run the code (locally / Google Colab) - the code can be found [here](./1_ROUGE.ipynb)

- **What output results?** ROUGE-1 is often preferred as the primary evaluation metric due to its simplicity, robustness, and ability to capture the essence of summary quality based on unigram overlap.

**References:**
- [1] Medium article on the [ROUGE metric](https://gandhikunal1021.medium.com/summarization-using-llm-and-measuring-the-performance-with-rouge-part-1-8532ea70c8da)
- [2] [Github Notebook](https://github.com/gk1021/Summarization-LLM) on ROUGE metric
- [3] Medium article on [all metrics](https://medium.com/@bukowski.daniel/a-practical-framework-for-evaluating-text-generation-llms-4016ffa93736)

-------------------------------------------
#### **2: BLEU** 


BLEU, or the Bilingual Evaluation Understudy, is a metric for comparing a candidate translation to one or more reference translations. BLEU evaluates translation quality based on n-gram precision. It calculates the precision of n-grams in the generated translation compared to one or more reference translations. BLEU also incorporates a brevity penalty to discourage overly short translations.

- **How does it work ?**
    - BLEU breaks down both the reference and generated text into smaller units called n-grams (sequences of n words). It then counts how many of these n-grams in the generated text also appear in the reference text.
    - BLEU calculates a precision score for each n-gram size (usually up to 4-grams). Precision measures how many of the n-grams in the generated text match with the n-grams in the reference text.
    - Finally, BLEU combines all these factors into a single score between 0 and 1. A higher BLEU score indicates a better match between the generated text and the reference text.
    <img height="100%" width="450px" src="./read_me_img/bleu.png" alt="Description of the image">

- **How to use it?**  For more information, you can run the code (locally / Google Colab) - the code can be found [here](./2_BLEU.ipynb)


**References:**
- [1] Medium article on the [BLEU metric](https://medium.com/@priyankads/evaluation-metrics-in-natural-language-processing-bleu-dc3cfa8faaa5)


#### BLEU and ROUGE:
- **BLEU** focuses on precision by counting matching n-grams between the generated and reference text.
- **ROUGE** focuses on recall by measuring overlapping units like words, n-grams, and sequences between the generated and reference text.
-------------------------------------------