import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar } from "lucide-react"

export const metadata = {
  title: "Протоколы - Документы - КП Аксаково",
  description: "Протоколы заседаний Правления и общих собраний ТСН КП Аксаково",
}

export default function ProtocolsPage() {
  const protocols = [
    {
      title: "Протокол заседания Правления №62",
      date: "02.04.2025",
      type: "Заседание Правления",
      file: "/documents/Protokol62.pdf",          // ← имя файла который загрузил
    },
    {
      title: "Протокол общего собрания членов ТСН",
      date: "24.03.2025",
      type: "Общее собрание",
      file: "/documents/Protokol-obshego-sobraniya-16.03.2025.pdf",

    },
    {
      title: "Протокол заседания Правления №61",
      date: "15.02.2025",
      type: "Заседание Правления",
      file: "/documents/Protokol61.pd",
    },
    {
      title: "Протокол заседания Правления №60",
      date: "28.01.2025",
      type: "Заседание Правления",
      file: "/documents/Protokol60.pd",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Протоколы</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12">
            Протоколы заседаний Правления и общих собраний ТСН «КП Аксаково»
          </p>
          <div className="space-y-4">
            {protocols.map((protocol, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-grow">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-lg mb-2">{protocol.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{protocol.date}</span>
                          </div>
                          <span className="px-2 py-0.5 bg-secondary rounded-full text-xs">{protocol.type}</span>
                        </div>
                      </div>
                    </div>
                    {/* ВОТ ИСПРАВЛЕНИЕ — кнопка теперь является ссылкой */}
                    <a href={protocol.file} download>
                      <Button variant="outline" size="sm" className="flex-shrink-0 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Скачать
                      </Button>
                    </a>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
