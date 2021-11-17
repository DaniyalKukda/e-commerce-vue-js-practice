<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="black">
        <b-navbar-brand style="padding-left: 20px;" @click="goHome" href="#">
            <b-icon-shop></b-icon-shop>
            Shoes Store
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav style="justify-content: flex-end;
    padding-right: 20px;">
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="goToCart" active>Cart <b-icon-cart></b-icon-cart></b-nav-item>
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                        <em>Admin</em>
                    </template>
                    <b-dropdown-item v-b-modal.modal-1>Sign in</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item  v-show="!isLogin" @click="goToLogin" active>Login</b-nav-item>
                <b-nav-item v-show="!isLogin" @click="goToRegister" active>Register</b-nav-item>
                <b-nav-item v-show="isLogin" @click="logout" active>Logout</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <div>
        <b-modal hide-footer ref="my-modal" id="modal-1" title="Login">
            <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label="User:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.user" type="text" required placeholder="Enter username"></b-form-input>
                </b-form-group>
                <b-form-group style="margin-top: 20px;" id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.pass" type="password" required placeholder="Enter password"></b-form-input>
                </b-form-group>
                <b-button block style="margin-top: 20px;" type="submit" variant="success">Submit</b-button>
            </b-form>

        </b-modal>
    </div>
</div>
</template>

<script>
import {
    auth
} from "@/firebase";
export default {
    data() {
        return {
            isLogin: false,
            form: {
                user: '',
                pass: ''
            }
        }
    },
    created() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.isLogin = true
            }
        });
    },
    methods: {
        goToCart() {
            this.$router.push('/cart')
        },
        goHome() {
            this.$router.push('/')
        },
        goToLogin(){
            this.$router.push('/login')
        },
        goToRegister(){
            this.$router.push('/register')
        },
        onSubmit(e) {
            e.preventDefault();
            if (this.form.user == "admin" && this.form.pass == "12345") {
                this.$refs['my-modal'].hide()
                this.$router.push('/admin')
                localStorage.setItem('admin', JSON.stringify('true'))
            } else {
                return false
            }
        },
        logout(){
            auth.signOut()
        }
    }
}
</script>
