'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    ymaps: any;
  }
}

export function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Yandex Maps script
    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.ymaps.ready(() => {
        if (!mapRef.current) return

        const map = new window.ymaps.Map(mapRef.current, {
          center: [45.035470, 38.975313], // Coordinates for Krasnodar
          zoom: 12,
          controls: ['zoomControl', 'fullscreenControl']
        })

        // Add traffic layer
        const trafficControl = new window.ymaps.control.TrafficControl({ state: { providerKey: 'traffic#actual' } })
        map.controls.add(trafficControl)
        trafficControl.getProvider('traffic#actual').state.set('infoLayerShown', true)
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div ref={mapRef} className="w-full h-full min-h-[400px]" />
}

