import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gradient-primary text-white shadow hover:opacity-90",
        secondary: "border-transparent bg-white/10 text-white hover:bg-white/20",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-white/20 text-white hover:bg-white/10",
        mint: "border-transparent bg-mint/20 text-mint border-mint/30",
        violet: "border-transparent bg-royal-violet/20 text-royal-violet border-royal-violet/30",
        blue: "border-transparent bg-electric-blue/20 text-electric-blue border-electric-blue/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
