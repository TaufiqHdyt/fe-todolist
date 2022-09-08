<script>
import d$auth from '@/stores/auth.d';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'HomeView',
  data: () => ({
    input: {
      username: '',
      password: '',
    },
  }),
  computed: {
    ...mapState(d$auth, ['g$user']),
  },
  methods: {
    ...mapActions(d$auth, ['a$login']),
    async login() {
      try {
        await this.a$login(this.input);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <main>
    <form v-if="g$user.id === undefined" @submit.prevent="login">
      <input type="text" v-model="input.username" />
      <input type="password" v-model="input.password" />
      <button type="submit">Log In</button>
    </form>
    <p v-else>{{ g$user.name }}</p>
  </main>
</template>
