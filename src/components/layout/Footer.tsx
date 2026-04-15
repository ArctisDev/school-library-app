export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} E. E. Professor Gastão Valle.
          </p>
          <p className="text-xs text-slate-500">
            Compartilhando tecnologia para uma educação melhor.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="https://github.com/ArctisDev/school-library-app"
          target="_blank" rel="noopener noreferrer" 
          className="hover:text-brand-blue-400 transition-colors">Código Aberto</a>
          <a href="https://gastaovalle.com/pages/contato.html" 
          target="_blank" rel="noopener noreferrer"
          className="hover:text-brand-blue-400 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}