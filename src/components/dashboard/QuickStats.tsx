"use client";

import { Activity, Bed, Users, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    icon: Activity,
    label: "Emergency Cases",
    value: "189",
    subValue: "Expected today",
    trend: "+30%",
    trendUp: true,
    bgClass: "bg-chart-1/10",
    textClass: "text-chart-1",
  },
  {
    icon: Bed,
    label: "ICU Occupancy",
    value: "88%",
    subValue: "44 of 50 beds",
    trend: "+16%",
    trendUp: true,
    bgClass: "bg-warning/10",
    textClass: "text-warning",
  },
  {
    icon: Users,
    label: "Staff Workload",
    value: "92%",
    subValue: "Night shift",
    trend: "+8%",
    trendUp: true,
    bgClass: "bg-critical/10",
    textClass: "text-critical",
  },
  {
    icon: AlertTriangle,
    label: "Active Alerts",
    value: "4",
    subValue: "2 critical",
    trend: "High",
    trendUp: true,
    bgClass: "bg-destructive/10",
    textClass: "text-destructive",
  },
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="relative overflow-hidden rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 transition-all hover:shadow-lg hover:border-border"
        >
          <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
            <metric.icon className="w-full h-full" />
          </div>
          
          <div className="flex items-start justify-between">
            <div className={cn("p-2 rounded-lg", metric.bgClass)}>
              <metric.icon className={cn("w-5 h-5", metric.textClass)} />
            </div>
            <span className={cn(
              "px-2 py-0.5 rounded-md text-xs font-semibold",
              metric.trendUp ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"
            )}>
              {metric.trend}
            </span>
          </div>
          
          <div className="mt-4">
            <p className="text-3xl font-bold text-foreground tracking-tight">{metric.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{metric.subValue}</p>
          </div>
          
          <p className="text-sm font-medium text-foreground/80 mt-2">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
