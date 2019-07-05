---
"Career Advisory System"
---

# Career Advisory System

## Intorduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This is a master's project

## Algorithm For RIASEC Test

- All question has a three properties
- question, question type, and question option
- question option is an array of objects containing option value and weight
- For this work, we have five options, disagree, slightly disagree, neutal, slightly agree and agree, with weight -2, -1, 0, 1, 2 respectively
- As the user takes his/her test, the program checks the type of question the user is answering and add the associated weight to it.

```js

let question = [{...}]
let realistic = 0
let artistic = 0;
let investigative = 0;
let social = 0;
let enterprising = 0;
let conventional = 0;

for(let i = 0; i<question.length; i++){
  if(question[i].type === "realistic"){
    realistic += question[i].weight
  }
}
```
