import { PlugZap, Menu } from "lucide-react";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 container mx-auto">
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
  );
};

export default GeneralLayout;
