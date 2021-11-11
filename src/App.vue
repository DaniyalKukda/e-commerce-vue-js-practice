<template>
<div id="app">
    <b-alert :show="dismissCountDown" fade variant="success" @dismiss-count-down="countDownChanged">{{message}}</b-alert>
    <div v-if="!isLogin" class="container">
        <div class="btn-container">
            <b-button @click="show = false" variant="primary">Login</b-button>
            <b-button @click="show = true" variant="success">Register</b-button>
        </div>
        <br />
        <div v-show="!show" class="auth-container">
            <h1>Login</h1>
            <br />
            <login @afterLogin="afterLogin"></login>
        </div>
        <br />

        <div v-show="show" class="auth-container">
            <h1>Register</h1>
            <br />
            <register @loginTrigger="loginTrigger"></register>
        </div>
    </div>
    <div v-else-if="isLogin" class="container">
        <div class="btn-container">
            <b-button @click="isLogin = false" variant="warning">Log Out</b-button>
        </div>
        <br />
        <div v-show="!show" class="auth-container">
            <h1>Dashboard</h1>
            <br />
            <dashboard></dashboard>
        </div>
    </div>

</div>
</template>

<style scoped>
.container {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.btn-container {
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.auth-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>

<script>
import register from "./views/Register.vue"
import login from "./views/Login.vue"
import dashboard from "./views/Dashboard.vue"

export default {
    components: {
        register,
        login,
        dashboard
    },
    data() {
        return {
            show: false,
            dismissCountDown: 0,
            message: "",
            isLogin: false
        };
    },
    methods: {
        loginTrigger(payload) {
            this.show = false
            this.message = payload.message
            this.dismissCountDown = payload.dismissCountDown
        },
        afterLogin(payload) {
            this.isLogin = true
            this.message = payload.message
            this.dismissCountDown = payload.dismissCountDown
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        }
    }
};
</script>
