"use client";

import { Bell, AlertTriangle, AlertCircle, Info, ChevronRight, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { alerts } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const severityConfig = {
  critical: {
    icon: AlertTriangle,
    bg: "bg-critical/10",
    border: "border-critical/20",
    text: "text-critical",
    badge: "bg-critical text-white",
  },
  warning: {
    icon: AlertCircle,
    bg: "bg-warning/10",
    border: "border-warning/20",
    text: "text-warning",
    badge: "bg-warning text-black",
  },
  info: {
    icon: Info,
    bg: "bg-chart-2/10",
    border: "border-chart-2/20",
    text: "text-chart-2",
    badge: "bg-chart-2 text-white",
  },
};

export function AlertsPanel() {
  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <Bell className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">Proactive Alerts</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">Actionable insights for planning</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold">
            {alerts.length} Active
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const config = severityConfig[alert.severity as keyof typeof severityConfig];
          const Icon = config.icon;
          
          return (
            <div
              key={alert.id}
              className={cn(
                "p-3 rounded-lg border transition-all hover:shadow-md cursor-pointer",
                config.bg,
                config.border
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn("p-1.5 rounded-md", config.badge)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={cn("text-sm font-semibold", config.text)}>{alert.title}</h4>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{alert.timestamp}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{alert.message}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-medium text-foreground">Action:</span>
                      <span className={cn("font-medium", config.text)}>{alert.action}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <Button variant="outline" className="w-full mt-2 gap-2">
          View All Alerts
          <ChevronRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
