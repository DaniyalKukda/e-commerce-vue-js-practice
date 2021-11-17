<template>
<div>
    <navbar />
    <div class="form-container">
        <h1>Login</h1>
        <b-form class="form" @submit="onSubmit">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter your email" required></b-form-input>
            </b-form-group>
            <br />

            <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                <b-form-input type="password" id="input-3" v-model="form.password" placeholder="************" required></b-form-input>
            </b-form-group>
            <br />
            <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
    </div>
</div>
</template>

<style>
.form-container {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.form {
    width: 40%;
}
</style>

<script>
import {
    auth,
} from "@/firebase";
import navbar from "@/components/Navbar.vue";
export default {
    components: {
        navbar,
    },
    data() {
        return {
            form: {
                email: '',
                name: '',
                password: '',
            }
        };
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            const {
                email,
                password
            } = this.form
            try {
                await auth.signInWithEmailAndPassword(email, password);
                this.$router.push("/cart")
            } catch (error) {
                alert(error.message)
            }
        }
    }
};
</script>
