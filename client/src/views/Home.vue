<template>
<div><div class="g-signin2" data-onSuccess="onSignIn"></div>
  <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },

  methods: {
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  }
}


</script>

<style>
  .g-signin2 {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

