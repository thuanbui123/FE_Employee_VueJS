<template>
    <div id="sidebar" bis_skin_checked="1">
        <ul class="menu-sidebar">
            <router-link :to="'/'" class="item active" data-page="Home" data-tooltip="Trang chủ">
                <img src="../../assets/icon/dashboard.png" alt="Home">
                <p>Trang chủ</p>
            </router-link>
            <router-link :to="'/report'" class="item" data-page="Report" data-tooltip="Báo cáo">
                <img src="../../assets/icon/report.png" alt="Home">
                <p>Báo cáo</p>
            </router-link>
            <router-link :to="'/employee'" class="item" data-page="Employee" data-tooltip="Nhân viên">
                <img src="../../assets/icon/dic-employee.png" alt="Home">
                <p>Nhân viên</p>
            </router-link>
        </ul>
        <button class="shrink">
            <i class="icofont-rounded-left icon"></i>
            <span>Thu nhỏ</span>
        </button>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#sidebar {
    width: 200px;
    margin-right: 24px;
    background-color: #3D0099;
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    transition: all 0.5s ease;
    z-index: 10;
}

#sidebar .menu-sidebar {
    margin-top: 24px;
    list-style: none;
}

.router-link-active {
    background-color: #5e25b3;
}

#sidebar .menu-sidebar a:first-child {
    margin-top: 8px;
}

#sidebar .menu-sidebar a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 15px;
    transition: all .3s ease;
    margin: 0px 8px;
}

#sidebar .menu-sidebar a img {
    filter: brightness(0) invert(1);
    margin-right: 12px;
}

#sidebar .menu-sidebar a p {
    color: #fff;
    font-size: 18px;
}

#sidebar .menu-sidebar a:hover {
    opacity: 0.7;
}

#sidebar .menu-sidebar a.router-link-active:hover {
    opacity: 1;
}

.shrink {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 18px;
    transition: all .3s ease;
    border: 1px solid transparent;
    border-top: 1px solid #ccc;
    outline: none;
    color: #fff;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 0;
}

#sidebar .shrink span {
    transition: all 0.5s ease;
}

#sidebar .shrink i {
    transition: all 0.5s ease;
}

.shrink .icon {
    margin: 0 16px;
}
</style>