"use client";

import ApiKeysTab from "@/components/ApiKeysTab";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ApiKeysPage() {
  return (
    <div>
      <Breadcrumbs crumbs={[{ label: "API Keys" }]} />
      <ApiKeysTab />
    </div>
  );
}
