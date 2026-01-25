import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export const metadata = {
  title: "Правила проживания - КП Аксаково",
  description: "Правила проживания в коттеджном поселке Аксаково",
}

export default function RulesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Правила проживания</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-8">
            Правила проживания в КП Аксаково установлены для обеспечения комфортного и безопасного проживания всех
            жителей поселка.
          </p>

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-grow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2">Правила проживания в КП Аксаково</h2>
                    <p className="text-sm text-muted-foreground">Полный документ с правилами и положениями</p>
                  </div>
                </div>
                <a href="/documents/pravila.pdf" download>
                  <Button className="flex-shrink-0">
                    <Download className="h-4 w-4 mr-2" />
                    Скачать PDF
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
