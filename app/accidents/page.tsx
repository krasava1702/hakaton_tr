import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, AlertTriangle } from 'lucide-react'

export default function Accidents() {
  const incidents = [
    { id: "#3B2526B01", location: "Ул. Народная 38", status: "active" },
    { id: "#3B4526B02", location: "Ростовское Ш. 231", status: "active" },
    { id: "#3B4526B03", location: "Ул. Красная 45", status: "active" },
    { id: "#3B4526B04", location: "Ул. Бабушкина 2", status: "active" },
    { id: "#3B4526B05", location: "Ул. Северная 131", status: "active" },
    { id: "#3B4526B06", location: "Ш. Нефтяников 34", status: "active" },
    { id: "#3B4526B07", location: "Ул. Зиповская 5", status: "active" },
    { id: "#3B4526B08", location: "Ул. Петра Метальникова 32", status: "active" },
    { id: "#3B4526B09", location: "Ул. Северная 405", status: "active" },
    { id: "#3B4526B10", location: "Ул. Зиповская 27", status: "active" },
    { id: "#3B4526B11", location: "Ул. Каляева 5", status: "addressed" },
    { id: "#3B4526B12", location: "Ул. Калинина 20", status: "addressed" },
    { id: "#3B4526B13", location: "Ул. Красных Партизан 14", status: "addressed" },
    { id: "#3B4526B14", location: "Ул. Толбухина 9", status: "addressed" },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Панель ДТП</h2>
              <div className="flex items-center gap-2 text-orange-400">
                <span>125 ДТП зафиксировано на сегодня</span>
                <TrendingUp className="h-4 w-4" />
                <span>↑ 15%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <RadioGroup defaultValue="all" className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <label htmlFor="all">Все</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="accidents" id="accidents" />
                  <label htmlFor="accidents">Происшествия</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="near-miss" id="near-miss" />
                  <label htmlFor="near-miss">Предаварийная ситуация</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="others" id="others" />
                  <label htmlFor="others">Другие</label>
                </div>
              </RadioGroup>

              <div className="flex items-center gap-2">
                <span>Сортировать по</span>
                <Select defaultValue="priority">
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="priority">Степени тяжести</SelectItem>
                    <SelectItem value="time">Времени</SelectItem>
                    <SelectItem value="severity">Затруднению движения</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Incidents List */}
            <div className="col-span-5 space-y-2">
              <div className="text-sm text-gray-400">55 результатов</div>
              <div className="space-y-2">
                {incidents.map((incident, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded ${
                      incident.status === "active" ? "bg-gray-800" : "bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          incident.status === "active" ? "bg-orange-500" : "bg-gray-500"
                        }`}
                      />
                      <div>
                        <div className="text-sm">{incident.id}</div>
                        <div className="text-xs text-gray-400">{incident.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map and Details */}
            <div className="col-span-7">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Детали ДТП</h3>
                    <div className="text-sm text-gray-400">#3B4526B01</div>
                  </div>

                  <div className="aspect-[4/3] bg-gray-700 rounded-lg mb-4 relative">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Map view"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Map overlay elements would go here */}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Длина затора по вине ДТП</div>
                      <div className="font-semibold">3.2 км</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Полос перекрыто</div>
                      <div className="font-semibold">2</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Тяжесть</div>
                      <div className="font-semibold flex items-center gap-1">
                        3/5
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Предположительное время решения</div>
                      <div className="font-semibold">30 минут</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Вызвать экстренные службы
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Отметить решённым
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}