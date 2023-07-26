import { PlugZap, Menu } from "lucide-react";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex gap-2">
            <PlugZap className="text-slate-900 w-6 h-6" />
            <p className="text-lg text-slate-800">Fotowoltaika Śliwson</p>
          </div>
          <div>
            <Menu className="text-slate-900 w-6 h-6" />
          </div>
        </div>
      </header>
      <main className="flex flex-col grow">{children}</main>
      <footer className="mt-4 px-4 container mx-auto">
        <div className="flex items-center justify-between py-4 border-t-slate-400 border-t-[1px]">
          <p className="text-slate-700">Prototyp strony internetowej</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneralLayout;
