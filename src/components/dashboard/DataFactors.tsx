"use client";

import { Database, TrendingUp, TrendingDown, Minus, CloudSun, Thermometer, Wind, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dataFactors } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  neutral: Minus,
};

const factorIcons: Record<string, React.ElementType> = {
  "Historical Admissions": Database,
  "Flu Season Index": Thermometer,
  "Weather (Cold Snap)": CloudSun,
  "Local Events": Calendar,
  "Air Quality Index": Wind,
};

export function DataFactors() {
  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-chart-4/10">
            <Database className="w-5 h-5 text-chart-4" />
          </div>
          <div>
            <CardTitle className="text-base font-semibold">Prediction Factors</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">Data sources driving forecasts</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {dataFactors.map((factor) => {
          const TrendIcon = trendIcons[factor.trend as keyof typeof trendIcons];
          const FactorIcon = factorIcons[factor.name] || Database;
          
          return (
            <div key={factor.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FactorIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{factor.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{factor.weight}%</span>
                  <TrendIcon 
                    className={cn(
                      "w-4 h-4",
                      factor.trend === "up" && "text-destructive",
                      factor.trend === "down" && "text-success",
                      factor.trend === "neutral" && "text-muted-foreground"
                    )} 
                  />
                </div>
              </div>
              <Progress 
                value={factor.weight} 
                className="h-2"
              />
            </div>
          );
        })}
        
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Model confidence: <span className="font-semibold text-success">94.2%</span> based on historical accuracy
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
