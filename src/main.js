import "./assets/main.css";

import Card from "@/components/Card.vue";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.component("Card", Card);

app.mount("#app");
