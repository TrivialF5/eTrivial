<script setup>
import axios from "axios";
import he from "he/he";
import Answers from "../components/Answers.vue";
import SvgCorrect from "../assets/correct.svg";
import SvgIncorrect from "../assets/incorrect.svg";
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
    checked_answer: SvgIncorrect
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
      this.show = false;

      if (answer == this.correct_answer) {
        this.checked_answer = SvgCorrect;
      }
      if (answer != this.correct_answer) {
        this.checked_answer = SvgIncorrect;
      }
      
      this.correct_answer = this.correct_answer.trim();
      this.correct_answer = he.decode(this.correct_answer);

      for(let i=0; i<this.answers.length; i++){
        if(this.$refs.answers[i].innerText == this.correct_answer){
          this.$refs.answers[i].children[0].classList.add('bg-green-300');
          this.$refs.answers[i].children[0].classList.add('border-green-500');
          
          this.$refs.answers[i].children[0].children[0].classList.add('bg-green-500');
        } else {
          this.$refs.answers[i].children[0].classList.add('bg-red-300');
          this.$refs.answers[i].children[0].classList.add('border-red-500');
          
          this.$refs.answers[i].children[0].children[0].classList.add('bg-red-500');
        }
      }

      setTimeout(() => {
        this.$router.push("/category");
      }, 2000);
    }
  }
}
</script>

<template>
  <main class="p-6">
    <p v-if="show" v-html="question" class="flex items-center justify-center h-32 p-3 text-lg font-semibold font-p"></p>
    <img v-else :src="checked_answer" class="flex items-center justify-center h-32 p-3 mx-auto text-lg font-semibold font-p"/>
    <div class="flex flex-col gap-2 p-1 cursor-pointer" v-for="answer in answers" :key="answer" @click="checkAnswer(answer)" ref="answers">
      <Answers :answer="answer" :id="$route.params.id"/>
    </div>
  </main>
</template>