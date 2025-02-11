import {configureStore} from "@reduxjs/toolkit"
import loginReducer from './auth/loginSlice'
import heroIndexReducer from './anime/heroIndexSlice'
const store = configureStore({
    reducer:{
        heroIndex: heroIndexReducer,
        login: loginReducer,
    },
})

export default store