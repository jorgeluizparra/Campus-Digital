<template>
  <div id="app">
    <v-app>
      <div>
        <v-toolbar class="toolbar">
          <v-toolbar-title><strong>Campus Oline</strong> - Sistema de cadastro</v-toolbar-title>
          <template class="nav-link" v-slot:extension>
            <nav-link :pages="pages" />
          </template>
        </v-toolbar>
      </div>

      <!-- Here goes the content -->
      <router-view class="page"/>

      <message-snackbar/>

      <footer>
        <nav-mobile :pages="pages"></nav-mobile>
      </footer>
    </v-app>
  </div>
</template>

<script>
import navLink from '@/components/nav.vue'
import navMobile from '@/components/nav-mobile.vue'
import { mapActions } from 'vuex'
import message from '@/components/message.vue';

export default {
  components: {
    'nav-link': navLink,
    'nav-mobile': navMobile,
    'message-snackbar': message
  },
  data() {
    return {
      pages: [
        {
          title: 'Alunos',
          icon: 'mdi-format-list-bulleted',
          route: '/'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['getRegisters']),
  },
  beforeMount() {
    this.getRegisters({page: 0, search: ''});
  },
}
</script>

<style lang="scss">
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
  }

  .toolbar {
    .v-toolbar__title {
      font-size: 2.25rem;
    }
  }

  .page {
    padding: 20px;
  }

  footer {
    display: none;
  }

  @media screen and (max-width: 800px) {
    header {
      height: fit-content !important;
    }
    .v-toolbar__title {
      font-size: 1.25rem !important;
    }
    .v-toolbar__extension {
      display: none !important;
    }
    footer {
      display: block;
    }
  }
</style>
