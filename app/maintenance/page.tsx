import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Maintenance() {
  const incidents = [
    {
      type: "Пробка",
      officer: "Александр Петров",
      measures: "Переключение режима светофора",
      status: "Решено"
    },
    {
      type: "Авария",
      officer: "Кирилл Шашев",
      measures: "Передано дорожной полиции",
      status: "В процессе"
    }
  ]

  const stats = {
    totalIncidents: 2,
    decidedIncidents: 1,
    efficiency: 50
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">ОБСЛУЖИВАНИЕ</h2>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-gray-800">
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-400">Тип инцидента</TableHead>
                      <TableHead className="text-gray-400">Ответственный сотрудник</TableHead>
                      <TableHead className="text-gray-400">Принятые меры</TableHead>
                      <TableHead className="text-gray-400">Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incidents.map((incident, index) => (
                      <TableRow key={index} className="border-gray-700">
                        <TableCell>{incident.type}</TableCell>
                        <TableCell>{incident.officer}</TableCell>
                        <TableCell>{incident.measures}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs ${
                              incident.status === "Решено"
                                ? "bg-emerald-500/20 text-emerald-500"
                                : "bg-orange-500/20 text-orange-500"
                            }`}
                          >
                            {incident.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Всего инцидентов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalIncidents}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Решено</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.decidedIncidents}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Эффективность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.efficiency}%</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

