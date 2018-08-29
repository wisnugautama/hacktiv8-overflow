<template>
    <div class="top">
        <v-jumbotron color="black" dark>
            <v-container fill-height>
            <v-layout align-center>
                <v-flex text-center>
                <h1>Join Us on Hacktiv8-Overflow!</h1>
                </v-flex>
            </v-layout>
            </v-container>
        </v-jumbotron>
    <v-container> 
        <v-card class="kartu">
        <h1>Register Form</h1>
        <v-form v-model="valid">
            <v-text-field v-model="name" type="text" label="Name" required></v-text-field>
            <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" type="password" :rules="passRules" label="Password" required></v-text-field>
            <h4>Already Have an Account? <router-link to="/login">Login here</router-link></h4>
            <br>
            <v-btn color="black" @click="registerUser">submit</v-btn>
        </v-form>
        </v-card>
    </v-container>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data () {
        return {
            valid: false,
            name: '',
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
            'register'
        ]),
        
        registerUser () {
            let obj = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            this.register(obj)
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
    .top {
        margin-top: -20px;
    }
</style>
