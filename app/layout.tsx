// import './globals.css';

// export const metadata = {
//   title: 'Happiness Generator',
//   description: 'Trust the lot when choices are equal.',
// };

// export default function RootLayout({children}: {children: React.ReactNode}) {
//   return (
//     <html lang="uk" className="h-full">
//       <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
//         <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
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
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
