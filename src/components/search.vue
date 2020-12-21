<template>
    <div>
            <form @submit.prevent="submit()">
                <v-text-field
                    v-model="search"
                    label="Pesquisar"
                    color="red darken-4"
                    hide-details="auto"
                ></v-text-field>
                <div class="mt-2">
                    <v-btn
                        type="submit"
                        class="mr-4 button-search"
                        depressed
                        dark
                        color="black">
                        Pesquisar
                    </v-btn>
                    <v-btn
                        @click="setSignupData"
                        class="button-search"
                        depressed
                        dark
                        color="red darken-4">
                        Cadastar
                    </v-btn>
                </div>
            </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        ...mapActions(['getRegisters', 'setSignupData']),
        submit() {
            this.getRegisters({page: 0, search: this.search});
        }
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