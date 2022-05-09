<template>
  <div>
    <!-- <div v-if="result" class="content" >
      <p>Category: <span v-html="category"></span></p>
      <p>Question: <span v-html="question"></span></p>
      <p>Correct: <span v-html="correct_answer"></span></p>
      <div v-for="answer in incorrect_answers" :key="answer">
        <p>{{ answer }}</p>

      </div>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    result: null,
    category: String,
    question: String,
    correct_answer: String,
    incorrect_answers: Array,
    answers: Array,
    answers_random: Array,
  }),
  created() {
    axios.get("https://opentdb.com/api.php?amount=1").then((result) => {
      // console.log(result.data);
      this.result = result.data;
      this.category = result.data.results[0].category;
      this.question = result.data.results[0].question;
      this.correct_answer = result.data.results[0].correct_answer;
      this.incorrect_answers = result.data.results[0].incorrect_answers;
      this.answers = [];
      
      for(let i=0; i<this.incorrect_answers.length; i++) {
        this.answers.push(this.incorrect_answers[i]);
      }
      //console.log(this.answers);
      //console.log(this.correct_answer);

      this.answers.splice(Math.floor(Math.random()*(this.answers.length + 1)), 0, this.correct_answer ); 

      //console.log(this.answers);
  

    })
  }
};
</script>
