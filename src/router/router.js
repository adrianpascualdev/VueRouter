
import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/module/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/module/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/module/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/module/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? { id: 1 } : { id: id }
                }
            },
            {
                path: '',
                redirect: {
                    name: 'pokemon-home'
                }
            }
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/module/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DbzCharacters" */ '@/module/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DbzAbout" */ '@/module/dbz/pages/About')
            },
            {
                path: '',
                redirect: {
                    name: 'dbz-characters'
                }
            }
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/module/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Guard Global - Síncrono

// router.beforeEach((to, from, next) => {
//     // console.log({to, from, next});

//     const random = Math.random() * 100;
//     if (random > 50) {
//         console.log("Autenticado");
//         next()
//     } else {
//         console.log(random, 'bloqueado por el beforEach Guard')
//         next({name: 'pokemon-home'})
//     }
// })

// const canAccess = () => {
//     return new Promise(resolve => {
//         const random = Math.random() * 100
//         if (random > 50) {
//             console.log("Autenticado - canAccess")
//             resolve(true)
//         } else {
//             console.log(random, 'bloqueado por el beforEach Guard - canAccess')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async(to, from, next) => {
    
//     const authorized = await canAccess()

//     authorized ? next() : next({name: 'pokemon-home'})

// })

export default router