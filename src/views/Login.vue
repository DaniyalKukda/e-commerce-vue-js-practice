<template>
<div>
    <br />

    <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter your email" required></b-form-input>
        </b-form-group>
        <br />

        <b-form-group id="input-group-3" label="Password:" label-for="input-3">
            <b-form-input type="password" id="input-3" v-model="form.password" placeholder="************" required></b-form-input>
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
</div>
</template>

<style scoped>

</style>

<script>
import {
    auth,
} from "@/firebase";
export default {
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
                this.$emit("afterLogin", {
                    message:"Login Successfully!",
                    dismissCountDown:4
                })
            } catch (error) {
                alert(error.message)
            }

        }
    }

};
</script>
