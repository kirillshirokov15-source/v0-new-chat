import { Card, CardContent } from "@/components/ui/card"
import { Flame, AlertTriangle, Wrench } from "lucide-react"

export const metadata = {
  title: "Обслуживание котлов и газовых плит - КП Аксаково",
  description: "Правила обслуживания и безопасности газового оборудования",
}

export default function BoilersPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Обслуживание котлов и газовых плит</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Важно! Газовая безопасность</h3>
                  <p className="text-red-800 mb-3">
                    При появлении запаха газа немедленно позвоните в аварийную газовую службу по телефону{" "}
                    <strong>104</strong>
                  </p>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Перекройте газ</li>
                    <li>• Откройте окна для проветривания</li>
                    <li>• Не включайте электроприборы и свет</li>
                    <li>• Покиньте помещение</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold">Регулярное обслуживание</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Техническое обслуживание котлов проводится не реже 1 раза в год</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Проверка газовых плит и оборудования - ежегодно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Чистка дымоходов - 2 раза в год (весна, осень)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Проверка вентиляции - ежегодно</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Flame className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold">Правила эксплуатации</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <span>Не оставляйте работающие газовые приборы без присмотра</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <span>Обеспечьте хорошую вентиляцию помещения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <span>Не используйте газовые плиты для отопления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <span>Следите за цветом пламени (должно быть голубым)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-secondary/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Контакты для обслуживания</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Технические вопросы</span>
                  <a href="tel:+79164147078" className="text-primary font-semibold hover:underline">
                    +7 (916) 414-70-78
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">Аварийная газовая служба</span>
                  <a href="tel:104" className="text-red-600 font-bold">
                    104
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
