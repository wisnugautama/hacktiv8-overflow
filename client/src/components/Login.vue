<template>
    <v-container>
        <v-card class="kartu">
        <h1>Login Form</h1>
        
        <v-form v-model="valid">
            <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" type="password" :rules="passRules" label="Password" required></v-text-field>
            <h4>Don't Have an Account? <router-link to="/register">Register here</router-link></h4>
            <br>
            <h4>Or Login via Faceebok :</h4>
            <fb:login-button scope="public_profile,email" @click="loginfb" onloggin="checkLoginState()"></fb:login-button>
            <br>
            <v-btn color="black" @click="loginUser">Submit</v-btn>
            
        </v-form>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from 'axios'
import swal from 'sweetalert2'
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
        },

        loginfb () {
            this.checkLoginState()
        },

        checkLoginState() {
            console.log('masuk');
            FB.getLoginStatus(function (response) {
                console.log(response);
                if (response.status == 'connected') {
                    console.log(response);
                axios.post('http://localhost:3000/users/loginfb', response.authResponse)
                    .then((data_fb) => {
                        localStorage.setItem('token', data_fb.data.token)
                        swal({
                            title: "Login Success!",
                            icon: "success",
                            button: "next",
                        });
                        this.$router.push('/')
                    })
                    .catch((err) => {
                        swal(err.message)
                    })
                }
                });
            }
    },
    
    created () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '254216188558391',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v3.1'
            });
            };

            (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
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
