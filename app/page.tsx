import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { MapView } from "@/components/map-view"
import { StatCards } from "@/components/stat-cards"
import { IncidentReport } from "@/components/incident-report"
import { LiveFootage } from "@/components/live-footage"
import { TrafficCongestion } from "@/components/traffic-congestion"
import { TrafficLightsViolation } from "@/components/traffic-lights-violation"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <MapView />
            </div>
            <div>
              <StatCards />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <IncidentReport />
            <LiveFootage />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <TrafficCongestion />
            <TrafficLightsViolation />
          </div>
        </main>
      </div>
    </div>
  )
}

