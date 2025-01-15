<template>
    <div class="form-control form-main">
        <div class="form-group m-3">
            <label for="feladat">A feladat új neve: </label>
            <input class="form-control" type="text" v-model="task.title" id="feladat">
        </div>

        <div class="form-group m-3">
          <label for="leiras">A feladat új rövid leírása: </label>
          <input class="form-control" type="text" v-model="task.desc" id="leiras">
        </div>

        <div class="form-group m-3">
          <label for="hatarido">A feladat új határideje: </label>
          <input class="form-control" type="date" v-model="task.deadline" id="hatarido">
        </div>

      <button @click="updateTask()">Mentés</button>
    </div>
  </template>
  <script setup>
      import { ref } from 'vue';
      import { useRoute, useRouter } from 'vue-router';
      import { usetaskStore } from '@/stores/task';
      
      const route = useRoute()
      const router = useRouter()
      const taskStore = usetaskStore()
      const task = ref(taskStore.tasks.find(t => t.id == route.params.id))
      const updateTask = () => {
        taskStore.updateTask(task)
        router.push('/')
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

  button {
  background-color:rgb(99, 195, 250);
  border: solid black 1px;
  box-shadow: 8px 8px 10px lightslategrey;
  color: var(--color-text);
}
.form-main {
  background-color:lightblue;
  box-shadow: 8px 8px 10px lightslategrey;
  margin-left: 500px;
  margin-right: 500px;
  padding: 5px;
}
  </style>
  