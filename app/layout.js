import { Urbanist } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata = {
  title: "Leggero - Cres Rent a Boat",
  description: "Cres rent a boat, kayak, paddle board and electric scooter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${sourceSans.className}`}>
        <main
          className={`  min-h-screen flex flex-col justify-between font-sans `}
        >
          <div className="w-full  flex-grow">
            <ContactInfo />
            <Nav />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
