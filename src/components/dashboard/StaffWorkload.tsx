"use client";

import { Users, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staffWorkload, weeklyStaffTrend } from "@/lib/mock-data";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export function StaffWorkload() {
  const radialData = [
    { name: "Support", value: staffWorkload[2].support, fill: "var(--chart-3)" },
    { name: "Doctors", value: staffWorkload[2].doctors, fill: "var(--chart-1)" },
    { name: "Nurses", value: staffWorkload[2].nurses, fill: "var(--critical)" },
  ];

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-chart-3/10">
              <Users className="w-5 h-5 text-chart-3" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">Staff Workload</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">Night shift capacity stress</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="30%" 
              outerRadius="90%" 
              data={radialData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                dataKey="value"
                cornerRadius={4}
                background={{ fill: 'var(--muted)' }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center">
            <p className="text-2xl font-bold text-foreground">98%</p>
            <p className="text-[10px] text-muted-foreground">Nurse Load</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">
          {radialData.map((item) => (
            <div key={item.name} className="text-center p-2 rounded-lg bg-muted/50">
              <div 
                className="w-2 h-2 rounded-full mx-auto mb-1" 
                style={{ backgroundColor: item.fill }}
              />
              <p className="text-xs text-muted-foreground">{item.name}</p>
              <p className="text-sm font-semibold text-foreground">{item.value}%</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-critical/10 border border-critical/20">
          <p className="text-sm text-critical font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Night shifts critically understaffed this week
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
