import { Microscope, Package, Radio, Wrench, type LucideProps } from "lucide-react";

const icons: Record<string, typeof Package> = {
  ptp: Wrench,
  "smart-plant-solutions": Radio,
  "ndt-equipment-accessories": Microscope,
};

export default function CategoryIcon({ slug, ...props }: { slug: string } & LucideProps) {
  const Icon = icons[slug] ?? Package;
  return <Icon aria-hidden {...props} />;
}
