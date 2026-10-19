"use client";

import React, { useState } from "react";
import AppSidebar from "./AppSidebar";
import { UserRole } from "./navigation";

export interface AppLayoutProps {
  role: UserRole;
  children: React.ReactNode;
}

export function AppLayout({ role, children }: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F1F7FB]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block shrink-0 sticky top-0 h-screen">
        <AppSidebar role={role} />
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 w-[252px] bg-[#123B72] h-full shadow-2xl">
            <AppSidebar
              role={role}
              onCloseMobile={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
}

export default AppLayout;

