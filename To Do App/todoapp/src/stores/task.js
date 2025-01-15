import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usetaskStore = defineStore('task', () => {  
    const tasks = ref([
        {
          id: 1,
          title: "Mosogatás",
          desc: "Anyám le fog szidni ha áll a mosatlan a konyhában mire hazaér",
          isFinished: false,
          deadline: "2025-01-20"
        },
        {
          id: 2,
          title: "Hörcsög takarítás",
          desc: "A höriknek mindig tisztának kell lennie",
          isFinished: true,
          deadline: "2025-01-09"
        }
      ])

      function finishTask(id) {
        const searchedId = tasks.value.findIndex(t => t.id === id)
        tasks.value[searchedId].isFinished = true
      }

      function openTask(id) {
        const searchedId = tasks.value.findIndex(t => t.id === id)
        tasks.value[searchedId].isFinished = false
      }

      function addTask(newTask) {
        newTask.id = tasks.value.length + 1
        newTask.isFinished = false
        tasks.value.push(newTask)
      }

      function deleteTask(id) {
        const searchedId = tasks.value.findIndex(t => t.id === id)
        tasks.value.splice(searchedId, 1)
      }

      function updateTask(updatedTask) {
        let id = tasks.value.findIndex(t => t.id === updatedTask.id)
        tasks.value[id] = updatedTask
      }

  return { tasks, finishTask, addTask, updateTask, deleteTask, openTask }
})