import axios from 'axios'
import { loginSuccess,loginFail } from '../../State/auth/loginSlice';

const backendURL = 'http://127.0.0.1:5000'

export const login = (email,password) => async dispatch =>{
    const config = {
        headers :{'Content-Type' : 'application/json'}
    }
    const body = JSON.stringify({email,password})

    try{
        const response = await axios.post(`${backendURL}/login`,body,config)
        dispatch(loginSuccess(response.data))
        console.log(response.data)
    }catch(err){
        dispatch(loginFail())

        console.log(err)
    }
}