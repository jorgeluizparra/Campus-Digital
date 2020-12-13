<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-title>Sistema de cadastro</v-toolbar-title>

      <v-spacer></v-spacer>

      <nav-link class="nav-link" :pages="pages"></nav-link>

    </v-toolbar>

    <!-- Here goes the content -->
    <router-view class="page"/>

    <footer>
      <nav-mobile :pages="pages"></nav-mobile>
    </footer>
  </div>
</template>

<script>
import navLink from '@/components/nav.vue'
import navMobile from '@/components/nav-mobile.vue'

export default {
  components: {
    'nav-link': navLink,
    'nav-mobile': navMobile
  },
  data() {
    return {
      pages: [
        {
          title: 'Lista de alunos',
          icon: 'mdi-format-list-bulleted',
          route: '/'
        },
        {
          title: 'Cadastrar',
          icon: 'mdi-pencil',
          route: '/signup'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .page {
    padding: 20px;
  }

  footer {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .nav-link {
      display: none;
    }

    footer {
      display: block;
    }
  }
</style>
