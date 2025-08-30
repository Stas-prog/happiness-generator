import {notFound} from 'next/navigation';

type Dict = {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;  
};



export default async function AboutPage({
  strings
}: {
  strings: Dict;
}) {

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {strings.title}
      </h1>

      <p className="leading-7 text-slate-200">{strings.text1}</p>
      <p className="leading-7 text-slate-200">{strings.text2}</p>
      <p className="leading-7 text-slate-200">{strings.text3}</p>
      <p className="leading-7 text-slate-100 font-semibold italic">{strings.text4}</p>
      <p className="leading-7 text-slate-200">{strings.text5}</p>
    </div>
  );
}
