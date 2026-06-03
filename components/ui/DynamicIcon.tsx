import{
    Code2,
    Brain,
    Database,
    Globe,
    Cpu,
    Palette,
    Lock,
    Layers,
    BarChart2,
    BookOpen,
    LucideIcon,
}from "lucide-react";
const iconMap: Record<string, LucideIcon> = {
    code: Code2,
    brain: Brain,
    database: Database,
    globe: Globe,
    cpu: Cpu,
    palette: Palette,
    lock: Lock,
    layers: Layers,
    chart: BarChart2,
    book: BookOpen,
}
interface DynamicIconProps{
    iconName: string;
    size?: number;
    color?: string;
}
export default function DynamicIcon({ name, size = 20, className = "" }: DynamicIconProps) {
  const Icon = iconMap[name.toLowerCase()] ?? BookOpen

  return <Icon size={size} className={className} />
}