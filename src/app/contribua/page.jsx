"use client";

import Header from "../components/Header"
import FormPay from "./components/FormPay"
import PayButton from "../components/DonateContent/PayButton"
import PixQrCode from "./components/PixQrCode"

export default function HomeContribua() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 text-center mb-28">
        <h1 className="lg:text-5xl text-2xl font-bold mb-2 ml-4 text-left">Ajuda no tratamento da minha avó (Vanda)</h1>
        <h1 className="lg:mb-8 mb-3 lg:text-lg text-left ml-4">ID: 5136040</h1>
        <FormPay/>
        <h1 className="lg:mb-8 mb-3 lg:text-lg text-left ml-3 mt-4 font-bold">Com quanto deseja contribuir?</h1>
        <PayButton href="/pagamentopix1" textButton="R$ 25,00" paddingLeft="pl-[11.5rem]" paddingRight="pr-[12rem]"/>
        <PayButton href="/pagamentopix2" textButton="R$ 50,00" paddingLeft="pl-[11.5rem]" paddingRight="pr-[12rem]" marginBottom="mt-[1.5rem]"/>
        <PayButton href="/pagamentopix3" textButton="R$ 100,00" paddingLeft="pl-[11.7rem]" paddingRight="pr-[11rem]" marginBottom="mt-[1.5rem]"/>
        <PixQrCode />
      </div>
    </>
  );
}