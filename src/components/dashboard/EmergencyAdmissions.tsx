"use client";

import { Activity, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { admissionsForecast } from "@/lib/mock-data";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

export function EmergencyAdmissions() {
  const todayPrediction = admissionsForecast[3];
  const peakDay = admissionsForecast.reduce((max, item) => 
    item.predicted > max.predicted ? item : max
  );

  return (
    <Card className="col-span-2 border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-chart-1/10">
              <Activity className="w-5 h-5 text-chart-1" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">Emergency Admissions Forecast</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">7-day prediction with confidence interval</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">{todayPrediction.predicted}</p>
              <p className="text-xs text-muted-foreground">Expected today</p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-destructive/10 text-destructive text-xs font-medium">
              <ArrowUp className="w-3 h-3" />
              +30%
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={admissionsForecast} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="admissionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                domain={['dataMin - 20', 'dataMax + 20']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
                labelStyle={{ color: 'var(--foreground)', fontWeight: 600 }}
              />
              <ReferenceLine x="Jan 5" stroke="var(--muted-foreground)" strokeDasharray="5 5" opacity={0.5} />
              <Area
                type="monotone"
                dataKey="upper"
                stroke="none"
                fill="url(#confidenceGradient)"
                stackId="confidence"
              />
              <Area
                type="monotone"
                dataKey="lower"
                stroke="none"
                fill="var(--background)"
                stackId="confidence"
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="var(--chart-1)"
                strokeWidth={2}
                fill="url(#admissionsGradient)"
                dot={{ fill: 'var(--chart-1)', strokeWidth: 0, r: 4 }}
                activeDot={{ fill: 'var(--chart-1)', strokeWidth: 2, stroke: 'var(--background)', r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="var(--foreground)"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="none"
                dot={{ fill: 'var(--foreground)', strokeWidth: 0, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-1" />
            <span className="text-xs text-muted-foreground">Predicted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-foreground" style={{ borderStyle: 'dashed' }} />
            <span className="text-xs text-muted-foreground">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-chart-1/20" />
            <span className="text-xs text-muted-foreground">Confidence Range</span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/20">
          <p className="text-sm text-warning font-medium flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Peak expected on {peakDay.date}: {peakDay.predicted} admissions (+37% vs baseline)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
