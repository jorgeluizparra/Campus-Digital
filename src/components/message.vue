<template>
    <div>
        <v-card
            :color="message.type == 'success' ? 'green darken-3' : 'red darken-4'"
            dark
            v-show="message.message"
        >
            <v-card-subtitle>{{message.message}}</v-card-subtitle>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        'message': Object
    }
}
</script>