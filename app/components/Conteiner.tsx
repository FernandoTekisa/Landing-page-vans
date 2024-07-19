import { ReactNode } from "react";


type props ={
    children: ReactNode
}
export default function Conteiner({children}:props) {
    return(
        <div className="flex justify-center items-center flex-col">
            {children}
        </div>
    )
}