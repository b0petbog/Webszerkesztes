<template>
  <div class="container grid">
    <article v-for="t in taskStore.tasks" class="card task-item">
      
      <h3 class="task__title card-header">{{ t.title }}</h3>    
      <h4 class="task__detail card__content">Leírás: {{ t.desc }}</h4>  
      <h4 class="task__detail card__content">Állapot: {{ t.isFinished ? "Kész" : "Nincs kész" }}</h4>
      <h4 class="task__detail card__content">Határidő: {{ t.deadline }}</h4>
      <div class="footer" align="center">
        <button v-if="!t.isFinished" @click="taskStore.finishTask(t.id)">Kész</button>
        <button v-if="t.isFinished" @click="taskStore.openTask(t.id)">Visszanyitás</button>
        <button @click="taskStore.deleteTask(t.id)">Törlés</button>
        <button v-if="!t.isFinished" @click="editTask(t.id)">Szerkesztés</button>
      </div>

    </article>
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

  .task-form {
    width: 20rem;
    max-width: 90%;
    margin: auto;
}

.task-item {
    width: 20rem;
    max-width: 95%;
   
}

.task__title {
    font-size: 1.2rem;
    text-align: center;
}

.task__detail {
    text-align: center;
    color: #4d4d4d;
    margin-bottom: 0.5rem;
}


.card {
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: rgba(65, 178, 223, 0.842);
}

.card__header,
.card__content {
  padding: 1rem;
}

.card__header h1,
.card__content h1,
.card__content h2,
.card__content p {
  margin: 0;
}

.card__actions {
    padding: 1rem;
    text-align: center;
}

.card__actions button,
.card__actions a {
    margin: 0 0.25rem;
}

footer {
  text-align: center;
}

button {
  margin: 2px;
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
</script>


