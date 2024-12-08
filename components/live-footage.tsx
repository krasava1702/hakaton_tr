import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LiveFootage() {
  const cameras = [
    { id: 1, name: "Кам 001" },
    { id: 2, name: "Кам 002" },
    { id: 3, name: "Кам 003" },
    { id: 4, name: "Кам 004" },
    { id: 5, name: "Кам 005" },
    { id: 6, name: "Кам 006" },
  ]

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Прямая трансляция</CardTitle>
        <a href="#" className="text-xs text-blue-400 hover:underline">Посмотреть полный отчет</a>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {cameras.map((camera) => (
            <div key={camera.id} className="aspect-video bg-gray-700 relative rounded">
              <div className="absolute bottom-1 left-1 text-xs bg-black bg-opacity-50 px-1 rounded">
                {camera.name}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}