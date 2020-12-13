<template>
    <div>
        <v-bottom-navigation
            absolute
            hide-on-scroll
            horizontal
            scroll-target="#hide-on-scroll-example"
        >
            <v-btn
            v-for="(page, key) in pages"
            :key="key"
            :to="page.route"
            color="black"
            text
            >
            <span>{{page.title}}</span>

            <v-icon>{{page.icon}}</v-icon>
            </v-btn>

        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    props: {
        pages: Array
    }
}
</script>