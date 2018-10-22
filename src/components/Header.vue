<template>
  <b-navbar>
    <b-navbar-brand to="/">sitename</b-navbar-brand>
    <b-nav right>
      <b-nav-item v-if="!authenticated" to="/features" active-class="active">Features</b-nav-item>
      <b-nav-item v-if="!authenticated" to="/stories">Stories</b-nav-item>
      <b-nav-item v-if="!authenticated" to="/pricing">Pricing</b-nav-item>
      <b-nav-item v-if="!authenticated" v-b-modal.loginModal>Login</b-nav-item>
      <b-nav-item v-if="authenticated" to="/logout">Logout</b-nav-item>
      
      <b-modal id="loginModal" ref="loginModal" title="Login" hide-footer centered>
        <b-form @submit="onSubmit">
          <b-form-group label="Email" label-for="email">
            <b-form-input id="email" v-model="form.email" type="email" autofocus></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-form-input id="password" v-model="form.password" type="password"></b-form-input>
          </b-form-group>
          <div slot="modal-footer" class="w-100">
            <b-btn class="float-right" type="submit" variant="primary">Login</b-btn>
            <b-btn class="float-right" @click="onHide">Cancel</b-btn>
          </div>
        </b-form>
      </b-modal>

    </b-nav>
  </b-navbar>
</template>

<style>
.nav-link {
  color: inherit;
  position: relative;
}
  
.nav-link.active:after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 10px;
  right: 10px;
  border-bottom: 4px solid var(--primary);
}
</style>

<script>
export default {
  data: () => ({
    authenticated: !!localStorage.token,
    form:{
      email: '',
      password: ''
    }
  }),
  
  methods: {
    onSubmit (evt){
      evt.preventDefault()
      
      // simulate network
      setTimeout(() => {
        this.$alert.success({message: 'You have been logged in.', transition: 'animated fadeInUp'})
        window.localStorage.token = Math.random()
        this.$router.push('/')
        this.$router.push('/reload')
      }, 1000)
    },
    
    onHide(evt){
      evt.preventDefault()
      this.$refs.loginModal.hide()
    }
  }
}
</script>