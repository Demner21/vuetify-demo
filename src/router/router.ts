import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import OffersView from "@/view/OffersView.vue";
import FakeView from "@/view/FakeView.vue";
import AddEdit from "@/view/offers/AddEdit.vue";
import WinnersList from "@/view/winners/List.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/offers",
    name: "offers",
    component: OffersView,
  },
  {
    path: "/fake",
    name: "fakeView",
    component: FakeView,
  },
  {
    path: "/offers/add",
    name: "offersAdd",
    component: AddEdit,
  },
  {
    path: "/offers/edit/:id",
    name: "offersEdit",
    component: AddEdit,
  },
  {
    path: "/winners",
    name: "winnersList",
    component: WinnersList,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
