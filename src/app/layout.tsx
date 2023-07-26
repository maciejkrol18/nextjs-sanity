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
    <html lang="pl">
      <body className={`${plusJakartaSans.className} min-h-screen`}>{children}</body>
    </html>
  );
};

export default RootLayout;
