export default [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/main/Main')
    },
    {
        path: '/balance-replenishment/:operator',
        name: 'BalanceReplenishment',
        component: () => import('../views/balanceReplenishment/BalanceReplenishment')
    },
    {
        path: '/auth',
        name: 'Authorization',
        component: () => import('../views/authorization/Authorization')
    },
]