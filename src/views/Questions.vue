<script setup>
import axios from "axios";
import Answers from "../components/Answers.vue";
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
    show: true,
    checked_answer: false,
  }),
  created() {
    if (this.$route.params.id == "00") {
      let idArray = [17, 23, 21, 9, 13, 22];
      let randomId = idArray.splice(Math.floor(Math.random()*idArray.length), 1)[0].toString();
      this.$route.params.id = randomId;
    } 
    
    axios.get(`https://opentdb.com/api.php?amount=1&category=${this.$route.params.id}&difficulty=${this.$route.params.difficulty}&type=multiple`).then((result) => {
    
      this.result = result.data;
      this.category = result.data.results[0].category;
      this.question = result.data.results[0].question;
      this.correct_answer = result.data.results[0].correct_answer;
      this.incorrect_answers = result.data.results[0].incorrect_answers;
      this.answers = [];
      
      for(let i=0; i<this.incorrect_answers.length; i++) {
        this.answers.push(this.incorrect_answers[i]);
      }

      this.answers.splice(Math.floor(Math.random()*(this.answers.length + 1)), 0, this.correct_answer ); 
    })
  },
  methods: {
    checkAnswer(answer) {
      this.show = !this.show;

      if (answer == this.correct_answer) {
        this.checked_answer = true;
      }
      if (answer != this.correct_answer) {
        this.checked_answer = false;
      }
    }
  }
}
</script>

<template>
  <main class="p-6">
    <p v-if="show" v-html="question" class="flex self-center justify-center p-3 text-lg font-semibold font-p"></p>
    <p v-else class="flex self-center justify-center p-3 text-lg font-semibold font-p">{{ checked_answer }}</p>
    <div class="flex flex-col gap-2 p-1" v-for="answer in answers" :key="answer" @click="checkAnswer(answer)">
      <Answers :answer="answer" :id="$route.params.id "/>
    </div>
  </main>
</template>