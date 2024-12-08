import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Car } from 'lucide-react'

export default function Parking() {
  const violationDetails = {
    violationTime: "03:09",
    violationDate: "4 авг, 03:37:25",
    carRoute: "н/д",
    carNumber: "JFY2086",
    location: "ул. Джексона 1434, Окленд, CA 94612",
    violationType: "ABLE - Парковка",
    status: "Не обработано",
    withinEnforcement: "Да"
  }

  const thumbnails = [
    { id: "0155", type: "ABLE-Парковка", code: "Q12", time: "4 авг, 03:37:25" },
    { id: "0123", type: "Янтарная тревога", code: "MM1", time: "4 авг, 03:37:25" },
    { id: "0155", type: "Тротуар", code: "NYC1", time: "4 авг, 03:37:25" },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">ПАРКОВКА</h2>
              <div className="flex items-center gap-4">
                <span>Район</span>
                <Select defaultValue="central">
                  <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Выберите район" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">ЦЕНТРАЛЬНЫЙ РЫНОК</SelectItem>
                    <SelectItem value="north">СЕВЕРНЫЙ СЕКТОР</SelectItem>
                    <SelectItem value="south">ЮЖНЫЙ СЕКТОР</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1 flex gap-4">
              <div className="w-1/4 overflow-y-auto">
                {thumbnails.map((thumb, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 mb-4">
                    <CardContent className="p-2">
                      <div className="relative">
                        <img
                          src="/placeholder.svg?height=100&width=200"
                          alt={`Камера ${thumb.id}`}
                          className="w-full h-auto object-cover rounded"
                        />
                        <div className="absolute top-1 left-1 flex items-center gap-1 text-xs">
                          <div className="bg-black bg-opacity-50 px-1 py-0.5 rounded">
                            Кам {thumb.id}
                          </div>
                          <div className="bg-purple-500 px-1 py-0.5 rounded">
                            {thumb.type}
                          </div>
                        </div>
                        <div className="absolute bottom-1 left-1 flex items-center gap-1 text-xs">
                          <div className="bg-black bg-opacity-50 px-1 py-0.5 rounded">
                            {thumb.code}
                          </div>
                          <div className="bg-black bg-opacity-50 px-1 py-0.5 rounded">
                            V2000
                          </div>
                        </div>
                        <div className="absolute bottom-1 right-1 text-xs bg-black bg-opacity-50 px-1 py-0.5 rounded">
                          {thumb.time}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <Card className="bg-gray-800 border-gray-700 flex-1">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img
                        src="/placeholder.svg?height=400&width=800"
                        alt="Основной вид камеры"
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full p-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Отчет</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <div>
                            <div className="text-xs text-gray-400">Время нарушения</div>
                            <div className="text-sm">{violationDetails.violationTime}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-gray-400" />
                          <div>
                            <div className="text-xs text-gray-400">Маршрут автомобиля</div>
                            <div className="text-sm">{violationDetails.carRoute}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <div>
                            <div className="text-xs text-gray-400">Местоположение</div>
                            <div className="text-sm">{violationDetails.location}</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs text-gray-400">Дата нарушения</div>
                          <div className="text-sm">{violationDetails.violationDate}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Номер автомобиля</div>
                          <div className="text-sm">{violationDetails.carNumber}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Тип нарушения</div>
                          <div className="text-sm">{violationDetails.violationType}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Статус</div>
                          <div className="text-sm">{violationDetails.status}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">В пределах правоприменения</div>
                          <div className="text-sm">{violationDetails.withinEnforcement}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-1/4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <img
                        src="/placeholder.svg?height=300&width=300"
                        alt="Вид карты"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-2 rounded">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}