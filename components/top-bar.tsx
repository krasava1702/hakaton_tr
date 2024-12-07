import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search, Sun, Wind } from 'lucide-react'

export function TopBar() {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">ПАНЕЛЬ УПРАВЛЕНИЯ</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Поиск по индексу/району" 
            className="pl-8 bg-gray-700 border-gray-600"
          />
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span>11 августа 2023 9:00</span>
          <Sun className="h-4 w-4" />
          <span>+24°C</span>
          <Wind className="h-4 w-4" />
          <span>5 м/с</span>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

