<template>
<div>
    <navbar />
    <div class="form-container">
        <h1>Register</h1>
        <b-form class="form" @submit="onSubmit">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter your email" required></b-form-input>
            </b-form-group>
            <br />

            <b-form-group id="input-group-2" label="Your Full Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" placeholder="Enter your name" required></b-form-input>
            </b-form-group>
            <br />

            <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                <b-form-input type="password" id="input-3" v-model="form.password" placeholder="************" required></b-form-input>
            </b-form-group>
            <br />
            <b-button type="submit" variant="success">Register</b-button>
            <b-button style="margin-left: 20px;" type="button" variant="primary">Login</b-button>
        </b-form>
    </div>
</div>
</template>

<style scoped>
</style>

<script>
import {
    auth,
    db
} from "@/firebase";
import navbar from "@/components/Navbar.vue";
export default {
    components: {
        navbar
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
                password,
                name,
            } = this.form
            try {
                const url = "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
                const res = await fetch(url)
                const randomNumber = await res.json();
                const authRes = await auth.createUserWithEmailAndPassword(email, password);
                const user = {
                    id: authRes.user.uid,
                    email,
                    name,
                    regNo: randomNumber
                }
                await db.collection("users").add(user);
                this.$router.push("/cart")
            } catch (error) {
                alert(error.message)
            }
        }
    }
};
</script>
