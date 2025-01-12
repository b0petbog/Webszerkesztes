<template>
    <div class="main">
        <div class="form-group m-3">
            <label for="feladat">A feladat neve: </label>
            <input type="text" v-model="task.title" id="feladat">
        </div>

        <div class="form-group m-3">
          <label for="leiras">A feladat rövid leírása: </label>
          <input type="text" v-model="task.desc" id="leiras">
        </div>

        <div class="form-group m-3">
          <label for="hatarido">A feladat határideje: </label>
          <input type="date" v-model="task.deadline" id="hatarido">
        </div>

      <button @click="taskStore.finished(task)">Mentés</button>
    </div>
  </template>
  <script setup>
      import { ref } from 'vue';
      import { useRoute, useRouter } from 'vue-router';
      import { usetaskStore } from '@/stores/task';
      
      const route = useRoute()
      const router = useRouter()
      const taskStore = usetaskStore()
      const task =  {
          id: 0,
          title: "",
          desc: "",
          isFinished: false,
          deadline: ""
        }  
  </script>
  
  <style scoped>
  .main{
    width: 33.33%;
    margin: 0 auto;
  }
  p, h3{
    text-align: center;
  }
  </style>
  