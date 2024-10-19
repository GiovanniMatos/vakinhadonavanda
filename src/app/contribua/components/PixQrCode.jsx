import CopyLink from "@/app/components/DonateContent/CopyLink"

export default function PixQrCode(){
    return(
        <>
        <h1 className="lg:mb-8 mb-3 lg:text-lg text-left ml-3 mt-5 font-bold">Contribuir com outro valor:</h1>
        <img src="pixqrcode.jpg" className="bg-gray-800 w-[15rem] h-[15rem] mx-auto text-white font-bold"/>
        <CopyLink defaultValue="00020126580014br.gov.bcb.pix0136ad777dcb-ab7a-4df7-9424-01287cc1bbde5204000053039865802BR5924Giovanny de Melo Afonso 6008Brasilia620905058t96063044785"
        PixCode="00020126580014br.gov.bcb.pix0136ad777dcb-ab7a-4df7-9424-01287cc1bbde5204000053039865802BR5924Giovanny de Melo Afonso 6008Brasilia620905058t96063044785"/>
        </>
    )
}