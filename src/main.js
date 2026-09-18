import { mount } from "svelte";
import App from "./App.svelte";
import "@picocss/pico/css/pico.green.min.css";
import "./pico.conf.css";

const app = mount(App, {
   target: document.getElementById("app"),
});

export default app;
