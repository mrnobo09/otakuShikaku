import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home(){
    const [data,setData] = useState();
    useEffect( ()=>{
        const fetchData = async() => {
            try{
                const response = await axios.get('http://127.0.0.1:5000/')
                setData(response.data)
            }catch(error){
                console.log(error)
            }
        }

        fetchData()
    },
    []
    )

    return(
        <>
            <h1 className="text-3xl font-bold underline text-blue-400">
                {data}
            </h1>
        </>
    );
}