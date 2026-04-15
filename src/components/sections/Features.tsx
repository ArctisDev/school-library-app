import { APP_FEATURES } from "@/domain/constants/content";
import { Barcode, Bell, BookCheck, Bookmark, Users } from "lucide-react";

const iconMap = {
  users: Users,
  barcode: Barcode,
  "book-check": BookCheck,
  bookmark: Bookmark,
  bell: Bell,
};

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.02] mix-blend-screen" />
      
      <div className="container relative mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl">
            Tudo para sua biblioteca
          </h2>
          <p className="max-w-[42rem] text-slate-400 md:text-lg">
            Da catalogação ao empréstimo, nosso sistema simplifica cada etapa do processo diário escolar.
          </p>
        </div>
        
        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
          {APP_FEATURES.map((feature) => {
            const Icon = iconMap[feature.iconName as keyof typeof iconMap] || Users;
            return (
              <div key={feature.id} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-brand-blue-900/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-900/30 text-brand-blue-400 mb-6 group-hover:scale-110 group-hover:bg-brand-blue-600/20 transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-200">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}