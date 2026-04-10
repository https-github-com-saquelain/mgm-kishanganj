import './globals.css'

export const metadata = {
  title: 'Mata Gujri Memorial Medical College & LSK Hospital, Kishanganj',
  description: 'Official website of Mata Gujri Memorial Medical College & Lions Seva Kendra Hospital, Kishanganj, Bihar. Established 1990. Recognized by NMC & Govt. of India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}