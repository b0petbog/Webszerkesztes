<template>
  <div class="container">
    <div v-for="t in taskStore.tasks" :key="t.id" class="task">
      <h3>{{ t.title }}</h3><br>    
      <p>Leírás: {{ t.desc }}</p>  
      <p>Készen van-e: {{ t.isFinished ? "kész" : "nincs kész" }}</p>
      <p>Határidő: {{ t.deadline }}</p>
      <div class="footer">
        <button @click="taskStore.finishTask(t.id)">Kész</button>
        <button @click="taskStore.deleteTask(t.id)">Törlés</button>
        <button v-if="!task.isFinished" @click="editTask(t.id)">Szerkesztés</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .container h3{
    text-align: center;
  }
  .container>.footer{
    display: flex;
    justify-content: space-around;
  }
</style>
<script setup>
import {ref} from 'vue'
import { usetaskStore } from '@/stores/task';
import { useRoute, useRouter } from 'vue-router';

const taskStore = usetaskStore()
const route = useRoute()
const router = useRouter()
const editTask = (id)=>{
  router.push(`/edittask/${id}`)
}
const createNewTask = ()=>{
  router.push(`/newtask`)
}
</script>


