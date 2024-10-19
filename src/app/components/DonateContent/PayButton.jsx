
// import Link from 'next/link';

export default function PayButton({href, textButton, paddingLeft, paddingRight, marginBottom}) {
  return (
    <>
    <button className={`${marginBottom} mt-4`}>
      <a href={href} 
      className={`bg-green-400 hover:bg-green-500 ${paddingLeft} ${paddingRight} pt-3 pb-3 
      text-2xl text-white font-bold rounded-md lg:pl-72 lg:pr-72`}>
        {textButton}
      </a>
    </button>
    </>
  );
}