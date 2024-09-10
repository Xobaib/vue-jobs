import "./assets/main.css";
import "primeicons/primeicons.css";
import router from "@/router/index.js";

import Card from "@/components/Card.vue";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.component("Card", Card);
app.use(router);

app.mount("#app");
