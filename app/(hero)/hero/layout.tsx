import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { toPlainText } from 'next-sanity'
import { Suspense } from 'react'
import {
  Inter,
  Lexend_Deca,
  Kode_Mono,
  IBM_Plex_Mono,
  JetBrains_Mono,
} from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import '@/styles/globals.css'

import { Navbar } from '@/components/global/Navbar'
import { ThemeProvider } from '@/components/shared/shadcn/theme-provider'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing'),
)

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: homePage }] = await Promise.all([
    // loadSettings(),
    loadHomePage(),
  ])

  // const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.heading
      ? {
          template: `%s | ${homePage.heading}`,
          default: homePage.heading || 'Personal website',
        }
      : undefined,
    description: homePage?.blurb ? homePage?.blurb : undefined,
    // openGraph: {
    //   images: ogImage ? [ogImage] : [],
    // },
  }
}

const inter = Inter({ subsets: ['latin'] })
const lexendDeca = Lexend_Deca({ subsets: ['latin'] })
const kodeMono = Kode_Mono({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '300',
})
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
        </ThemeProvider>
      </body>

      {draftMode().isEnabled && <LiveVisualEditing />}
    </html>
  )
}
