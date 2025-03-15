
import './globals.css'
import { Metadata } from 'next'
import Navigation from '../components/Navigation'
import ScrollToTop from '../components/ScrollToTop'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Handyman Karim - Professional Handyman Services',
  description: 'Your trusted partner for all home maintenance and repairs in the area. Offering professional handyman services including home repairs, installations, and maintenance.',
  keywords: 'handyman, home repairs, installations, maintenance, professional services',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
      <Script 
  id="microsoft-clarity" 
  strategy="lazyOnload" 
  dangerouslySetInnerHTML={{
    __html: `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "q3ftb0col6");`
  }}
/>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  )
}