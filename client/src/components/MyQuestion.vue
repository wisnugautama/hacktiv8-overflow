<template>
    <v-container>
        <h1>My Questions</h1>
        <br>
        <v-layout>
            <v-flex class="tes">
            <v-card v-for="(data,i) in my_questions" v-bind:key="i">
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0"> {{ data.title }} </h3>
                    <div> {{ data.description }} </div>
                    <hr>
                </div>
                </v-card-title>

                <v-card-actions>
                    <router-link :to="`/forum/question/${data._id}`">
                        <v-btn flat color="orange">Show</v-btn>
                    </router-link>
                    <router-link :to="`/forum/question/update/${data._id}`">
                        <v-btn flat color="orange">Update</v-btn>
                    </router-link>
                <v-btn flat color="orange" @click="remove(data._id)">Delete</v-btn>
                </v-card-actions>
                
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    
    computed: {
        ...mapState({
            my_questions: 'my_questions'
        })
    },

    methods: {
        ...mapActions([
            'getMyQuestion',
            'deleteQuestion'
        ]),

        remove (data) {
            this.deleteQuestion(data)
        }
    },

    watch: {
        my_questions: function () {
            this.getMyQuestion()
        }
    },

    created () {
        this.getMyQuestion()

    }
}
</script>

<style>
    
</style>
