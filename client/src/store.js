import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question_list: [],
    my_questions: [],
    title: '',
    description: ''
  },

  mutations: {
    setQuestionList (state, payload) {
      state.question_list = payload
    },

    setMyQuestion (state,payload) {
      state.my_questions = payload
    },

    setTitle (state,payload) {
      state.title = payload
    },

    setDescription (state,payload) {
      state.description = payload
    }
  },

  actions: {
    register (context,data) {
      axios({
        method: 'post',
        url: `http://localhost:3000/users/register`,
        data: {
          name: data.name,
          email: data.email,
          password: data.password
        }
      })
        .then((result) => {
          swal({
            type: 'success',
            title: result.data.message,
          })
          router.push('/login')
        })
        .catch((err) => {
          swal({
            type: 'error',
            title: err.message,
          })
        });
    },

    login (context,data) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: {
          email: data.email,
          password: data.password
        }
      })
        .then((result) => {
          swal(result.data.message)
          localStorage.setItem('token', result.data.token)
          this.state.cek_token = localStorage.getItem('token')
          router.push('/')
          router.go()
        })
        .catch((err) => {
          swal(err.message)
        });
    },

    logout(context,data) {
      localStorage.removeItem('token')
      router.push('/')
    },

    getAllQuestion (context,data) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/questions'
      })
        .then((response) => {
          context.commit('setQuestionList', response.data.data)
        })
        .catch((err) => {
          
        });
    },

    getMyQuestion (context, data) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/questions/me',
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((result) => {
        context.commit('setMyQuestion', result.data.data)
      }).catch((err) => {
        
      });
    },

    getOneQuestion (context,data) {
      axios({
        method: 'get',
        url: `http://localhost:3000/questions/${data}`
      })
        .then((result) => {
          context.commit('setTitle', result.data.data.title)
          context.commit('setDescription', result.data.data.description)
        })
        .catch((err) => {
          
        });
    },

    createQuestion (context, data) {
      axios({
        method: 'post',
        url: `http://localhost:3000/questions`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          title: data.title,
          description: data.description
        }
      })
        .then((result) => {
          swal(result.data.message)
          router.push('/question')
        })
        .catch((err) => {
          
        });
    },

    deleteQuestion (context, data) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/questions/${data}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then((result) => {
          swal(result.data.message)
        })
        .catch((err) => {
          
        });
    },

    updateQuestion (context,data) {
      axios({
        method: 'put',
        url: `http://localhost:3000/questions/${data.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          title: data.title,
          description: data.description
        }
      })
        .then((result) => {
          swal(result.data.message);
          router.push('/question')
          
        })
        .catch((err) => {
          
        });
    }
  }
})
