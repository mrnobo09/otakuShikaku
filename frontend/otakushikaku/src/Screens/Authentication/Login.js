import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="bg-[url('https://iili.io/dHMm9vS.jpg')] bg-cover bg-center h-[100vh] grid justify-center items-center">
            <div className="bg-[#0f0f0f] w-[30rem] h-[70vh] rounded-[4%] opacity-90 grid justify-center grid-flow-row backdrop-blur-md">
                <div className="grid justify-center">
                    <h1 className="text-white mt-[3rem] text-[4rem] font-kanit">Login</h1>
                </div>
                <div>
                    <form className="grid grid-flow-row">
                        <input className="m-2 p-2 text-white bg-[#262626] w-[22rem] h-[3rem] rounded-[10px]" type='email' name='email' placeholder='Email' />
                        <input className="m-2 p-2 text-white bg-[#262626] w-[22rem] h-[3rem] rounded-[10px]" type='password' name='password' placeholder="Password" />
                        <Link className="ml-4 text-[#5700AE]" to="/forgot-password">Forgot Password?</Link>
                        <button type="submit" className="mt-11 mb-11 font-medium font-kanit border-[#5700AE] rounded-[10px] text-[#ffffff] w-[22rem] h-[3rem] justify-self-center bg-[#5700AE] hover:bg-[#5700AE] transition duration-200">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
