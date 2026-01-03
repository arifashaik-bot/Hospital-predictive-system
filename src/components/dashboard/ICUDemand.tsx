"use client";

import { Bed, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { icuOccupancy } from "@/lib/mock-data";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ReferenceLine,
} from "recharts";

export function ICUDemand() {
  const peakDay = icuOccupancy.reduce((max, item) => 
    item.occupancy > max.occupancy ? item : max
  );
  const currentOccupancy = icuOccupancy[0].occupancy;

  const getBarColor = (occupancy: number) => {
    if (occupancy >= 90) return "var(--critical)";
    if (occupancy >= 80) return "var(--warning)";
    return "var(--chart-2)";
  };

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-chart-2/10">
              <Bed className="w-5 h-5 text-chart-2" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">ICU Bed Occupancy</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">Forecasted occupancy rates</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold text-foreground">{currentOccupancy}%</p>
            <p className="text-xs text-muted-foreground">Current occupancy</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-foreground">{icuOccupancy[0].beds}/{icuOccupancy[0].total}</p>
            <p className="text-xs text-muted-foreground">Beds occupied</p>
          </div>
        </div>

        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={icuOccupancy} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
                domain={[0, 100]}
                ticks={[0, 50, 80, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
                formatter={(value: number) => [`${value}%`, 'Occupancy']}
              />
              <ReferenceLine y={80} stroke="var(--warning)" strokeDasharray="3 3" />
              <ReferenceLine y={90} stroke="var(--critical)" strokeDasharray="3 3" />
              <Bar dataKey="occupancy" radius={[4, 4, 0, 0]}>
                {icuOccupancy.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.occupancy)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center gap-4 mt-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-chart-2" />
            <span className="text-muted-foreground">Normal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: 'var(--warning)' }} />
            <span className="text-muted-foreground">High</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: 'var(--critical)' }} />
            <span className="text-muted-foreground">Critical</span>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-critical/10 border border-critical/20">
          <p className="text-sm text-critical font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Peak: {peakDay.date} at {peakDay.occupancy}% ({peakDay.beds}/{peakDay.total} beds)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
