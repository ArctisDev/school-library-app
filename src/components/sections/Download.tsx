import { APP_DETAILS } from "@/domain/constants/content";
import { Download as DownloadIcon, Monitor } from "lucide-react";
import { Button } from "../ui/button";

export function Download() {
  return (
    <section id="download" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate-800 shadow-2xl border border-slate-700 flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Leve para sua escola
            </h2>
            <p className="text-slate-400 mb-8">
              O {APP_DETAILS.name} foi projetado especificamente para rodar no
              ambiente Windows da sua biblioteca ou laboratório de informática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-brand-blue-600 hover:bg-brand-blue-500 text-white shadow-lg shadow-brand-blue-900/50"
              >
                <DownloadIcon className="h-5 w-5" />
                Baixar para Windows
              </Button>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Versão {APP_DETAILS.version} • Atualizado em{" "}
              {APP_DETAILS.lastUpdated}
            </p>
          </div>

          <div className="hidden md:flex w-2/5 bg-slate-950 items-center justify-center p-12 relative overflow-hidden border-l border-slate-700">
            {/* Background image with low opacity */}
            <img
              src="/images/ready-download.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-brand-blue-900/20 mix-blend-overlay" />
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-brand-blue-600/20 blur-3xl" />
            <div className="relative z-10 text-slate-300 text-center flex flex-col items-center">
              <Monitor
                className="h-20 w-20 mb-6 text-brand-blue-400"
                strokeWidth={1.5}
              />
              <p className="font-medium text-lg text-slate-200">
                Pronto para Windows
              </p>
              <p className="text-sm mt-2 text-slate-500">
                Compatível com leitores de código de barras USB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
