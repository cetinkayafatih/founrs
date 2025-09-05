import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("section-padding", className)}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = "Section";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("container mx-auto container-padding", className)}
      {...props}
    >
      {children}
    </div>
  )
);
Container.displayName = "Container";

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
}

const MaxWidthWrapper = React.forwardRef<HTMLDivElement, MaxWidthWrapperProps>(
  ({ className, children, maxWidth = "7xl", ...props }, ref) => {
    const maxWidthClasses = {
      sm: "max-w-sm",
      md: "max-w-md", 
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full", maxWidthClasses[maxWidth], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MaxWidthWrapper.displayName = "MaxWidthWrapper";

export { Section, Container, MaxWidthWrapper };
