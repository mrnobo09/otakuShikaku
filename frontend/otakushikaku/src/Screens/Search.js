import Sidebar from '../Components/Sidebar'
import logo from '../Assets/Images/logo.png'
export default function Search(){
    return(
        <div class="grid bg-black w-screen h-screen">
            <Sidebar/>
            <div class="grid justify-center items-center w-full h-[60vh] self-center">
                <img 
                src={logo}
                alt='logo'
                width={200}
                class="justify-self-center"
                />
                <form class="">
                    <input class="bg-[#272727] w-[30rem] h-[3rem] text-white rounded-none p-2" placeholder="Search Anime" type='text'/>
                </form>
            </div>
        </div>
    )
}