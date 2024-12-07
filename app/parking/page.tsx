import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Car } from 'lucide-react'

export default function Parking() {
  const violationDetails = {
    violationTime: "10:09",
    violationDate: "08.12.24",
    carRoute: "Н/о",
    carNumber: "А777АА 123",
    location: "улица Воровского, 143/1, Фестивальный микрорайон, Краснодар, 350053",
    violationType: "Проезд на красный сигнал светофора",
    status: "Необработанно",
    withinEnforcement: "Да"
  }

  const thumbnails = [
    { id: "0155", type: "Озмолл", code: "Q12", time: "Дек 8, 12:37:25" },
    { id: "0123", type: "ТЦ Галерея", code: "MM1", time: "Дек 8, 12:37:25" },
    { id: "0155", type: "МЦ Красная Площадь", code: "NYC1", time: "Дек 8, 12:37:25" },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Парковки</h2>
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
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Thumbnails sidebar */}
            <div className="col-span-3">
              {thumbnails.map((thumb, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 mb-4">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=150&width=300"
                        alt={`Camera ${thumb.id}`}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-2">
                        <div className="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">
                          Камера {thumb.id}
                        </div>
                        <div className="bg-purple-500 px-2 py-1 rounded text-xs">
                          {thumb.type}
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 flex items-center gap-2">
                        <div className="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">
                          {thumb.code}
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">
                          V200
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                        {thumb.time}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main content */}
            <div className="col-span-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Main camera view"
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute center-center bg-white/10 rounded-full p-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 mt-4">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Отчёт</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-400">Время нарушения</div>
                          <div>{violationDetails.violationTime}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-400">Маршрут автомобиля</div>
                          <div>{violationDetails.carRoute}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="text-sm text-gray-400">Местоположение</div>
                          <div>{violationDetails.location}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-400">Дата нарушения</div>
                        <div>{violationDetails.violationDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Госномер</div>
                        <div>{violationDetails.carNumber}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Тип нарушения</div>
                        <div>{violationDetails.violationType}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map view */}
            <div className="col-span-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Map view"
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
        </main>
      </div>
    </div>
  )
}