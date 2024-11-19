import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import EmployeeList from './view/employee/EmployeeList.vue'
// import ReportPage from './view/report/ReportPage.vue'
// import HomePage from './view/home/HomePage.vue'
// import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
//     {path: '/', component: HomePage},
//     {path: '/employee', component: EmployeeList},
//     {path: '/report', component: ReportPage}
// ]

// const router = createRouter ({
//     history: createWebHashHistory(),
//     routes
// })

createApp(App).use(router, axios, VueAxios).mount('#app')
