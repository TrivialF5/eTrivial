<script setup>
import axios from "axios";
import Answers from "../components/Answers.vue";
import Title from "../components/Title.vue";
</script>

<script>

export default {
  data: () => ({
    result: null,
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: Array,
    answers: Array,
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
  },
}
</script>



<template>
  <div class="flex flex-col gap-2 p-10"> 
    <Title /> 
  </div>
  <p v-html="question" class="flex self-center justify-center p-10 text-lg font-semibold font-p"></p>
  <div class="flex flex-col gap-2 p-1" v-for="answer in answers" :key="answer">
    <Answers :answer="answer" :id="$route.params.id"/>
  </div>
</template>