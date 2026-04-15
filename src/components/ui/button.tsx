import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    
    // Adaptado para o tema escuro
    const variants = {
      default: "bg-brand-blue-600 text-white hover:bg-brand-blue-500 shadow-sm",
      outline: "border border-brand-blue-500/30 bg-transparent hover:bg-brand-blue-900/50 text-brand-blue-300",
      ghost: "hover:bg-brand-blue-900/50 text-brand-blue-300",
      link: "text-brand-blue-400 underline-offset-4 hover:underline",
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }