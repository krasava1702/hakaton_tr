import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function IncidentReport() {
  const data = {
    total: 135,
    breakdown: [
      { label: "Смертельные", value: 25, color: "bg-red-500" },
      { label: "Тяжелые травмы", value: 45, color: "bg-yellow-500" },
      { label: "Легкие травмы", value: 65, color: "bg-green-500" },
    ]
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Происшествия - Месячный отчет</CardTitle>
        <span className="text-xs text-muted-foreground">Июнь 2023</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Всего происшествий: {data.total}</div>
        <div className="mt-4 space-y-2">
          {data.breakdown.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-2 h-2 rounded-full ${item.color} mr-2`} />
              <div className="flex-1 text-sm">{item.label}</div>
              <div className="text-sm font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

