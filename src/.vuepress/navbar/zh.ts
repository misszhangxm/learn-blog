import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
    '/',
    {
        text: 'Css',
        icon: 'css',
        prefix: '/posts/css/',
        children: [
            {
                text: 'flex',
                link: 'flex'
            },
            { text: 'media', link: 'media' }
        ]
    },
    {
        text: 'JavaScript',
        icon: 'javascript',
        prefix: '/posts/javascript/',
        children: [
            {
                text: 'ES6',
                children: [{ text: 'Array', link: 'es6新增array' }]
            },
            { text: 'String', link: 'String字符串方法' }
        ]
    },
    {
      text: 'Vue',
      icon: 'vue',
      prefix: '/posts/vue/',
      children: ['Vuex', { text: 'Router', link: 'vue-router-beforeach' }]
    },
    { text: '关于', icon: 'profile', link: '/intro.html' }
])
