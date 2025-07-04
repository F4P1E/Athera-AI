import { ClientProviders } from "./client-providers";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["system", "light", "dark"]}
      enableSystem
    >
      <ClientProviders>{children}</ClientProviders>
      <Toaster />
    </ThemeProvider>
  );
}
