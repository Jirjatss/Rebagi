import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faLocationDot, faPhone, faEnvelope);

const app = createApp(App);
app.use(router);
app.component("font-i", FontAwesomeIcon);
app.mount("#app");
