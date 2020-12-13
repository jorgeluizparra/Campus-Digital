<template>
    <div>
        <v-list subheader>
            <v-list-item
                v-for="student in students"
                :key="student.title"
            >
                <v-list-item-content>
                    <v-list-item-title v-text="student.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                    </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    props: {
        students: Array
    },
    data () {
      return {
        
      }
    },
}
</script>