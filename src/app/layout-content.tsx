"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPreviewPage = pathname?.startsWith("/preview");

  if (isPreviewPage) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider className="h-full">
      <AppSidebar />
      <main className="w-full h-full overflow-y-auto">
        {children}
      </main>
    </SidebarProvider>
  );
}

