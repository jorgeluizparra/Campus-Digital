<template>
    <div>
        <v-tabs
            color="black"
            v-model="tab"
            align-with-title
        >
            <v-tabs-slider color="red darken-4"></v-tabs-slider>
            <v-tab
            v-for="(page, key) in pages"
            :key="key"
            :to="page.route"
            >
            {{ page.title }}
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
export default {
    props: {
        pages: Array
    },
    data() {
        return {
            tab: null,
        }
    },
}
</script>

<style lang="scss">
    .nav {
        text-decoration: none;
        padding: 5px;
        color: black !important;
        cursor: pointer;

        &:hover, &:active {
            border-bottom: 2px solid gray;
        }
    }
</style>