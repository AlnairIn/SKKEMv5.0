import { Activity, Cog, Database, DraftingCompass, Radar, ScanSearch, ShieldCheck, type LucideProps } from "lucide-react";
import type { IconName } from "@/lib/services";

const icons = {
  "scan-search": ScanSearch,
  "drafting-compass": DraftingCompass,
  activity: Activity,
  radar: Radar,
  cog: Cog,
  database: Database,
  "shield-check": ShieldCheck,
} as const;

export default function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden {...props} />;
}
