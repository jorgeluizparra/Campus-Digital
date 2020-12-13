<template>
    <div>
        <a class="nav" v-for="(page, key) in pages" :key="key" :href="page.route">{{page.title}}</a>
    </div>
</template>

<script>
export default {
    props: {
        pages: Array
    }
}
</script>

<style lang="scss">
    .nav {
        text-decoration: none;
        padding: 5px;
        color: black;
        cursor: pointer;

        &:hover, &:active {
            border-bottom: 2px solid gray;
        }
    }
</style>