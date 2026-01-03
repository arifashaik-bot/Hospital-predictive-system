"use client";

import { Building2, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { departmentStats } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function DepartmentStats() {
  return (
    <Card className="col-span-2 border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">Department Overview</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">Current capacity by department</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4">
          {departmentStats.map((dept) => {
            const utilization = Math.round((dept.current / dept.capacity) * 100);
            const isHigh = utilization >= 80;
            const isCritical = utilization >= 90;
            
            return (
              <div 
                key={dept.name}
                className={cn(
                  "p-4 rounded-xl border transition-all hover:shadow-md cursor-pointer",
                  isCritical ? "bg-critical/5 border-critical/20" :
                  isHigh ? "bg-warning/5 border-warning/20" :
                  "bg-muted/30 border-border"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">{dept.name}</span>
                  <div className={cn(
                    "flex items-center gap-0.5 text-xs font-medium",
                    dept.trend > 0 ? "text-destructive" : dept.trend < 0 ? "text-success" : "text-muted-foreground"
                  )}>
                    {dept.trend > 0 ? <TrendingUp className="w-3 h-3" /> : dept.trend < 0 ? <TrendingDown className="w-3 h-3" /> : null}
                    {dept.trend > 0 ? "+" : ""}{dept.trend}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className={cn(
                      "text-2xl font-bold",
                      isCritical ? "text-critical" : isHigh ? "text-warning" : "text-foreground"
                    )}>
                      {utilization}%
                    </span>
                    <span className="text-xs text-muted-foreground">capacity</span>
                  </div>
                  
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all",
                        isCritical ? "bg-critical" : isHigh ? "bg-warning" : "bg-primary"
                      )}
                      style={{ width: `${utilization}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{dept.current} occupied</span>
                    <span>{dept.capacity} total</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
