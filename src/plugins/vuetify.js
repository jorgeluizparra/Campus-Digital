import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            primary: colors.shades.black,
            secondary: colors.red.darken4,
            accent: colors.grey.lighten1,
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
