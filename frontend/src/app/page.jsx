"use client";

import { Dashboard, LogInPage } from "@/components/page";
import { Record } from "@/components/page/Record";

export default function Home() {
  return (
    <main>
      <LogInPage />
      <Dashboard />
      <Record />
    </main>
  );
}
