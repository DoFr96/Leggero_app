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
