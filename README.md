---
Career Guidance Expert System
---

# Intorduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This is a master's project aimed at helping students of Secondary and Tertiary intitution find their career suitable for them using their result and Holland Test.

## Getting Started

To use the application locally

- git clone the repository
- cd into the folder
- locate .env-example file and fill out your details and rename it to .env
- run `npm install` to intall dependencies for the server and `npm run clien-install` to install dependencies for client (React)
- run `npm run dev` to start both server and client or `npm run server` to run only server or `npm run client` for only client

## Algorithm For RIASEC Test

- All question has a three properties
- question, question type, land question option
- question option is an array of objects containing option value and weight
- For this work, we have five options, disagree, slightly disagree, neutal, slightly agree and agree, with weight -2, -1, 0, 1, 2 respectively
- As the user takes his/her test, the program checks the type of question the user is answering and add the associated weight to it.

```json
[
  {
    "question": "Can you sketch, draw, paint?",
    "type": "artistic",
    "question_option": [
      {
        "option_value": "disagree",
        "weight": -2
      },
      {
        "option_value": "slightlyDisagree",
        "weight": -1
      },
      {
        "option_value": "neutral",
        "weight": 0
      },
      {
        "option_value": "slightlyAgree",
        "weight": 1
      },
      {
        "option_value": "agree",
        "weight": 2
      }
    ]
  }
]
```

```js

let question = [{...}]
let realistic = 0
let artistic = 0;
let investigative = 0;
let social = 0;
let enterprising = 0;
let conventional = 0;

for i = 0 to question.length
  if question[i].type === "realistic";
    realistic = realistic + question[i].weight
  else if question[i].type === "artistic";
    artistic = artistic + question[i].weight
  else if question[i].type === "investigative";
    investigative = investigative + question[i].weight
  else if question[i].type === "social";
    social = social + question[i].weight
  else if question[i].type === "enterprising";
    enterprising = enterprising + question[i].weight
  else
    conventional = conventional + question[i].weight

//Sort for the highest three, if there is a tie, choose the first three (returns an array)

let highest = sort(realistic, artistic ,investigative, social, enterprising, conventional);

//Get RIASEC code from the first character of each value
let code = highest[0].chatA(0) + highest[1].chatA(0) + highest[2].chatA(0);

display(code);
```
