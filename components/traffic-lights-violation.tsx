import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrafficLightsViolation() {
  const data = [
    { day: "Вс", value: 30 },
    { day: "Пн", value: 25 },
    { day: "Вт", value: 28 },
    { day: "Ср", value: 15 },
    { day: "Чт", value: 12 },
    { day: "Пт", value: 10 },
    { day: "Сб", value: 20 },
  ]

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Нарушения светофора</CardTitle>
        <span className="text-xs text-muted-foreground">За прошлую неделю</span>
      </CardHeader>
      <CardContent>
        <div className="flex items-end space-x-2 h-40">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-8 bg-blue-500 rounded-t"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
              <div className="text-xs mt-1">{item.day}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

