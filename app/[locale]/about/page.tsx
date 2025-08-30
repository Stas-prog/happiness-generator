import About from "components/About";
import { getMessages } from "../../../lib/messages";  

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const { locale, messages } = await getMessages(params.locale);


  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center space-y-8">
     <About  
          strings={messages.essence}/>
    </main>
  );
}











