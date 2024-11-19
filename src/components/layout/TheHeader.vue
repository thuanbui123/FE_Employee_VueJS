<template>
    <header id="header">
        <ul class="header-left">
            <li class="toggle-sidebar">
                <img src="../../assets/img/toggle.png">
            </li>
            <li><img class="logo-img" src="../../assets/cukcuk-logo.png"></li>
            <li class="menu">
                <select class="subnav">
                    
                                <option value="Hà Nội">
                                    Chi nhánh Hà Nội
                                    
                                </option>
                                ,
                                <option value="TP. Hồ Chí Minh">
                                    Chi nhánh TP. Hồ Chí Minh
                                    
                                </option>
                                ,
                                <option value="find-all">
                                    Chi nhánh tất cả chi nhánh
                                    
                                </option>
                                
                </select>
            </li>
        </ul>
        <div class="header-right" bis_skin_checked="1">
            <img src="../../assets/icon/avatar-default.png" alt="avatar" id="avatar">
            <p class="name">Bùi Văn Thuân</p>
            <button class="option">
                <img src="../../assets/icon/option.png" alt="option">
            </button>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#header {
    height: 56px;
    line-height: 56px;
    margin-bottom: 24px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
#header .header-left {
    display: flex;
    align-items: center;
    flex: 2;
    justify-content: flex-start;
}
#header .header-left li {
    display: block;
    cursor: pointer;
}
#header .toggle-sidebar {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    display: block;
    height: 56px;
}
#header .logo-img {
    display: block;
    margin-left: 12px;
    height: calc(56px - 10px);
}
#header .header-left .menu {
    margin-left: 50px;
}
#header .header-left .menu .subnav {
    border: none;
    outline: none;
    transition: all 0.3s ease;
    padding: 16px 0px;
    border-radius: 4px;
    font-size: 16px;
}
#header .header-left .menu .subnav {
    border: none;
    outline: none;
    transition: all 0.3s ease;
    padding: 16px 0px;
    border-radius: 4px;
    font-size: 16px;
}
#header .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    height: 56px;
    padding: 0 20px;
}
#header .header-right #avatar {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    border: 1px solid #ccc;
}
#header .header-right .name {
    font-size: 14px;
    margin: 0 12px;
}
#header .header-right .option {
    filter: brightness(0);
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}
</style>