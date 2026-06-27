"use client";

import EmailLogsTab from "@/components/EmailLogsTab";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function LogsPage() {
  return (
    <div>
      <Breadcrumbs crumbs={[{ label: "Email Logs" }]} />
      <EmailLogsTab />
    </div>
  );
}
