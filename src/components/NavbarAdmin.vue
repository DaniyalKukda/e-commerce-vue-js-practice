<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="black">
        <b-navbar-brand style="padding-left: 20px;" @click="goHome" href="#">
            <b-icon-person></b-icon-person>
            Admin Panel
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse style="justify-content: flex-end;
    padding-right: 20px;" id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="gohome" active>Back</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>


    <div>
        <b-modal id="modal-1" title="BootstrapVue">
           <p class="my-4">Admin!</p>
        </b-modal>
    </div>
</div>
</template>
<script>
export default {
    methods:{
        gohome(){
            this.$router.push('/')
        }
    }
}
</script>