import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

// Fonte Flex - Se adapta ao peso que for utilizado.
// Para integrar com o Tailwind, utilizar a prop variable que irá apelidar a fonte para ser utilizada
// -> Necessário adicionar em tailwind.config a prop 'fontFamily' em 'extends'
/**
 * extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
    },
 */
// Para utilizar a fonte 'alt', somente passar a className 'font-alt' para o texto a ser renderizado
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
// Fonte não flex - Precisa especificar quais pesos queremos pra aplicação. (Utilizar array para mais de um peso)
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
