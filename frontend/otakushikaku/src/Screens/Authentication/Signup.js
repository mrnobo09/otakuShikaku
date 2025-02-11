

export default function Signup(){
    return (
        <div className="bg-[url('https://iili.io/dHMm9vS.jpg')] m-0 p-0 bg-cover bg-center h-screen grid justify-center items-center">
            <div className="bg-[#0f0f0f] md:w-[30rem] w-screen md:h-[70vh] h-screen lg:rounded-[4%] opacity-85 grid justify-center grid-flow-row backdropblur">
                <div className="grid justify-center">
                    <h1 className="text-white mt-[4rem] text-[4rem] font-kanit">Login</h1>
                </div>
                <div>
                    <form className="grid grid-flow-row">
                        <input className="m-2 p-2 text-white bg-[#262626] w-[22rem] h-[3rem] rounded-[10px] outline-none focus:outline-[#5700AE] focus:border-[#5700AE]" type='email' name='email' placeholder='Email' />
                        <input className="m-2 p-2 text-white bg-[#262626] w-[22rem] h-[3rem] rounded-[10px] outline-none focus:outline-[#5700AE] focus:border-[#5700AE]" type='password' name='password' placeholder="Password" />
                        <div class="grid grid-flow-col w-[22rem] m-2">

                            <span class="grid grid-flow-col justify-start items-center">
                                <input class="custom-checkbox" type='checkbox' name="Remember Me?"/><p class="font-kanit text-[#5700AE] ml-2">Remember Me?</p>
                            </span>
                            
                            <Link className="text-[#5700AE] self-end text-end" to="/forgot-password">Forgot Password?</Link>
                        </div>
                       
                        <button type="submit" className="mt-11 mb-11 font-medium font-kanit border-[#5700AE] rounded-[10px] text-[#ffffff] w-[22rem] h-[3rem] justify-self-center bg-[#5700AE] hover:bg-[#5700AE] transition duration-200">Login</button>
                    </form>
                </div>
                <div class='m-2'>
                    <p class="font-kanit text-[#807e7e] text-[15px] md:text-left text-center">Don't have an account? <Link class="underline">Sign Up</Link> here</p>
                </div>
            </div>
        </div>
    );
}