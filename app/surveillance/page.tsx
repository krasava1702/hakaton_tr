"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertCircle, Car, CloudDrizzle, Grid, Lock, Settings, UserCircle, Wrench } from 'lucide-react'
import Image from "next/image"

export default function SurveillanceDashboard() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r border-gray-800">
          <div className="mb-8 text-center">
            <div className="relative w-24 h-24 mx-auto mb-2">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Профиль"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">
                2
              </span>
            </div>
            <h3 className="text-white font-medium">Сотрудник дорожной полиции</h3>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-gray-400">
              <Grid className="mr-2 h-4 w-4" />
              Панель управления
            </Button>
            <Button variant="secondary" className="w-full justify-start bg-gray-800">
              <Settings className="mr-2 h-4 w-4" />
              Наблюдение
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400">
              <Car className="mr-2 h-4 w-4" />
              Парковка
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400">
              <AlertCircle className="mr-2 h-4 w-4" />
              Происшествия
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400">
              <Wrench className="mr-2 h-4 w-4" />
              Обслуживание
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-400">
              <UserCircle className="mr-2 h-4 w-4" />
              Отчет граждан
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-white">НАБЛЮДЕНИЕ</h1>
              <Select defaultValue="central-market">
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Выберите область" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="central-market">ЦЕНТРАЛЬНЫЙ РЫНОК</SelectItem>
                  <SelectItem value="north-market">СЕВЕРНЫЙ РЫНОК</SelectItem>
                  <SelectItem value="south-market">ЮЖНЫЙ РЫНОК</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <span>11 августа 2023 9:00</span>
              <div className="flex items-center gap-2">
                <CloudDrizzle className="h-4 w-4" />
                <span>+24°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>5 м/с</span>
              </div>
              <Lock className="h-4 w-4" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400">Всего камер:</span>{" "}
              <span className="text-white">55</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400">Активные камеры:</span>{" "}
              <span className="text-green-500">35</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2">
              <span className="text-gray-400">Неактивные камеры:</span>{" "}
              <span className="text-red-500">20</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-gray-900 border-gray-800">
                <CardContent className="p-0 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={`Камера ${i + 1}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center rounded-full bg-gray-900/80 px-2 py-1 text-xs text-white">
                      Кам 0{i + 1}
                    </span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">
                        Номер камеры: #0{i + 1}52
                      </div>
                      <div className="text-sm text-gray-400">Область: NH{i + 1}5</div>
                      <div className="text-sm">
                        Статус:{" "}
                        <span className={i % 2 === 0 ? "text-green-500" : "text-red-500"}>
                          {i % 2 === 0 ? "В сети" : "Не в сети"}
                        </span>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">
                      Просмотр
                    </Button>
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

