# Ai Powered Chatbot (Kyro Task)

## Description
I have built a FAQ chatbot with a React and Typescript front-end, a Flask and MongoDB back-end, and a deep learning-powered chatbot that provides responses based on user input.
# Project Links

| Description     | Link                                           |
|-----------------|-----------------------------------------------|
| Live Link       | [Live Demo](https://ai-powered-faqchatbot.netlify.app/) |
| Backend Repo    | [GitHub Repository](https://github.com/mdsimar1901/faq-chatbot-backend) |

# Project Technology Stack

| Layer      | Technology               |
|------------|--------------------------|
| Front-end  | React with TypeScript    |
| Back-end   | Flask                    |
| Database   | MongoDB                  |
| Chatbot    | Deep Learning Model      |

## Table of Contents
- [Components](#components)
- [Technologies_Used](#technologiesused)
- [How to run Locally](#local)
- [Functionalities And Features](#features)

## Components

![components](https://github.com/mdsimar1901/faq-chatbot/assets/66200713/cc44e839-9c56-4223-b48c-4ec5d12abcb0)

- Login
    - User Name - username
    - Password - password
- Landing Page
- MessageView
- Message
- Bot Response
- Snapshots

## Technologies_Used
For this platform to be built , I have used React,Flask,MongoDB.
- ReactJS
  - Axios
  - react-router-dom
  - Material UI
    - Paper
    - Button
    - Typography
    - Box
    - Input
- Flask
- MongoDB

## Functionalities and Features

- Provides User Login Service
- Provides ChatBot facility for FAQ for a University. Implemended the chatbot service using a deep learning model.. Link - https://github.com/mdsimar1901/faq-chatbot-backend
- Provides a data persistance service in the backend to store chat history.
- Handles Ambiguity and asks for clarifications when needed.
- Has a fallback strategy when stuck.

## How to run Locally

### FrontEnd
Clone the repo
```
$ git clone https://github.com/mdsimar1901/faq-chatbot.git
```
Install npm packages
```
npm install
```
Run the code
```
npm run
```
<br />

### Backend
Clone repo and create a virtual environment
```
$ git clone https://github.com/mdsimar1901/faq-chatbot-backend.git
$ cd faq-chatbot-backend
$ python3 -m venv venv
$ . venv/bin/activate
```
Install dependencies
```
$ (venv) pip install Flask torch torchvision nltk
```
Install nltk package
```
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
Create your intents.json
Run
```
$ (venv) python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ (venv) python chat.py
```

## Snapshots

![login](https://github.com/mdsimar1901/faq-chatbot/assets/66200713/ae97102d-63f7-49be-98a9-a0b7211d067a)
<br />
<br />
![landing_page](https://github.com/mdsimar1901/faq-chatbot/assets/66200713/c50520fe-a608-48f0-9840-66d35ff682d3)
<br />
<br/>
![chatbot](https://github.com/mdsimar1901/faq-chatbot/assets/66200713/9012d061-705a-4fe1-b167-effce903234c)
<br/>
<br />
