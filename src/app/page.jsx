
// import Image from "next/image";
import Header from "./components/Header";
import DonateContent from "./components/DonateContent";
import CopyLink from "./components/DonateContent/CopyLink";
import NavContent from "./components/DonateContent/NavContent";
import PayButton from "./components/DonateContent/PayButton";

export default function Home() {
  return (
    <>
    <Header />
    <div className="container mx-auto mt-8 text-center">
      <h1 className="mb-2 text-sm">SAÚDE / TRATAMENTOS</h1>
      <h1 className="lg:text-5xl text-2xl font-bold mb-2">Ajuda no tratamento da minha avó (Vanda)</h1>
      <h1 className="lg:mb-8 mb-3 lg:text-lg">ID: 5136040</h1>
      <DonateContent />
      <PayButton href="/contribua" textButton="Quero Ajudar"
       paddingLeft="pl-36" paddingRight="pr-36" marginBottom="mb-7"/>
      <NavContent />
    </div>
    </>
  );
}
