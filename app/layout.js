import { Inter } from 'next/font/google'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parl Training Grounds',
  description: 'competitive debate attendance tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  )
}
