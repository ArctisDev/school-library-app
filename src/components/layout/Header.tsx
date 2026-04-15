import { BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg shadow-lg transition-transform duration-200">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-100 tracking-tight transition-colors duration-200 group-hover:text-brand-blue-400">
              Projeto Biblioteca
            </span>
            <span className="text-xs text-slate-400">
              E. E. Prof. Gastão Valle
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="#sobre"
            className="text-sm font-medium text-slate-300 hover:text-brand-blue-400 transition-colors hidden sm:inline-block"
          >
            Sobre o Projeto
          </Link>
          <Link
            href="#funcionalidades"
            className="text-sm font-medium text-slate-300 hover:text-brand-blue-400 transition-colors hidden md:inline-block"
          >
            Funcionalidades
          </Link>
          <Link href="#download">
            <Button asChild className="hidden sm:inline-flex">
              Baixar para Windows
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
