<template>
    <div>
        <v-simple-table>
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
                v-for="(student, key) in students"
                :key="key"
                >
                    <td>{{ student.studentNumber }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.cpf }}</td>
                    <td>
                        <v-btn
                            @click="editRegister(key)"
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
                        <delete-dialog :id="key" />
                    </td>
                </tr>
            </tbody>
            </template>
  </v-simple-table>
    </div>
</template>

<script>
import dialog from '@/components/dialog.vue';
import { mapActions } from 'vuex';

export default {
    props: {
        students: Array
    },
    components: {
        'delete-dialog' : dialog
    },
    methods: {
        ...mapActions([
            'editRegister'
        ])
    },
}
</script>

<style lang="scss">

</style>