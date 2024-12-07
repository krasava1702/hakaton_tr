import { Card, CardContent } from "@/components/ui/card"
import { Camera, DrillIcon as Drone, TrafficConeIcon as Traffic, FileText, Users, MessageSquare } from 'lucide-react'

const stats = [
  { icon: Camera, label: "Камеры", value: "1200", subtext: "Активны" },
  { icon: Drone, label: "Дроны", value: "11", subtext: "Активны" },
  { icon: Traffic, label: "Светофоры", value: "95", subtext: "Активны" },
  { icon: FileText, label: "Отчеты о происшествиях", value: "55", subtext: "Ожидают" },
  { icon: Users, label: "Загруженность дорог", value: "45%", subtext: "Высокая" },
  { icon: MessageSquare, label: "Жалобы", value: "10", subtext: "Новых сегодня" },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 flex items-center">
            <stat.icon className="h-8 w-8 mr-3 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

