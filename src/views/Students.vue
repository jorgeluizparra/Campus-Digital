<template>
  <div class="students">
    <search-field></search-field>
    <list-students v-if="students.items && students.items.length > 0" class="lista" :students="showStudents"></list-students>
    <message-banner class="mt-4" v-else :message="noRegistersMessage" />
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
import listStudents from '@/components/list.vue';
import search from '@/components/search.vue';
import messageBanner from '@/components/message.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    'list-students': listStudents,
    'search-field': search,
    'message-banner': messageBanner
  },
  name: 'StudentsPage',
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
      'showStudents'
    ]),
    ...mapState(['students'])
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