import { Prompt } from 'next/font/google';
import { Aside } from "@/components/Aside";
import "./globals.css";

//Algumas fonts não se faz necessário especificar o WEIGHT, já outras é obrigatório
const prompt = Prompt({
    weight: ['400', '600'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export const metadata = {
    title: "Code Connect",
    description: "Uma rede Social para Devs",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br" className={prompt.className}>
            <body>
                <div className='app-container'>
                    <div>
                        <Aside />
                    </div>
                    <div className='main-content'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
