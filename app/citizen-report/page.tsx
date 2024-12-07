import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CitizenReport() {
  const complaints = [
    {
      id: "150921356",
      area: "Ул. Народная 38\nЗа поворотом, около магазина",
      contact: "+7 123 456-78-90",
      officer: "Павел Сидоров",
      status: "В процессе"
    },
    {
      id: "150923998",
      area: "Ростовское Ш. 231\n За остановкой",
      contact: "+7 123 456-78-90",
      officer: "Павел Сидоров",
      status: "Ложная"
    },
    {
      id: "150924369",
      area: "Ул. Красная 45\nЗа аркой",
      contact: "+7 123 456-78-90",
      officer: "Павел Сидоров",
      status: "Решённая"
    },
    {
      id: "150923943    ",
      area: "Ул. Северная 405\nНапротив главного входа Аквариум",
      contact: "+7 123 456-78-90",
      officer: "Павел Сидоров",
      status: "В процессе"
    },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Жалобы от граждан</h2>
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

            <Tabs defaultValue="total" className="w-full">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="total" className="data-[state=active]:bg-gray-700">
                  Общее количество жалоб
                </TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-gray-700">
                  Не завершённые жалобы
                </TabsTrigger>
                <TabsTrigger value="irrelevant" className="data-[state=active]:bg-gray-700">
                  Ложный жалобы
                </TabsTrigger>
                <TabsTrigger value="solved" className="data-[state=active]:bg-gray-700">
                  Разрешённые жалобы
                </TabsTrigger>
              </TabsList>

              <TabsContent value="total" className="mt-4">
                <div className="rounded-md border border-gray-700">
                  <Table>
                    <TableHeader className="bg-gray-800">
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-400">Номер жалобы</TableHead>
                        <TableHead className="text-gray-400">Район в котором произошло ДТП</TableHead>
                        <TableHead className="text-gray-400">Номер телефона заявителя</TableHead>
                        <TableHead className="text-gray-400">Назначенный офицер</TableHead>
                        <TableHead className="text-gray-400">Статус</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {complaints.map((complaint, index) => (
                        <TableRow key={index} className="border-gray-700">
                          <TableCell className="font-medium">{complaint.id}</TableCell>
                          <TableCell className="whitespace-pre-line">{complaint.area}</TableCell>
                          <TableCell>{complaint.contact}</TableCell>
                          <TableCell>{complaint.officer}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs ${
                                complaint.status === "В процессе"
                                  ? "bg-orange-500/20 text-orange-500"
                                  : complaint.status === "Ложная"
                                  ? "bg-red-500/20 text-red-500"
                                  : "bg-emerald-500/20 text-emerald-500"
                              }`}
                            >
                              {complaint.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="На рассмотрении" className="mt-4">
                {/* Similar table structure for pending complaints */}
              </TabsContent>

              <TabsContent value="Ложная" className="mt-4">
                {/* Similar table structure for irrelevant complaints */}
              </TabsContent>

              <TabsContent value="Решённая" className="mt-4">
                {/* Similar table structure for solved complaints */}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}