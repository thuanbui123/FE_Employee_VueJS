//B1: Cài đặt vue-router

//B2: Import:
import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../view/home/HomePage.vue'
import EmployeeList from '../view/employee/EmployeeList.vue'
import ReportPage from '../view/report/ReportPage.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/employee', component: EmployeeList},
    {path: '/report', component: ReportPage}
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router