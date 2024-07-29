"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const [input,setInput] = useState("")
    const [input1,setInput1] = useState("")
    const[error,setError] = useState(null);
    const route = useRouter();

    function Logar(e:any) {
        e.preventDefault();
        setError(null)
        if (input && input1 == "") {
            setError("Ops!Formato inválido. Por favor, verifique e tente novamente.");
        }else{
            route.push('/')
        }
    }
    return(  
    <div>
        <div className="flex flex-col justify-center items-center h-screen w-[70]">
            <form className="flex flex-col justify-center  bg-slate-400 p-14 h-[250px] gap-2 rounded-md">
                <label htmlFor="nome" className="text-lg text-slate-100">Entrar</label>
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="digite seu nome" className="p-2 outline-none rounded-sm  placeholder:text-slate-300 text-base flex justify-center items-center"/>

                <input type="password" onChange={(e)=>setInput1(e.target.value)} value={input1} placeholder="senha" className="p-2 outline-none rounded-sm placeholder:text-slate-300 text-base flex justify-center items-center"/>

                <button type="submit" onClick={Logar} className="p-2 outline-none rounded bg-slate-600 text-slate-50">Entrar</button> 
            </form>
            {error && <div> <p className=" text-red-700 text-2xl">{error}</p> </div>}
        </div>
    </div>
    )
}
