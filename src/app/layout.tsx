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
      <body>
        <Providers>
          {/* ✅ Use className instead of inline styles */}
          <div className="app-root">
            <Header />

            <main className="app-main">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
