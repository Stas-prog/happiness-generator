
import "./globals.css";

export const metadata = {
  title: "Happiness Generator",
  description: "Trust the lot when options are equal.",
  openGraph: {
    title: "Happiness Generator",
    description: "Trust the lot when options are equal.",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "Happiness Generator",
    images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Happiness Generator",
    description: "Trust the lot when options are equal.",
    images: ["/og.png"]
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk"> 
    <head>
<meta name="google-site-verification" content="7P7IsqPfFXMQABIZN0T44GZolCul0Z9unEH7T4EcJIY" />
<meta name="msvalidate.01" content="527A1635453DA8D34E75FB340CAA8F40" />
    </head>  
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
