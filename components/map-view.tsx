import { YandexMap } from "@/components/yandex-map"

export function MapView() {
  return (
    <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
      <YandexMap />
    </div>
  )
}