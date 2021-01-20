<template>
  <div class="signups">
    <search-field></search-field>
    <list-signups v-if="signups.items && signups.items.length > 0" class="lista" :signups="showsignups"></list-signups>
    <h4 class="mt-4" v-else>Nenhum cadastro foi encontrado.</h4>
    <div class="mobile-signup-button-area">
      <v-btn
        to="/signup"
        class="mobile-signup-button ma-2"
        dark
        large
        fab
        color="red darken-4"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import listsignups from '@/components/list.vue';
import search from '@/components/search.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    'list-signups': listsignups,
    'search-field': search
  },
  name: 'signupsPage',
  data() {
    return {
      noRegistersMessage: {
        type: 'error',
        message: 'Nenhum cadastro foi encontrado.'
      }
    }
  },
  computed: {
    ...mapGetters([
      'showsignups'
    ]),
    ...mapState(['signups'])
  },
}
</script>

<style lang="scss">
  .lista {
    margin-top: 10px;
  }

  .mobile-signup-button-area {
    display: flex;
    justify-content: center;
    
    .mobile-signup-button {
      position: absolute;
      bottom: 75px;
    }
  }

  @media screen and (min-width: 800px) {
    .mobile-signup-button-area {
      display: none;
    }
  }
</style>