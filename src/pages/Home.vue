<template>
  <div>
    <Header />
    <Content v-if="!authenticated">
      <h2>Home</h2>
      <div>
        <b-button variant="outline-info" @click="info">Info Notification</b-button>
      </div>
      <div>
        <b-button variant="outline-success" @click="success">Success Notification</b-button>
      </div>
      <div>
        <b-button variant="outline-danger" @click="danger">Danger Notification</b-button>
      </div>
    </Content>
    <Content v-if="authenticated">
    <h2>Dashboard</h2>
    </Content>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
export default {
  data: () => ({
    authenticated: !!localStorage.token
  }),
  
  components: {
    Header,
    Content
  },

  methods: {
    info() {
      this.$alert.info({message: 'Info here.'})
    },
    success() {
      this.$alert.success({message: 'Success here.'})
    },
    danger() {
      this.$alert.danger({message: 'Danger here.'})
    }
  }
}
</script>
