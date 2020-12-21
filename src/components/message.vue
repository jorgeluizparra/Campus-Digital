<template>
    <div>
        <v-row justify="center">
            <v-dialog
                v-model="getMessage.status"
                persistent
                max-width="290"
            >
            <v-card>
                <v-card-title
                  id="message-title"
                  :class="getMessage.type == 'success' ? 'green darken-4' : 'red darken-4'">
                    Mensagem
                </v-card-title>
                <v-card-text>
                    {{getMessage.message}}
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="white"
                    depressed
                    @click="closeMessage()"
                >
                    Ok
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getMessage'])
    },
    methods: {
        ...mapActions(['closeMessage'])
    },
}
</script>

<style lang="css">
    #message-title {
        color: white;
    }
</style>