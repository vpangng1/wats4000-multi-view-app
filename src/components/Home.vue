<template>
  <div class="home">
    <div class="form-container"><!-- TODO: Modulate display of the .form-container using v-show and the showForm variable. -->
      <h1>Join the Web Developers Club!</h1>
      <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>

      <!-- TODO: Add an HTML element to display an error message for when the user submits invalid information. Use v-show to show/hide this message based on the validity of the form data. -->

      <form><!-- TODO: Add the proper v-on directive to let the validateForm method handle this form when it is submitted -->

        <!-- TODO: Add labels for each form field in this form. -->

        <!-- TODO: Add a username field. -->

        <!-- TODO: Add an email field. -->

        <!-- TODO: Add a password field. -->

        <!-- TODO: Add a passwordVerify field. -->


        <p><input type="submit" value="Submit"></p>
      </form>
    </div>
    <div class="success-message"><!-- TODO: Modulate display of the .success-message using v-show and the showForm variable. -->
      <h1>Thank you for signing up!</h1>
      <p>Please take our new member survey. Click here</p><!-- TODO: Link "Click here" to the survey page. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
      showForm: true,
      showError: false
    }
  },
  methods: {
    validateForm: function () {
      // Validate the form by checking the following values:
      // username must not be blank
      // email must not be blank
      // password and passwordVerify must be equal
      //
      // When the form is validated, show the .success-message content
      // If the form is invalid, show the form error message

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
