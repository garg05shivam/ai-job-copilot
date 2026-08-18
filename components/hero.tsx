"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Terminal,
  Activity,
  ChevronDown,
  ChevronUp,
  Play,
  Copy,
  CheckCircle2,
} from "lucide-react";

interface SignalDetail {
  id: string;
  req: string;
  category: "Architecture" | "State" | "Performance" | "Infrastructure";
  status: "VERIFIED" | "PARTIAL" | "GAP";
  confidence: number;
  evidence: string;
  filePath?: string;
  codeSnippet?: string;
  remediation?: string;
}

interface TargetRoleSpec {
  id: string;
  company: "Stripe" | "Vercel" | "Linear";
  roleTitle: string;
  seniority: "Staff" | "Lead Architect" | "Senior Product";
  overallMatch: number;
  signals: SignalDetail[];
  terminalLogs: string[];
}

const SPECIFICATION_TARGETS: TargetRoleSpec[] = [
  {
    id: "stripe-lead-fe",
    company: "Stripe",
    roleTitle: "Lead Frontend Architect — Billing UI",
    seniority: "Lead Architect",
    overallMatch: 94,
    signals: [
      {
        id: "sig-1",
        req: "Zero-CLS Token Engine & CSS Var Isolation",
        category: "Architecture",
        status: "VERIFIED",
        confidence: 98,
        evidence: "Architected CSS custom properties engine with zero layout shift",
        filePath: "packages/tokens/src/theme.ts:L42-L89",
        codeSnippet: `export const createDynamicTokenStore = (initialTheme: ThemeConfig) => {
  const root = document.documentElement;
  Object.entries(initialTheme.tokens).forEach(([key, val]) => {
    root.style.setProperty(\`--st-\${key}\`, val);
  });
  return { updateToken: (k: string, v: string) => root.style.setProperty(\`--st-\${k}\`, v) };
};`,
      },
      {
        id: "sig-2",
        req: "SSR Stream Hydration & Boundary Isolation",
        category: "Infrastructure",
        status: "VERIFIED",
        confidence: 92,
        evidence: "Implemented Suspense stream boundaries for micro-frontend widgets",
        filePath: "app/dashboard/layout.tsx:L12-L45",
        codeSnippet: `<Suspense fallback={<WidgetSkeleton />}>
  <AsyncBillingSummaryStream accountId={currentAccount.id} />
</Suspense>`,
      },
      {
        id: "sig-3",
        req: "Local-First CRDT State Synchronization",
        category: "State",
        status: "PARTIAL",
        confidence: 76,
        evidence: "IndexedDB offline queue present; Relay schema mutation pending",
        remediation: "Highlight CRDT optimistic rollback handle in architecture interview",
      },
      {
        id: "sig-4",
        req: "Wasm-accelerated Payment Cipher Audit",
        category: "Performance",
        status: "GAP",
        confidence: 48,
        evidence: "Limited Rust/Wasm binary compilation in client web layer",
        remediation: "Study Stripe Wasm crypto-worker isolation architecture pattern",
      },
    ],
    terminalLogs: [
      "[INFO] Ingested raw job spec: Stripe Lead Frontend Architect",
      "[AST] Scanning TypeScript compiler graph... 1,420 AST nodes parsed",
      "[VERIFY] CSS variable token isolation -> Match 98% (Verified in packages/tokens)",
      "[VERIFY] SSR Hydration boundaries -> Match 92% (Verified in app/dashboard)",
      "[WARN] Wasm crypto worker requirement missing direct repo evidence",
      "[SUCCESS] Fit Matrix generated: 94% signal confidence rating.",
    ],
  },
  {
    id: "vercel-staff-infra",
    company: "Vercel",
    roleTitle: "Staff Edge Runtime Architect",
    seniority: "Staff",
    overallMatch: 89,
    signals: [
      {
        id: "sig-v1",
        req: "Edge Middleware Geolocation Routing",
        category: "Infrastructure",
        status: "VERIFIED",
        confidence: 96,
        evidence: "Deployed edge geolocation router with <15ms cold start",
        filePath: "middleware.ts:L8-L32",
        codeSnippet: `export function middleware(req: NextRequest) {
  const country = req.geo?.country || 'US';
  if (country === 'EU') {
    return NextResponse.rewrite(new URL('/eu/compliance', req.url));
  }
}`,
      },
      {
        id: "sig-v2",
        req: "TypeScript AST Transformer Compiler Plugins",
        category: "Architecture",
        status: "VERIFIED",
        confidence: 91,
        evidence: "Created custom ts-morph plugins for automated code refactoring",
        filePath: "tools/ast-audit/index.ts:L15-L60",
      },
      {
        id: "sig-v3",
        req: "Distributed OpenTelemetry Span Propagation",
        category: "Performance",
        status: "PARTIAL",
        confidence: 78,
        evidence: "Instrumented trace headers; missing custom collector exporter",
      },
    ],
    terminalLogs: [
      "[INFO] Target loaded: Vercel Staff Edge Runtime Architect",
      "[AST] Running edge middleware rule evaluation...",
      "[VERIFY] Edge Geolocation Middleware -> 96% confidence",
      "[VERIFY] TypeScript Compiler API -> 91% confidence",
      "[SUCCESS] Signal evaluation complete: 89% overall match.",
    ],
  },
  {
    id: "linear-sr-prod",
    company: "Linear",
    roleTitle: "Senior Product Engineer — Desktop Client",
    seniority: "Senior Product",
    overallMatch: 91,
    signals: [
      {
        id: "sig-l1",
        req: "60fps Virtualized Windowing List System",
        category: "Performance",
        status: "VERIFIED",
        confidence: 97,
        evidence: "Rendered 50,000 active task nodes with <2ms frame budget",
        filePath: "components/virtual-list.tsx:L30-L95",
      },
      {
        id: "sig-l2",
        req: "Optimistic UI Rollback Engine",
        category: "State",
        status: "VERIFIED",
        confidence: 93,
        evidence: "Built transaction rollback manager for instant keyboard actions",
      },
    ],
    terminalLogs: [
      "[INFO] Ingesting Linear Senior Product Engineer spec",
      "[AST] Auditing 60fps windowing list & DOM node recycling...",
      "[VERIFY] Virtualized windowing -> 97% confidence",
      "[SUCCESS] Signal confidence score: 91%.",
    ],
  },
];

export default function Hero() {
  const [selectedTargetId, setSelectedTargetId] = useState<string>("stripe-lead-fe");
  const [expandedSignalId, setExpandedSignalId] = useState<string | null>("sig-1");
  const [activeTab, setActiveTab] = useState<"matrix" | "terminal" | "brief">("matrix");
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);
  const [isRunningCli, setIsRunningCli] = useState<boolean>(false);

  const activeTarget =
    SPECIFICATION_TARGETS.find((t) => t.id === selectedTargetId) ||
    SPECIFICATION_TARGETS[0];

  const toggleSignal = (id: string) => {
    setExpandedSignalId((prev) => (prev === id ? null : id));
  };

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handleSimulateCli = () => {
    setIsRunningCli(true);
    setTimeout(() => {
      setIsRunningCli(false);
    }, 1200);
  };

  return (
    <section className="relative bg-[#0F0F11] px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32 border-b border-[#26262B]">
      <div className="mx-auto max-w-7xl">
        
        {/* Asymmetric Header Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#26262B] bg-[#16161A] px-3 py-1 font-mono text-[11px] text-[#A1A1AA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              ENGINEERING FIT & AST AUDITOR
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl lg:text-6xl">
              Static Signal Analysis for Senior Engineers.
            </h1>

            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
              Replace subjective resume bullet points with deterministic AST signal matching, repository code evidence, and zero-fluff interview technical briefs.
            </p>
          </div>

          {/* Quick Metrics Badge & Actions */}
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block rounded-sm border border-[#26262B] bg-[#16161A] p-4 text-left w-full sm:w-auto">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717A] block">
                CURRENT AUDIT TARGET
              </span>
              <span className="font-mono text-sm font-semibold text-[#FAFAFA] block mt-0.5">
                {activeTarget.company} — {activeTarget.seniority}
              </span>
              <div className="mt-2 flex items-center justify-between gap-4 border-t border-[#26262B] pt-2 font-mono text-xs">
                <span className="text-[#71717A]">SIGNAL CONFIDENCE:</span>
                <span className="font-bold text-[#F59E0B]">{activeTarget.overallMatch}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* WORKBENCH CONTAINER WITH SINGLE INTERACTION SIGNATURE TRANSITION */}
        <motion.div
          id="product"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="rounded-md border border-[#26262B] bg-[#16161A] p-0 shadow-2xl transition-all duration-500 ease-[0.25,1,0.5,1]"
        >
          
          {/* Top Workbench Bar: Target Switcher & Engine Stats */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-[#26262B] bg-[#0F0F11]/80 px-4 py-3 gap-3">
            
            {/* Target Selectors */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="font-mono text-xs text-[#71717A] shrink-0">
                TARGET:
              </span>
              {SPECIFICATION_TARGETS.map((target) => (
                <motion.button
                  key={target.id}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                  onClick={() => {
                    setSelectedTargetId(target.id);
                    setExpandedSignalId(target.signals[0]?.id || null);
                  }}
                  className={`rounded-sm px-3 py-1 font-mono text-xs transition-all duration-300 ${
                    selectedTargetId === target.id
                      ? "border border-[#F59E0B]/50 bg-[#26262B] text-[#FAFAFA] font-medium"
                      : "border border-[#26262B] text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#1C1C22]"
                  }`}
                >
                  {target.company} ({target.overallMatch}%)
                </motion.button>
              ))}
            </div>

            {/* Run CLI Action */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              onClick={handleSimulateCli}
              disabled={isRunningCli}
              className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-[#F59E0B] px-3 py-1 font-mono text-xs font-semibold text-[#0F0F11] transition-all duration-500 ease-[0.25,1,0.5,1] hover:bg-[#d98b06] disabled:opacity-50"
            >
              <Play className={`h-3 w-3 ${isRunningCli ? "animate-spin" : ""}`} />
              {isRunningCli ? "RUNNING AST AUDIT..." : "RE-RUN AST SCAN"}
            </motion.button>
          </div>

          {/* Workbench Mode Tabs */}
          <div className="flex border-b border-[#26262B] bg-[#0F0F11]/40 px-4 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("matrix")}
              className={`flex items-center gap-2 border-b-2 py-3 px-4 font-medium tracking-wider transition-all duration-500 ease-[0.25,1,0.5,1] ${
                activeTab === "matrix"
                  ? "border-[#F59E0B] text-[#FAFAFA] bg-[#16161A]"
                  : "border-transparent text-[#71717A] hover:text-[#A1A1AA]"
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-[#F59E0B]" />
              REQUIREMENTS MATRIX ({activeTarget.signals.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-2 border-b-2 py-3 px-4 font-medium tracking-wider transition-all duration-500 ease-[0.25,1,0.5,1] ${
                activeTab === "terminal"
                  ? "border-[#F59E0B] text-[#FAFAFA] bg-[#16161A]"
                  : "border-transparent text-[#71717A] hover:text-[#A1A1AA]"
              }`}
            >
              <Terminal className="h-3.5 w-3.5 text-[#F59E0B]" />
              CLI TERMINAL LOGS
            </button>
          </div>

          {/* TAB 1: REQUIREMENTS MATRIX WITH EXPANDABLE CODE TRACES */}
          <AnimatePresence mode="wait">
            {activeTab === "matrix" && (
              <motion.div
                key="matrix-tab"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="p-4 sm:p-6 transition-all duration-500 ease-[0.25,1,0.5,1]"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-[#26262B] text-[#71717A] uppercase text-[10px] tracking-wider">
                        <th className="pb-3 pr-3 font-normal">Requirement Specification</th>
                        <th className="pb-3 px-3 font-normal">Category</th>
                        <th className="pb-3 px-3 font-normal">Status</th>
                        <th className="pb-3 px-3 font-normal">Confidence</th>
                        <th className="pb-3 pl-3 font-normal text-right">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#26262B]">
                      {activeTarget.signals.map((sig) => {
                        const isExpanded = expandedSignalId === sig.id;
                        return (
                          <tr key={sig.id} className="group">
                            <td colSpan={5} className="p-0">
                              {/* Main Row */}
                              <div
                                onClick={() => toggleSignal(sig.id)}
                                className="flex items-center justify-between py-3.5 px-2 hover:bg-[#1C1C22] cursor-pointer transition-colors"
                              >
                                <div className="flex items-center gap-3 flex-1 pr-4">
                                  {isExpanded ? (
                                    <ChevronUp className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                                  ) : (
                                    <ChevronDown className="h-3.5 w-3.5 text-[#71717A] shrink-0" />
                                  )}
                                  <span className="text-[#FAFAFA] font-medium text-xs">
                                    {sig.req}
                                  </span>
                                </div>

                                <div className="flex items-center gap-4 shrink-0">
                                  <span className="hidden sm:inline-block text-[10px] text-[#71717A] border border-[#26262B] px-2 py-0.5 rounded-sm">
                                    {sig.category}
                                  </span>

                                  <span
                                    className={`inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-[10px] ${
                                      sig.status === "VERIFIED"
                                        ? "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30"
                                        : sig.status === "PARTIAL"
                                        ? "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30"
                                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                                    }`}
                                  >
                                    {sig.status}
                                  </span>

                                  <span className="w-12 text-right text-[#A1A1AA]">
                                    {sig.confidence}%
                                  </span>
                                </div>
                              </div>

                              {/* Expanded Detail Panel with Motion Accordion */}
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                    className="overflow-hidden border-t border-[#26262B] bg-[#0F0F11]/90 p-4 sm:p-5 text-xs"
                                  >
                                    <div className="grid gap-4 sm:grid-cols-2">
                                      <div>
                                        <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">
                                          VERIFIED REPOSITORY EVIDENCE
                                        </span>
                                        <p className="mt-1 text-[#FAFAFA] font-sans">
                                          {sig.evidence}
                                        </p>

                                        {sig.filePath && (
                                          <div className="mt-3 flex items-center gap-2 text-[11px] text-[#F59E0B]">
                                            <Code2 className="h-3.5 w-3.5" />
                                            <span>{sig.filePath}</span>
                                          </div>
                                        )}

                                        {sig.remediation && (
                                          <div className="mt-3 rounded-sm border border-[#26262B] bg-[#16161A] p-2.5 text-[11px] text-[#A1A1AA]">
                                            <span className="text-[#F59E0B] font-bold block mb-1">
                                              REMEDIATION ACTION:
                                            </span>
                                            {sig.remediation}
                                          </div>
                                        )}
                                      </div>

                                      {/* Code Snippet Box if available */}
                                      {sig.codeSnippet && (
                                        <div className="relative rounded-sm border border-[#26262B] bg-[#16161A] p-3">
                                          <div className="flex items-center justify-between text-[10px] text-[#71717A] pb-2 border-b border-[#26262B]">
                                            <span>AST CODE NODE</span>
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopySnippet(sig.codeSnippet!);
                                              }}
                                              className="flex items-center gap-1 hover:text-[#FAFAFA]"
                                            >
                                              {copiedSnippet ? (
                                                <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                                              ) : (
                                                <Copy className="h-3 w-3" />
                                              )}
                                              {copiedSnippet ? "COPIED" : "COPY"}
                                            </button>
                                          </div>
                                          <pre className="mt-2 text-emerald-400 font-mono text-[11px] overflow-x-auto leading-relaxed">
                                            <code>{sig.codeSnippet}</code>
                                          </pre>
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* TAB 2: CLI TERMINAL LOGS */}
            {activeTab === "terminal" && (
              <motion.div
                key="terminal-tab"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="p-4 sm:p-6 font-mono text-xs bg-[#0F0F11]"
              >
                <div className="flex items-center justify-between text-[11px] text-[#71717A] pb-3 border-b border-[#26262B]">
                  <span>COPILOT_ENGINE_CLI — INTERACTIVE PROCESS LOG</span>
                  <span>STATUS: 200 OK</span>
                </div>
                <div className="mt-3 space-y-2 leading-relaxed text-[#A1A1AA]">
                  {activeTarget.terminalLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#71717A] select-none">&gt;</span>
                      <span
                        className={
                          log.includes("[VERIFY]")
                            ? "text-emerald-400"
                            : log.includes("[WARN]")
                            ? "text-[#F59E0B]"
                            : log.includes("[SUCCESS]")
                            ? "text-[#FAFAFA] font-bold"
                            : "text-[#A1A1AA]"
                        }
                      >
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Workbench Footer Bar */}
          <div className="flex items-center justify-between border-t border-[#26262B] bg-[#0F0F11]/90 px-4 py-2.5 text-[11px] font-mono text-[#71717A]">
            <span>AST SCANNER v2.4-PROD</span>
            <div className="flex items-center gap-4">
              <span>MEMORY: 14.2 MB</span>
              <span>TIME: 42ms</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
