import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar } from "lucide-react"

export const metadata = {
  title: "Отчёты и финансовые документы - Документы - КП Аксаково",
  description: "Финансовые отчеты и бухгалтерские документы ТСН КП Аксаково",
}

export default function ReportsPage() {
  const reports = [
    {
      title: "Финансовый отчет за 2024 год",
      date: "01.03.2025",
      type: "Годовой отчет",
    },
    {
      title: "Отчет о расходах за 4 квартал 2024",
      date: "15.01.2025",
      type: "Квартальный отчет",
    },
    {
      title: "Смета расходов на 2025 год",
      date: "20.12.2024",
      type: "Смета",
    },
    {
      title: "Отчет о расходах за 3 квартал 2024",
      date: "10.10.2024",
      type: "Квартальный отчет",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Отчёты и финансовые документы</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-12">
            Финансовые отчеты, сметы и бухгалтерские документы ТСН «КП Аксаково»
          </p>

          <div className="space-y-4">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-grow">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{report.date}</span>
                          </div>
                          <span className="px-2 py-0.5 bg-secondary rounded-full text-xs">{report.type}</span>
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
