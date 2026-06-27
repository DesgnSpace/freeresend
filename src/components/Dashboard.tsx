"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DomainsTab from "./DomainsTab";
import ApiKeysTab from "./ApiKeysTab";
import EmailLogsTab from "./EmailLogsTab";

type Tab = "domains" | "apikeys" | "logs";

const tabs: { id: Tab; label: string }[] = [
  { id: "domains", label: "Domains" },
  { id: "apikeys", label: "API Keys" },
  { id: "logs", label: "Email Logs" },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("domains");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-sm">FreeResend</h1>
            <span className="text-xs text-[#a3a3a3]">self-hosted</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#525252]">
            <span>{user?.email}</span>
            <button onClick={logout} className="hover:text-[#171717] transition-colors">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b border-[#e5e5e5] bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-[#171717] text-[#171717]"
                  : "border-transparent text-[#737373] hover:text-[#525252]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 mx-auto max-w-6xl w-full px-6 py-8">
        {activeTab === "domains" && <DomainsTab />}
        {activeTab === "apikeys" && <ApiKeysTab />}
        {activeTab === "logs" && <EmailLogsTab />}
      </main>

      <footer className="border-t border-[#e5e5e5] py-4 text-center text-xs text-[#a3a3a3]">
        MIT Licensed &middot; FreeResend
      </footer>
    </div>
  );
}
