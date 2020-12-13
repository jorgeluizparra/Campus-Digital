<template>
  <div class="students">
    <search-field></search-field>
    <list-students class="lista" :students="showStudents"></list-students>
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
</style>