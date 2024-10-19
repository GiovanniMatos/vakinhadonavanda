"use client";

export default function FormPay(){
    return(
        <>
        <h1 className="lg:mb-8 mb-2 lg:text-lg text-xs text-left ml-4 text-gray-400">Preencha caso queira ser adicionado à lista de contribuidores,
            aparecerá após sua contribuição ser recebida por <span className="font-bold">G. Matos</span>
        </h1>
        <form>
            <input type="text" 
            id="email" className="mb-1 w-[30rem] p-2 text-gray-900 border border-gray-300 rounded-lg"
            placeholder="Nome"/>
            <input type="email" 
            id="email" className="w-[30rem] p-2 text-gray-900 border border-gray-300 rounded-lg"
            placeholder="E-mail"/>
        </form>
        </>
    )
}