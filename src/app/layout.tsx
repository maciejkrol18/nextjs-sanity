import { PlugZap, Menu } from "lucide-react";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import dayjs from "dayjs";
import pl from "dayjs/locale/pl";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fotowoltaika Śliwson",
    template: "%s | Fotowoltaika Śliwson",
  },
  description: "Tanie rozwiązania fotowoltaiczne w twojej okolicy",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  dayjs.locale(pl);
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <header className="px-4 container">
            <div className="flex items-center justify-between py-2">
              <div className="flex gap-2">
                <PlugZap className="w-6 h-6" />
                <p className="text-lg">Fotowoltaika Śliwson</p>
              </div>
              <div>
                <Menu className="w-6 h-6" />
              </div>
            </div>
          </header>
          <main className="flex flex-col grow">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
