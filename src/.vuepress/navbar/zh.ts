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
            { text: 'Array', link: 'es6新增array' },
            { text: 'String', link: 'String字符串方法' }
        ]
    },
    {
        text: 'Vue',
        icon: 'vue',
        prefix: '/posts/vue/',
        children: ['Vuex', { text: 'Router', link: 'vue-router-beforeach' }]
    },
    {
        text: 'Node',
        icon: 'nodeJS',
        prefix: '/posts/node/',
        children: ['node', { text: 'fs模块', link: 'fs模块' }]
    },
    {
        text: 'React',
        icon: 'react',
        prefix: '/posts/react/',
        children: [{ text: 'react-native', link: 'react' }]
    },
    { text: '关于', icon: 'profile', link: '/intro.html' }
])
