"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {

    const [nome,setNome] = useState("")
    const [senha,setsenha] = useState("")
    const[error,setError] = useState(null);
    const route = useRouter();


    function Logar(e:any) {
        e.preventDefault();
        setError(null)
        if (nome === "" || senha === "") {
            // setError('Ops! Formato invalido.');
            // alert("Ops! Formato invalido.")
        }else{
            route.push('/Log')
        }
    }

    return(  
    <div>
        <div className="flex flex-col justify-center items-center h-screen w-[70]">
            <form className="flex flex-col justify-center  bg-slate-400 p-14 h-[250px] gap-2 rounded-md">
                <label htmlFor="nome" className="text-lg text-slate-100">Entrar</label>
                <input type="text" onChange={(e)=>setNome(e.target.value)} value={nome} placeholder="digite seu nome" className="p-2 outline-none rounded-sm  placeholder:text-slate-300 text-base flex justify-center items-center"/>

                <input type="password" onChange={(e)=>setsenha(e.target.value)} value={senha} placeholder="senha" className="p-2 outline-none rounded-sm placeholder:text-slate-300 text-base flex justify-center items-center"/>

                <button type="submit" onClick={Logar} className="p-2 outline-none rounded bg-slate-600 text-slate-50">Entrar</button> 
            </form>
            {error && <div> <p className=" text-red-700 text-2xl mt-5">{error}</p> </div>}
        </div>
    </div>
    )
}
