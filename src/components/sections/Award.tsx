import { AWARD_DETAILS } from "@/domain/constants/content";
import { Trophy } from "lucide-react";
import { Button } from "../ui/button";

export function Award() {
  return (
    <section className="py-20 bg-brand-blue-950 text-white relative overflow-hidden border-y border-brand-blue-900/50">
      {/* Decorative background circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-20 h-64 w-64 rounded-full bg-brand-blue-800/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-20 h-64 w-64 rounded-full bg-brand-blue-600/20 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12 justify-between">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-medium text-brand-yellow">
            Reconhecido pela {AWARD_DETAILS.organization} • 2025
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-slate-100">
            {AWARD_DETAILS.title}
          </h2>
          <p className="max-w-2xl text-lg text-slate-300 text-balance">
            {AWARD_DETAILS.description} Nascido de uma necessidade real na E.E. Professor Gastão Valle, o projeto se destacou pela sua capacidade de modernizar o ambiente escolar.
          </p>
          <div className="mt-8">
            <Button
              className="border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow hover:bg-brand-yellow/20 hover:text-brand-yellow"
            >
              <a
                href="https://bh24horas.com.br/agencia-minas/estudantes-de-escola-estadual-desenvolvem-sistema-para-modernizar-biblioteca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais
              </a>
            </Button>
          </div>
        </div>

        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-brand-yellow/20 shadow-2xl shadow-brand-yellow/10 ring-4 ring-slate-900">
          <Trophy className="h-14 w-14 text-brand-yellow" />
        </div>
      </div>
    </section>
  );
}