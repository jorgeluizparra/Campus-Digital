<template>
    <div>
        <v-row>
            <v-text-field
                v-model="searchValue"
                label="Pesquisar"
                color="red darken-4"
                hide-details="auto"
            ></v-text-field>
            <v-btn
                class="ma-2 button-search"
                depressed
                dark
                color="black">
                Pesquisar
            </v-btn>
            <v-btn
                to="/signup"
                class="ma-2 button-search"
                depressed
                dark
                color="red darken-4">
                Cadastar
            </v-btn>
        </v-row>
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

<style lang="scss">
    @media screen and (max-width: 800px){
        .button-search {
            display: none;
        }        
    }
</style>