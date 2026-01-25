import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export const metadata = {
  title: "Культурно-массовые мероприятия - КП Аксаково",
  description: "Предстоящие культурно-массовые мероприятия в КП Аксаково",
}

export default function CulturePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Культурно-массовые мероприятия</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-8">
            Информация о предстоящих культурных мероприятиях в КП Аксаково
          </p>

          <Card className="border-accent/50 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardContent className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Предстоящее мероприятие
                </span>
                <h2 className="text-3xl font-bold mb-4">Масленица 2026</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Дата проведения</p>
                    <p className="text-muted-foreground">Март 2026 года (точная дата будет объявлена дополнительно)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Место проведения</p>
                    <p className="text-muted-foreground">Центральная площадь КП Аксаково</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h3 className="font-bold mb-3">Программа мероприятия:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">•</span>
                      <span>Народные гулянья и хороводы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">•</span>
                      <span>Конкурсы и игры для детей и взрослых</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">•</span>
                      <span>Угощение блинами и горячим чаем</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">•</span>
                      <span>Сжигание чучела Масленицы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">•</span>
                      <span>Музыкальное сопровождение</span>
                    </li>
                  </ul>
                </div>

                <Card className="bg-blue-50 border-blue-200 mt-4">
                  <CardContent className="p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Приглашаются все жители!</strong> Следите за объявлениями о точной дате и времени
                      проведения праздника. Дополнительная информация будет размещена в новостях и чатах поселка.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
