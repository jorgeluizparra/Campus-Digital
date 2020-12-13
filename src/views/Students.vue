<template>
  <div class="students">
    <search-field></search-field>
    <list-students class="lista" :students="showStudents"></list-students>
    <div class="mobile-signup-button-area">
      <v-btn
        to="/signup"
        class="mobile-signup-button ma-2"
        outlined
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
import { mapGetters } from 'vuex';

export default {
  components: {
    'list-students': listStudents,
    'search-field': search
  },
  name: 'StudentsPage',
  computed: {
    ...mapGetters([
      'showStudents',
    ])
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