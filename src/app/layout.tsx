import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  creator: 'birobirobiro',
  title: 'Tabela - Zimpo Store',
  description: 'Todos os dados desse site estão vindo da tabela oficial da Zimpo Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider attribute="class" forcedTheme="dark">
        {children}
      </ThemeProvider>
    </html>
  )
}
