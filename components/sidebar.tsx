import { Button } from "@/components/ui/button"
import { LayoutDashboard, Camera, Car, AlertTriangle, Wrench, FileText } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4">
      <div className="flex items-center mb-8">
        <img src="/placeholder.svg?height=40&width=40" alt="Пользователь" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h2 className="font-semibold">Павел Сидоров</h2>
          <p className="text-xs text-gray-400">Сотрудник ДПС</p>
        </div>
      </div>
      <nav>
      <Link href="/">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <LayoutDashboard className="mr-2 h-4 w-4" /> Панель управления
        </Button>
      </Link>
      <Link href="\surveillance">
        <Button variant="ghost" className="w-full justify-start mb-2">
              <Camera className="mr-2 h-4 w-4" /> Наблюдение
        </Button>
      </Link>
      <Link href="\parking">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Car className="mr-2 h-4 w-4" /> Парковка
        </Button>
      </Link>
      <Link href="\accidents">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <AlertTriangle className="mr-2 h-4 w-4" /> Происшествия
        </Button>
      </Link>
      <Link href="\maintenance">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Wrench className="mr-2 h-4 w-4" /> Реагирование
        </Button>
      </Link>
      <Link href="\citizen-report">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <FileText className="mr-2 h-4 w-4" /> Жалобы от граждан
        </Button>
      </Link>
      </nav>
    </aside>
  )
}

