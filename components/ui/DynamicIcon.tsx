import {
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
} from "lucide-react"

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export default function DynamicIcon({ name, size = 20, className = "" }: DynamicIconProps) {
  const iconMap: Record<string, React.ElementType> = {
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

  const Icon = iconMap[name.toLowerCase()] ?? BookOpen

  return <Icon size={size} className={className} />
}