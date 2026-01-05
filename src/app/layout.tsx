// import "./globals.css";
// import Providers from "./providers";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="h-full">
//       <body className="h-full bg-[#f5f7ff]">
//         <Providers>
//           <div className="flex min-h-screen flex-col bg-[#f5f7ff]">
            
//             {/* Header */}
//             <Header />

//             {/* Main content */}
//             <main className="flex-1 pt-16">
//               {children}
//             </main>

//             {/* Footer */}
//             <Footer />

//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          {/* ✅ DO NOT put Tailwind layout ABOVE ThemeRegistry */}
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f5f7fb",
            }}
          >
            <Header />

            <main
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 64,   // header height
                paddingBottom: 48 // footer height
              }}
            >
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
