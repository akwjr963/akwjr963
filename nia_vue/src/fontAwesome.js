import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faComments,
  faBan,
  faFileAlt,
  faBell,
  faCheckCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(
  faComments,
  faBan,
  faFileAlt,
  faBell,
  faCheckCircle,
  faTrashAlt,
  fas,
  far,
  fab
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
