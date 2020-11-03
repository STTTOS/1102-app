<template>
    <div>
        <header class="header">
            <img src="../static/img/logo.jpg" alt="logo" />
        </header>
        <div class="main">
            <nav class="nav-bar">
                <dl class="list-wrapper">
                    <dt class="list-title">运单管理</dt>
                    <router-link
                        tag="dd"
                        :to="{ name: 'index' }"
                        class="list-item"
                    >
                        <i :class="['el-icon-s-cooperation', 'icon']"></i>
                        项目管理
                    </router-link>
                    <router-link
                        tag="dd"
                        :to="{ name: 'dispatch' }"
                        class="list-item"
                    >
                        <i class="el-icon-s-management icon"></i>
                        调度管理
                    </router-link>
                    <router-link
                        tag="dd"
                        :to="{ name: 'orders' }"
                        class="list-item"
                    >
                        <i class="el-icon-s-custom icon"></i>
                        承运商订单
                    </router-link>
                </dl>
            </nav>
            <router-view class="data-view">右侧展示区域</router-view>
        </div>
    </div>
</template>