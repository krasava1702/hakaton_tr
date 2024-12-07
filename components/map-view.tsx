import { Card, CardContent } from "@/components/ui/card"

export function MapView() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-0">
        <div className="aspect-video bg-gray-700 relative">
          {/* Replace this with an actual map component */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Карта (Заменить на реальный компонент карты)
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

