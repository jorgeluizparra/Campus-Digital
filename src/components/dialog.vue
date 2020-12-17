<template>
    <div>
        <v-row justify="center">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="ma-2 delete"
                    depressed
                    fab
                    text
                    small
                    color="red darken-4"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">
                    Deletar cadastro
                </v-card-title>
                <v-card-text>
                    Você tem certeza ?
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="black"
                    dark
                    @click="confirmDelete()"
                >
                    Confirmar
                </v-btn>
                <v-btn
                    color="red darken-4"
                    dark
                    @click="dialog = false"
                >
                    Cancelar
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            dialog: false
        }
    },
    props: {
        id: Number,
        index: Number
    },
    methods: {
        ...mapActions([
            'deleteRegister',
        ]),
        confirmDelete () {
            this.deleteRegister({
                id: this.id,
                index: this.index    
            })
            this.dialog = false
        }
    },
}
</script>