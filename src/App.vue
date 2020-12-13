<template>
  <div id="app">
    <v-app>
      <div>
        <v-toolbar class="toolbar">
          <img src="./assets/icon.webp" >
          <v-toolbar-title><strong>EdTech</strong> - Sistema de cadastro</v-toolbar-title>
          <template class="nav-link" v-slot:extension>
            <nav-link :pages="pages" />
          </template>
        </v-toolbar>
      </div>

      <!-- Here goes the content -->
      <router-view class="page"/>

      <footer>
        <nav-mobile :pages="pages"></nav-mobile>
      </footer>
    </v-app>
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
          title: 'Alunos',
          icon: 'mdi-format-list-bulleted',
          route: '/'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
  }

  .toolbar {
    
    img {
      width: 90px;
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

    .v-toolbar__extension {
      display: none !important;
    }

    footer {
      display: block;
    }
  }
</style>
