import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Surveillance() {
  const cameras = [
    { id: "#0192", area: "NH/05", status: "Не в сети" },
    { id: "#0155", area: "NH/03", status: "В сети" },
    { id: "#0123", area: "NH/23", status: "В сети" },
    { id: "#0153", area: "NH/02", status: "Не в сети" },
    { id: "#0245", area: "NH/12", status: "В сети" },
    { id: "#0504", area: "NH/14", status: "В сети" },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Видеонаблюдение</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span>Район</span>
                <Select defaultValue="central">
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">Центральный</SelectItem>
                    <SelectItem value="north">Западный</SelectItem>
                    <SelectItem value="south">Прикубанский</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-8 text-sm text-gray-400">
                <div>Все камеры: 55</div>
                <div>Активные камеры: 35</div>
                <div>Неактивные камеры: 20</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cameras.map((camera) => (
              <Card key={camera.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-700 relative">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt={`Camera ${camera.id}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-xs">
                      Кам {camera.id}
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-2">
                      <div className="text-xs">Область: {camera.area}</div>
                      <div className={`text-xs ${camera.status === 'В сети' ? 'text-green-400' : 'text-red-400'}`}>                      
                      Статус: {camera.status}
                      </div>
                    </div>
                    <button className="absolute bottom-2 right-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-3 py-1 rounded text-xs">
                      Просмотр
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}