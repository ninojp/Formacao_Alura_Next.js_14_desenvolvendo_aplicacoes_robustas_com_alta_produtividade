import { Prompt } from 'next/font/google';
import { Aside } from "@/components/Aside";
import "./globals.css";
import Head from 'next/head';
import {SearchForm} from '@/components/SearchForm';

//Algumas fonts não se faz necessário especificar o WEIGHT, já outras é obrigatório
const prompt = Prompt({
    weight: ['400','500', '600'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export const metadata = {
    title: "Code Connect",
    description: "Uma rede Social para Devs",
    link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br" className={prompt.className}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <body>
                <div className='app-container'>
                    <div>
                        <Aside />
                    </div>
                    <div className='main-content'>
                        <SearchForm />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
