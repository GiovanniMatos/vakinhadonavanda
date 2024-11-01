
// import Image from "next/image";
import Header from "./components/Header";
import DonateContent from "./components/DonateContent";
// import CopyLink from "./components/DonateContent/CopyLink";
import NavContent from "./components/DonateContent/NavContent";
import PayButton from "./components/DonateContent/PayButton";
import Footer from "./components/Footer";
// lg:ml-[-33rem]
export default function Home() {
  return (
    <>
    <Header />
    <div className="container mx-auto mt-8 text-center">
      <h1 className="mb-2 text-sm">SAÚDE / TRATAMENTOS</h1>
      <h1 className="lg:text-5xl text-2xl font-bold mb-2 pl-">Ajuda no tratamento da minha avó (Vanda)</h1>
      <h1 className="lg:mb-8 mb-3 lg:text-lg pr-">ID: 5136040</h1>
      <DonateContent />
      <div className="lg:text-justify">
        <PayButton href="/contribua" textButton="Quero Ajudar"
        paddingLeft="pl-20" paddingRight="pr-20" marginBottom="mb-7"/>
      </div>
      <NavContent />
    </div>
    <Footer />
    </>
  );
}
