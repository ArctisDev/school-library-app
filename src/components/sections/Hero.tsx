import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
      {/* Background gradients for dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue-900/40 via-slate-900 to-slate-900"></div>
      
      <div className="container relative mx-auto px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col items-start gap-6 animate-slide-in-left">
            <div className="inline-flex items-center rounded-full border border-brand-blue-500/30 bg-brand-blue-900/20 px-3 py-1 text-sm font-medium text-brand-blue-300 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue-500 mr-2 animate-pulse" />
              Desenvolvido na E. E. Prof. Gastão Valle
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl md:text-6xl text-balance">
              Transforme a biblioteca da sua escola
            </h1>
            <p className="max-w-[42rem] leading-normal text-slate-400 sm:text-xl sm:leading-8 text-balance">
              Um sistema completo, gratuito e de código aberto projetado para ajudar outras escolas a modernizarem o controle de livros, alunos e empréstimos.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 w-full justify-center">
              <Button
                size="lg"
                className="flex-1 min-w-[160px] max-w-[260px] justify-center"
                asChild
              >
                <Link href="#download">
                  Baixar para Windows
                </Link>
                <ArrowRight className="h-4 w-4 ml-3" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex-1 min-w-[160px] max-w-[260px] justify-center"
                asChild
              >
                <Link href="#funcionalidades">Explorar Recursos</Link>
              </Button>
            </div>
          </div>
          
          {/* Real App Screenshot */}
          <div className="hidden lg:flex mx-auto w-full max-w-[500px] items-center justify-center lg:max-w-none animate-float will-change-transform [backface-visibility:hidden]">
            <div className="relative flex aspect-video w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
               {/* Window Title Bar */}
               <div className="absolute top-0 left-0 right-0 h-8 bg-[#0a1628] border-b border-slate-700 flex items-center px-4 justify-between z-10">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Sistema de Gestão de Bibliotecas — Gastão Valle</div>
                  <div className="w-10"></div>
               </div>
               
               {/* App Screenshot */}
               <div className="absolute top-8 inset-x-0 bottom-0">
                  <Image
                    src="/images/library-app.jpeg"
                    alt="Interface do Sistema de Gestão de Bibliotecas mostrando o painel de controle com estatísticas de usuários, livros e empréstimos"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}