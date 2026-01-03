"use client";

import { Bell, Search, Calendar, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Dashboard Overview</h2>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            Friday, January 3, 2026 • Last updated 5 min ago
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search predictions..."
            className="h-9 w-64 rounded-lg border border-input bg-background pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>

        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              4
            </span>
          </Button>
        </div>

        <div className="h-8 w-px bg-border" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Dr. Sarah Chen</p>
            <p className="text-xs text-muted-foreground">Hospital Administrator</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold text-sm">
            SC
          </div>
        </div>
      </div>
    </header>
  );
}
