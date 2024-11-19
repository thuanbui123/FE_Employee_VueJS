<template>
    <div class="popup" :class="{open: isShow}">
        <div class="modal">
            <div class="modal__header">
                <p>Thông tin nhân viên</p>
                    <button class="close" tabindex="21" title="ESC" @click="closeDialog">
                        <img :src="require('../../assets/icon/close-48.png')" />
                    </button>
            </div>
            <form class="form">
                <div class="row">
                    <div class="form-group">
                        <label for="code">
                            Mã nhân viên
                            <p>*</p>
                        </label>
                        <input tabindex="1" type="text" oninvalid="this.setCustomValidity('Mã nhân viên không được để trống!')" oninput="setCustomValidity('')"
                            id="code" name="code"
                            required
                            v-model="employee.employeeCode"
                            title="Đây là trường bắt buộc!"/>
                    </div>
                    <div class="form-group">
                        <label for="name">
                            Họ tên
                            <p>*</p>
                        </label>
                        <input tabindex="2" 
                            type="text" 
                            required title="Đây là trường bắt buộc!" 
                            oninvalid="this.setCustomValidity('Họ và tên không được để trống!')" oninput="setCustomValidity('')"
                            id="name" name="name"
                            v-model="employee.fullName"/>
                    </div>
                    <div class="form-group">
                        <label for="birthday">Ngày sinh</label>
                        <input tabindex="3" v-model="employee.dateOfBirth" type="date" id="birthday" max='${today}' name="birthday"/>
                    </div>
                    <div class="form-group">
                        <label>Giới tính</label>
                        <div class="option">
                            <input tabindex="4" type="radio" id="male" name="sex" value="Nam"/>
                            <label for="male">Nam</label><br>
                            <input tabindex="5" type="radio" id="female" name="sex" value="Nữ"/>
                            <label for="female">Nữ</label><br>
                            <input tabindex="6" type="radio" id="other" name="sex" value="Khác"/>
                            <label for="other">Khác</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label for="position">Chức vụ</label>
                        <select tabindex="7" id="position" name="position">
                            <option disabled selected></option>
                            <!-- ${
                                positions.map(item => {
                                    return (
                                        `
                                            <option value="${item.positionCode}" >${item.name}</option>
                                        `
                                    )
                                })
                            } -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="identityNumber">
                            Số CMTND
                            <p>*</p>    
                        </label>
                        <input tabindex="8" type="text" 
                            required
                            v-model="employee.identityNumber"
                            title="Đây là trường bắt buộc!"
                            oninvalid="this.setCustomValidity('Số CMTND không hợp lệ!')"
                            id="identityNumber" name="identityNumber"
                        />
                    </div>
                    <div class="form-group">
                        <label for="identityDate">Ngày cấp</label>
                        <input tabindex="9" v-model="employee.identityDate" type="date" id="identityDate" max='${today}' name="identityDate"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label for="department">Phòng ban</label>
                        <select tabindex="10" id="department" name="department">
                            <option disabled selected></option>
                            <!-- ${
                                departments.map(item => {
                                    return (
                                        `
                                            <option value="${item.departmentCode}">${item.name}</option>
                                        `
                                    )
                                })
                            } -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="identityPlace">Nơi cấp</label>
                        <input tabindex="11" v-model="employee.identityPlace" type="text" id="identityPlace" name="identityPlace"/>
                    </div>
                    <div class="form-group">
                        <label for="salary">Lương</label>
                        <input tabindex="12" type="text"
                            v-model="employee.salary"
                            oninvalid="this.setCustomValidity('Tiền lương hợp lệ!')" 
                            id="salary" name="salary" 
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label for="address">Địa chỉ</label>
                        <input tabindex="13" type = "text" v-model="employee.address" id="address" name="address" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label for="numberPhone">
                            ĐT Di động
                            <p>*</p>    
                        </label>
                        <input tabindex="14" type = "tel"
                            required
                            v-model="employee.phoneNumber"
                            title="Đây là trường bắt buộc!"
                            oninput="validateNumberPhoneInput(this)" 
                            oninvalid="this.setCustomValidity('Vui lòng nhập số điện thoại hợp lệ!')"
                            id="numberPhone" name="numberPhone" 
                        />
                    </div>
                    <div class="form-group">
                        <label for="landline">ĐT Cố định</label>
                        <input tabindex="15" v-model="employee.landline" type = "tel" id="landline" name="landline"/>
                    </div>
                    <div class="form-group">
                        <label for="email">
                            Email
                            <p>*</p>    
                        </label>
                        <input tabindex="16" type = "email"
                            required
                            v-model="employee.email"
                            title="Đây là trường bắt buộc!"
                            oninvalid="this.setCustomValidity('Vui lòng nhập email hợp lệ!')"
                            id="email" name="email"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label for="bankAccount">Tài khoản ngân hàng</label>
                        <input tabindex="17" v-model="employee.bankAccount" type = "number" pattern="\d{10,20}" id="bankAccount" name="bankAccount"/>
                    </div>
                    <div class="form-group">
                        <label for="bankName">Tên ngân hàng</label>
                        <input tabindex="18" v-model="employee.bankName" type = "text" id="bankName" name="bankName"/>
                    </div>
                    <!-- <div class="form-group">
                        <label for="branch">Chi nhánh</label>
                        <div class="branch option">
                            ${
                                branchValues
                                .filter(item => item.value !== "find-all")
                                .map(item => (
                                    `
                                        <input tabindex="19" 
                                            type="radio" id="${item.value}" 
                                            name="branch"
                                            value="${item.value}"
                                        />
                                        <label for="${item.value}">${item.value}</label>
                                    `
                                ))
                                .join('')
                            }
                        </div>
                    </div> -->
                </div>
                <div class="modal-footer">
                    <input tabindex="21" @click="closeDialog" class = "btnClose" title="F9" type="button" value="Hủy"/>
                    <input tabindex="20" class = "btnSave" title="F8" type="submit" value="Cất"/>
                </div>
            </form>        
        </div>
    </div>
</template>

<style scoped>
    @import "../../style/index.css";
</style>>

<script>
import axios from 'axios';
export default {
    name: 'EmployeeDetailDialog',
    components: {
        
    },
    watch: {
        employeeSelected: function (value) {
            this.employee = value
        },
        employeeSelectedId: function (value) {
            this.employeeCode = value;
            if (value) {
                axios.get(`https://localhost:7004/api/v1/employees/get-one-by-code?code=${this.employeeCode}`)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    },
    props: ['isShow', 'employeeSelected', 'employeeSelectedId'],
    data() {
        return {
            employee: {},
            employeeCode: ''
        }
    },
    methods: {
        closeDialog() {
            this.$emit('ishowDialog', false);
        }
    },
}
</script>
