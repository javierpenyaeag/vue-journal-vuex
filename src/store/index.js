
import { createStore } from 'vuex'

// import journalModule from '@/modules/daybook/store/journal' 
//la importación y el uso del módulo se puede hacer de dos formas, una la de journalModule usando el mismo nombre y sin emascript6 y otra usandolo como está sin comentar
import journal from '@/modules/daybook/store/journal/index' 

const store = createStore({
    //aqui podríamos tener las mutaciones, y todo global, pero no lo voy a hacer así, sino como en la sección anterior, por módulos
    modules:{
        // journalModule: journalModule,
        journal,
    }



})

export default store

