import { IoPersonCircleOutline } from "react-icons/io5";

export default function Header(){
    return(
        <header>
            <nav className="bg-white shadow pt-3 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex ml-[-2.5rem]">
                                <a href="/">
                                    <div className="pt-2 pb-2 w-12 ml-9 rounded-md bg-green-500">
                                        <h1 className="text-white font-bold mx-auto text-center text-2xl">V</h1>
                                    </div>
                                </a>
                                <a href="/"><h1 className="font-bold text-green-400 mt-1 ml-2 text-2xl">VAQUINHA</h1></a>
                                
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold">Como ajudar</a>
                                    <a href="#" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold">Descubra</a>
                                    <a href="#" className="text-gray-700 px-3 py-2 rounded-md text-lg font-bold">Como funciona</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div id="circle-profile" className="mr-5 bg-gray-500 pt-2 pb-2 pr-2 pl-2 rounded-full">
                                    <IoPersonCircleOutline size="25px" color="white"/>
                                </div>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://www.vakinha.com.br/vaquinha/ajuda-no-tratamento-da-minha-avo-vanda">Entrar</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}