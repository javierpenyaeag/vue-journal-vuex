
export default {

    // path: '/daybook',
    name: 'daybook',
    component:() => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layout/DayBookLayout.vue'), //el @ apunta al src
    children:[
        {
            path:'',
            mame:'no-entry',
            component:() => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'), //el @ apunta al src
        },
        {
            path:':id',
            mame:'entry',
            component:() => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/EntryView.vue'), //el @ apunta al src
        }
    ]

}

