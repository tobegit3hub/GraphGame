import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
//import './assets/main.css'
import "echarts"

import App from './App.vue'
import GraphDetail from './components/GraphDetail.vue';
import EditGraph from './components/EditGraph.vue';
import ComputeNodesPath from './components/ComputePaths.vue'
import CharactersCards from './components/CharactersCards.vue';
import TopicList from './components/TopicList.vue';
import EditCharacters from './components/EditCharacters.vue';
import EditRelations from './components/EditRelations.vue';
import EditGroups from './components/EditGroups.vue';

function useTable (app) {
  app.use(VXETable)
}

const routes = [
  { path: '/', component: TopicList },
  { path: '/topics/:topic/graph', component: GraphDetail, props: true },
  { path: '/topics/:topic/cards', component: CharactersCards, props: true },
  { path: '/topics/:topic/paths', component: ComputeNodesPath, props: true },
  { path: '/topics/:topic/edit', component: EditGraph, props: true,
    children: [
      { path: 'characters', component: EditCharacters, props: true },
      { path: 'relations', component: EditRelations, props: true },
      { path: 'groups', component: EditGroups, props: true }
  ]},
]
 
 const router = createRouter({
  history:createWebHashHistory('/'),
  routes
 })

const app = createApp(App)
app.use(useTable)
app.use(router)
app.mount('#app')
