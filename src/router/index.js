import Vue from "vue";
import VueRouter from "vue-router";
import CreateForm from "../components/CreateForm"
import DisplayDetails from "../components/DisplayDetails"
import EditForm from "../components/EditForm"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "create-form",
    component: CreateForm,
    },
    {
        path: "/alldetails",
        name: "display-details",
        component:DisplayDetails
  },
    {
        path: "/edit-details/:id",
        name: "edit-details",
        component:EditForm
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
