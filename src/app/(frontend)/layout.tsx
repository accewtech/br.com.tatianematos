import React from 'react'
import './styles.css'

export const metadata = {
  description: 'RehabHub: gestão inteligente para clínicas de reabilitação. Mais tempo para cuidar, mais clareza para crescer.',
  title: 'RehabHub | Gestão que transforma cuidado',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
