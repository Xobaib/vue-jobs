<script setup>
import { ref, onMounted } from "vue";

const name = ref("John Doe");
const status = ref(false);
const tasks = ref(["Task One", "Task Tow", "Task Three"]);
const newTask = ref("");

function toggleStatus() {
  status.value = !status.value;
}

function addTask() {
  // console.log(newTask.value);
  if (newTask.value.length > 0) {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
  return;
}

function deleteTask(taskIndex) {
  // My Way
  // const currentTasks = tasks.value.filter((_, index) => index !== taskIndex);
  // tasks.value = currentTasks;

  // Brad Way
  tasks.value.splice(taskIndex, 1);
}

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const responseData = await response.json();

    tasks.value = responseData.map((task) => task.title);
  } catch (error) {
    console.log("Error fetching tasks");
  }
});
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>

  <form @submit.prevent="addTask">
    <label for="task">Add New Task</label>
    <input type="text" id="task" v-model.trim="newTask" />
    <button>Add</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>

  <button @click="toggleStatus">Change Status</button>
</template>
