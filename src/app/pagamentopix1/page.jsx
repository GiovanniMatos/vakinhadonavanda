import Header from "../components/Header"
import CopyLink from "../components/DonateContent/CopyLink";

export default function HomePagamento(){
    
    return(
        <>
        <Header />
        <div className="container mx-auto text-center mt-5">
            <h1 className="lg:text-5xl text-2xl font-bold mb-2">Efetue o pagamento para
            confirmar a contribuição</h1>
            <h1 className="text-lg mt-3">Você gostaria de contribuir com <span className="text-green-400 font-bold">R$ 25,00</span> :)</h1>
            <img src="pix25reais.jpg" className="mt-2 bg-gray-800 w-[15rem] h-[15rem] mx-auto text-white font-bold"/>
            <CopyLink PixCode="00020126580014br.gov.bcb.pix0136ad777dcb-ab7a-4df7-9424-01287cc1bbde520400005303986540525.005802BR5924Giovanny de Melo Afonso 6008Brasilia62090505sebab630482EE"
            defaultValue="00020126580014br.gov.bcb.pix0136ad777dcb-ab7a-4df7-9424-01287cc1bbde520400005303986540525.005802BR5924Giovanny de Melo Afonso 6008Brasilia62090505sebab630482EE"/>
        </div>

        </>
    )
}