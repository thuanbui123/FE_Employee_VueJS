<template>
    <div>
        <div class="page-header">
            <h2>Employee List</h2>
            <button class="add" title ="ins" @click="btnAddOnClick">
                <img :src="require('../../assets/icon/add.png')" alt="Thêm mới"/>
                <p>Thêm mới</p>
            </button>
        </div>
        <table class="table">
            <thead class="header">
                <tr>
                    <th style="width: 5%">STT</th>
                    <th style="width: 12%;" class="th-code ${getIsDesc() === 'true' ? 'active' : ''}">
                        Mã nhân viên
                        <i class="icofont-caret-up"></i>
                    </th>
                    <th style="width: 15%;">Họ và tên</th>
                    <th style="width: 8%;">Giới tính</th>
                    <th style="width: 12%;">Ngày sinh</th>
                    <th style="width: 20%;">Địa chỉ email</th>
                    <th style="width: 28%;">Địa chỉ</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row" @dblclick="rowDBClick(employee)"
                    :class="{ active: activeRow === index }"
                    v-for="(employee, index) in employees" :key="employee.employeeCode" @click="handleClickRow(index)"
                >
                    <td>{{ index+1 }}</td>
                    <td>{{employee.employeeCode}}</td>
                    <td>{{employee.fullName}}</td> 
                    <td>{{employee.gender !== null ? employee.gender : ''}}</td> 
                    <td>{{formatDate(employee.dateOfBirth) }}</td> 
                    <td>{{employee.email}}</td> 
                    <td class="actions">
                        <span :class="{'empty-address' : (employee.address !== 'null' && employee.address !== null)}">
                            {{ employee.address !== 'null' && employee.address !== null ? employee.address : '' }}
                        </span>
                        <div class ='act'>
                            <button v-if="activeRow === index" class="edit-btn" @click="showEmployeeDetailDialog(true)" title="ctrl + F2">
                                <img :src="require('../../assets/icon/info-48.png')"/>
                            </button>
                            <button v-if="activeRow === index" class="delete-btn" title="delete">
                                <img :src="require('../../assets/icon/delete-48.png')"/>
                            </button>
                        </div>
                    </td> 
                </tr>
            </tbody>
        </table>
    </div>
    <employee-detail-dialog :isShow="isShow" :employeeSelected="employeeSelected" :employeeSelectedId="employeeSelectedId" @ishowDialog = "showEmployeeDetailDialog"/>
</template>
<script>
import axios from 'axios';
import EmployeeDetailDialog from './EmployeeDetailDialog.vue'
export default {
    name: "EmployeeList",
    components: {
        EmployeeDetailDialog
    },
    /**
     * GD1: beforeCreated (setup)
     */
    beforeCreate() {
        console.log('1. Before created');
        console.log('Không thể truy cập data');
        //Không thể truy cập data
        // let fullName = this.fullName;
        // console.log(fullName)
    },
    /**
     * GD2: Created (setup)
     * Có thể gọi dữ liệu về để render
     * Vì thích hợp với dữ liệu không liên quan đến DOM
     * Dữ liệu được tải về ngay khi component được khởi tạo nhưng trước khi gắn vào DOM 
     */
    created() {
        try {
            var me = this;
            console.log('2. Created');
            console.log('Có thể truy cập  vào even, methods');
            console.log('Chưa thể truy cập vào DOM');
            //Không thể truy cập data
            let fullName = this.fullName;
            console.log(fullName);
            //Gọi api lấy dữ liệu
            axios
                .get("https://localhost:7004/api/v1/employees/paginate?branch=H%C3%A0%20N%E1%BB%99i&limit=10&offset=0&is-desc=false")
                .then((res) => {
                    console.log(res);
                    me.employees = res.data.employees
                })
        } catch (error) {
            console.log(error)
        }
    },
    /**
     * GD3: beforeMount (setup)
     */
    beforeMount() {
        console.log('3. beforeMount');
        console.log('Có thể truy cập  vào even, methods');
        console.log('Chưa thể truy cập vào DOM');
        let fullName = this.fullName;
        console.log(fullName);
    },
    /**
     * GD4: mounted
     */
    mounted() {
        console.log('4. mounted');
        console.log('Có thể truy cập  vào even, methods');
        console.log('Có thể truy cập vào DOM');
        let fullName = this.fullName;
        console.log(fullName);
    },
    /**
     * GD5: beforeUpdate
     */
    beforeUpdate() {
        console.log('5. beforeUpdate');
    },
    /**
     * GD6: updated
     */
    updated() {
        console.log('6. updated');
    },
    /**
     * GD7: beforeUnmount
     */
    beforeUnmount() {
        console.log('7. beforeUnmount');
    },
    /**
     * GD8: unmounted (destroyed)
     */
    unmounted() {
        console.log('8. unmounted');
    },
    methods: {
        btnAddOnClick() {
            this.employeeSelected = {}
            this.employeeSelectedId = null;
            this.showEmployeeDetailDialog(true);
        },
        formatDate(value) {
            return value ? new Date(value).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
        },
        handleClickRow(index) {
            this.activeRow = index;
        },
        showEmployeeDetailDialog(isShow) {
            this.isShow = isShow;
        },
        rowDBClick(employee) {
            this.employeeSelected = employee;
            this.employeeSelectedId = employee.employeeCode;
            this.showEmployeeDetailDialog(true);
        }
    },
    data() {
        return {
            fullName: 'Bùi Văn Thuân',
            employees: null,
            activeRow: -1,
            isShow: false,
            employeeSelected: {},
            employeeSelectedId: null,
        }
    },
}
</script>
<style scoped>
    .page-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .add {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #8433FF;
        background-color: #8433FF;
        outline: none;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: all .3s ease;
    }
    .add p {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        margin-left: 8px;
    }
    table {
        width: 80vw;
        margin: 8px;
        border: 1px solid #ccc;
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    tr {
        width: 100%;
    }
    th:first-child, td:first-child {
        border-left: none;
    }
    table th, table td {
        font-size: 16px;
        box-sizing: border-box;
    }
    table .row:hover {
        background-color: #f5f5f5;
    }
    thead th {
        background-color: #f4f4f4;
        position: sticky;
        top: 0;
        z-index: 1;
    }
    th {
        font-weight: bold;
    }
    td, th {
        text-align: left;
        padding: 8px;
    }
    th, td {
        border-left: 1px solid #ccc;
    }
    th, table .row {
        border-bottom: 1px solid #ccc;
        height: 40px;
        line-height: 40px;
    }
    .row {
        position: relative
    }
    .row .act {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -200px;
    }
    .row .act button {
        height: 32px;
        width: 32px;
        border-radius: 4px;
        text-align: center;
        padding: 0;
        border: 1px solid #ccc;
    }
    .row .act button img {
        width: 24px;
        height: 24px;
    }
    .row .act button:last-child {
        margin-left: 8px;
    }
    
    table th:nth-child(1),
    table td:nth-child(1) {
        width: 5%;
        /* Cột Mã nhân viên */
    }

    table th:nth-child(2),
    table td:nth-child(2) {
        width: 12%;
        /* Cột Mã nhân viên */
    }

    .th-code {
        cursor: pointer;
    }

    .th-code i {
        transition: all .3s ease;
    }

    .th-code.active i {
        display: inline-block;
        rotate: 180deg;
    }

    table th:nth-child(3),
    table td:nth-child(3) {
        width: 15%;
        /* Cột Họ và tên */
    }

    table th:nth-child(4),
    table td:nth-child(4) {
        width: 8%;
        /* Cột Giới tính */
    }

    table th:nth-child(5),
    table td:nth-child(5) {
        text-align: center;
        width: 12%;
        /* Cột Ngày sinh */
    }

    table th:nth-child(6),
    table td:nth-child(6) {
        width: 20%;
        overflow: hidden;
        border-right: 1px solid #ccc;
        /* Cột Địa chỉ email */
    }

    table th:nth-child(7),
    table td:nth-child(7) {
        width: 28%;
        border-left: none;
        /* Cột Địa chỉ */
    }
</style>