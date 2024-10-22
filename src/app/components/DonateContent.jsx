import { FaHeart } from "react-icons/fa";

export default function DonateContent(){
    return(
        <>
        <div className="ml-4 lg:flex justify-between">
            <div className="mb-4 lg:ml-32">
                <img src="fotovanda1.jpg" className="lg:w-[44rem] lg:h-[26rem] w-[23.9rem] bg-slate-600 rounded-md"/>
                <p className="text-left flex">Seja um dos contribuidores desta vakinha <FaHeart className="ml-1 mt-1" color="red"/></p>
                <div className="flex">
                    <div className="bg-blue-500 pt-2 pb-2 w-12 rounded-full mr-1">
                        <h1 className="text-white font-bold mt-1">GM</h1>
                    </div>
                    <div className="text-left text-xs">
                        <p className="font-bold">Matos</p>
                        <p>Manaus AM</p>
                        <p>Ativo(a) no Vakinha desde outubro/2024</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
