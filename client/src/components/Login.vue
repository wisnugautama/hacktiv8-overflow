<template>
    <v-container>
        <v-card class="kartu">
        <h1>Login Form</h1>
        <v-form v-model="valid">
            <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" type="password" :rules="passRules" label="Password" required></v-text-field>
            <h4>Don't Have an Account? <router-link to="/register">Register here</router-link></h4>
            <br>
            <v-btn color="black" @click="loginUser">Submit</v-btn>
        </v-form>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data () {
        return {
            valid: false,
            password: '',
            passRules: [
                v => !!v || 'Password is required',
                v => v.length >= 6 || 'Password must be greater than 6 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }
    },

    methods: {
        ...mapActions([
            'login'
        ]),

        loginUser () {
            let obj = {
                email: this.email,
                password: this.password
            }

            this.login(obj)
        }
    }
}
</script>

<style scoped>
    .kartu {
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        /* width: 500px; */
        padding: 10px;
    }
</style>
