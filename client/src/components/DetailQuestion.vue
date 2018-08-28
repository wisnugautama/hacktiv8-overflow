<template>
    <v-container>
        <v-layout>
            <v-flex class="tes">
            <v-card>
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0"> {{ question.title }} </h3>
                    <div> {{ question.description }} </div>
                </div>
                </v-card-title>
                <v-container>
                    <h2>Please Answer Here</h2>
                    <br>
                    <wysiwyg/>
                </v-container>
                <v-card-actions>
                <v-btn flat color="orange">Show</v-btn>
                <v-btn flat color="orange" to="/forum">Back</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from "vuex";
export default {
    data () {
        return {
            question: ''
        }
    },

    created () {
        let id = this.$route.params.id
        axios({
            method: 'get',
            url: `http://localhost:3000/questions/${id}`
        })

        .then((result) => {
            this.question = result.data.data
        })

        .catch((err) => {
        
        });
    }
}
</script>

<style scoped>

    
</style>
