import react from 'react'
import { Link } from 'react-router-dom';

export default function Login(){
    return(
    <div class = "bg-[url('https://iili.io/dHMm9vS.jpg')] bg-cover bg-center h-[100vh] grid justify-center items-center">
        <div class = "bg-[#0f0f0f] w-[30rem] h-[70vh] rounded-[4%] grid justify-center grid-flow-row">
            <div class="grid justify-center">
            <h1 class="text-[white] mt-[3rem] text-[4rem] font-kanit">Login</h1>
            </div>
                
                <div class="">
                    <form class="grid grid-flow-row">

                        <input class="m-2 p-2 text-white bg-[#262626] w-[22rem] h-[3rem] rounded-[10px] border-[#ffffff] focus:border-blue-400" type='email' name='email' placeholder='Email'/>
                        <input class="m-2 p-2 text-white bg-[#262626] w-[22rem] h-[3rem] rounded-[10px]" type='password' name='password' placeholder="Password"/>

                        <Link class="ml-4 text-[#5700AE]">Forgot Password?</Link>

                        <div class="grid justify-center m-[4rem]">
                        <button type="submit" class="border-4 font-medium font-kanit border-[#5700AE] rounded-[10px] text-[2rem] text-[#5700AE] w-[10rem] self-center hover:bg-[#5700AE] hover:text-[#000000] transition duration-200">Login</button>
                        </div>

                    </form>
                </div>
        </div>
    </div>
    );
}