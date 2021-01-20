<template>
    <div>
        <v-simple-table class="mt-5">
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Registro Acadêmico
                    </th>
                    <th class="text-left">
                        Nome
                    </th>
                    <th class="text-left">
                        CPF
                    </th>
                    <th class="text-left">
                        Editar
                    </th>
                    <th class="text-left">
                        Deletar
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(signup, key) in signups"
                :key="key"
                >
                    <td>{{ signup.studentNumber }}</td>
                    <td>{{ signup.name }}</td>
                    <td>{{ signup.cpf }}</td>
                    <td>
                        <v-btn
                            @click="setEditData(key)"
                            class="ma-2 edit"
                            depressed
                            fab
                            text
                            small
                        >
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </td>
                    <td>
                        <delete-dialog 
                            :id="signup.id" 
                            :index="key"
                        />
                    </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        <div class="d-flex justify-center mt-10">
            <v-btn
                @click="returnPage()"
                :disabled="currentPage <= 1 ? true : false"
                small
                class="mr-4"
                depressed
                dark
                color="black">
                Voltar
            </v-btn>
            <span>{{currentPage}}/{{getPagination.totalPages}}</span>
            <v-btn
                @click="nextPage()"
                :disabled="currentPage >= getPagination.totalPages ? true : false"
                small
                class="ml-4"
                depressed
                dark
                color="black">
                Avançar
            </v-btn>
        </div>
    </div>
</template>

<script>
import dialog from '@/components/dialog.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    props: {
        signups: Array
    },
    components: {
        'delete-dialog' : dialog
    },
    computed: {
        ...mapGetters(['getPagination']),
        currentPage() {
            return parseInt(this.getPagination.page) + 1 
        }
    },
    methods: {
        ...mapActions([
            'setEditData',
            'getRegisters'
        ]),
        returnPage () {
            this.getRegisters( {page: this.getPagination.previousPage, search: this.getPagination.search} )
        },
        nextPage () {
            this.getRegisters({page: this.getPagination.nextPage, search: this.getPagination.search})
        }
    },
}
</script>

<style lang="scss">

</style>