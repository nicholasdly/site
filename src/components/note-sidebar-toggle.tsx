"use client";

import { PanelLeft } from "lucide-react";

import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function NoteSidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      size="icon-sm"
      variant="ghost"
      className="md:hidden"
      aria-label="Toggle notes list sidebar"
      onClick={toggleSidebar}
    >
      <PanelLeft className="text-primary size-5" />
    </Button>
  );
}
