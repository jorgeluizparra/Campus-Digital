<template>
    <div>
        <v-text-field
            v-model="searchValue"
            label="Procurar"
            hide-details="auto"
        ></v-text-field>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['showSearchValue']),
        searchValue: {
            get () {
                return this.showSearchValue
            },
            set (value) {
                this.setSearch(value)
            }
        }
    },
    methods: {
        ...mapActions([
            'setSearch'
        ])
    },
}
</script>