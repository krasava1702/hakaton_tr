import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TrafficCongestion() {
  const data = [
    { label: "Двухколесные", value: 34 },
    { label: "Легковые", value: 27 },
    { label: "Маршрутки", value: 13 },
    { label: "Автобусы", value: 17 },
    { label: "Грузовые", value: 23 },
    { label: "Другие", value: 11 },
  ]

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Загруженность дорог</CardTitle>
        <span className="text-xs text-muted-foreground">За 24 часа</span>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <div className="w-1/2">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                {data.map((item, index) => {
                  const angle = (item.value / 100) * 360
                  const offset = data.slice(0, index).reduce((sum, i) => sum + i.value, 0) / 100 * 360
                  return (
                    <circle
                      key={index}
                      r="16"
                      cx="16"
                      cy="16"
                      fill="transparent"
                      stroke={`hsl(${index * 60}, 70%, 50%)`}
                      strokeWidth="32"
                      strokeDasharray={`${angle} ${360 - angle}`}
                      transform={`rotate(${offset - 90} 16 16)`}
                    />
                  )
                })}
              </svg>
            </div>
          </div>
          <div className="w-1/2 space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-2 h-2 rounded-full bg-[hsl(${index * 60},70%,50%)] mr-2`} />
                <div className="flex-1 text-xs">{item.label}</div>
                <div className="text-xs font-medium">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

