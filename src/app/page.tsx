"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { EmergencyAdmissions } from "@/components/dashboard/EmergencyAdmissions";
import { ICUDemand } from "@/components/dashboard/ICUDemand";
import { StaffWorkload } from "@/components/dashboard/StaffWorkload";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { DataFactors } from "@/components/dashboard/DataFactors";
import { DepartmentStats } from "@/components/dashboard/DepartmentStats";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-chart-3/3 rounded-full blur-3xl" />
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col relative">
        <Header />

        <ScrollArea className="flex-1">
          <main className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary font-medium tracking-wide uppercase">Predictive Intelligence</p>
                <h1 className="text-2xl font-bold text-foreground mt-1">
                  See the future of hospital demand — before it arrives
                </h1>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-success">AI Model Active</span>
              </div>
            </div>

            <QuickStats />

            <div className="grid grid-cols-4 gap-6">
              <EmergencyAdmissions />
              <ICUDemand />
              <StaffWorkload />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <DepartmentStats />
              </div>
              <DataFactors />
            </div>

            <div className="grid grid-cols-1">
              <AlertsPanel />
            </div>

            <footer className="pt-6 pb-2 border-t border-border/50">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <p>HPIS - Hospital Predictive Intelligence System v1.0</p>
                <p>Want to bring predictive intelligence to your hospital? <span className="text-primary font-medium cursor-pointer hover:underline">Get in touch for a demo!</span></p>
              </div>
            </footer>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
