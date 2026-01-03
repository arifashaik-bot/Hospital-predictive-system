import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

export const metadata: Metadata = {
  title: "HPIS - Hospital Predictive Intelligence System",
  description: "AI-powered dashboard for forecasting admissions, ICU demand & staff workload",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
