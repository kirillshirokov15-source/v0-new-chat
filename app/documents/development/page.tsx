import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar } from "lucide-react"

export const metadata = {
  title: "Развитие Посёлка - Документы - КП Аксаково",
  description: "Планы и проекты развития КП Аксаково",
}

export default function DevelopmentPage() {
  const documents = [
    {
      title: "План развития поселка на 2025 год",
      date: "15.01.2025",
    },
    {
      title: "Проект благоустройства центральной зоны",
      date: "10.12.2024",
    },
    {
      title: "Концепция озеленения территории",
      date: "05.11.2024",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Развитие Посёлка</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-12">
            Планы, проекты и документы по развитию и благоустройству КП Аксаково
          </p>

          <div className="space-y-4">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-grow">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex-shrink-0 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Скачать
                    </Button>
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
