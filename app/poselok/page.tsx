import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Trees, Users, Activity, Building2 } from "lucide-react"

export const metadata = {
  title: "Наш Посёлок - КП Аксаково",
  description: "Подробная информация о коттеджном поселке Аксаково",
}

export default function PoselokPage() {
  const infrastructure = [
    {
      icon: Home,
      title: "145 участков",
      description: "Благоустроенная территория с индивидуальными участками",
    },
    {
      icon: Activity,
      title: "Спортивные площадки",
      description: "Современные площадки для занятий спортом и активного отдыха",
    },
    {
      icon: Users,
      title: "Детские площадки",
      description: "Безопасные игровые зоны для детей разного возраста",
    },
    {
      icon: Building2,
      title: "Административное здание",
      description: "Офис управления, переговорные комнаты",
    },
    {
      icon: Trees,
      title: "Лесной массив",
      description: "Выход в заповедную зону Подмосковья",
    },
    {
      icon: MapPin,
      title: "Пяловское водохранилище",
      description: "В шаговой доступности от поселка",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наш Посёлок</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              КП Аксаково расположен в экологически чистой зоне северной части Подмосkovья, всего в 20 км от МКАД по
              Дмитровскому шоссе, в шаговой доступности от Пяловского водохранилища.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              На территории поселка располагаются 145 участков, спортивная и детская площадки, административное здание.
              Поселок имеет выход в лесной массив который является заповедной зоной Подмосковья, где вы можете встретить
              разных животных и птиц.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Также жителям КП Аксаково доступна инфраструктура прилегающих пансионатов, где расположены: бассейн,
              спортивные площадки и залы, тренажерный зал, а также услуги предоставляемые пансионатами.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Инфраструктура поселка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-secondary/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Расположение</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Транспортная доступность:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 20 км от МКАД по Дмитровскому шоссе</li>
                  <li>• Удобный подъезд круглый год</li>
                  <li>• Регулярное автобусное сообщение</li>
                  <li>• Близость к основным магистралям</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Экология:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Заповедная зона Подмосковья</li>
                  <li>• Чистый лесной воздух</li>
                  <li>• Пяловское водохранилище рядом</li>
                  <li>• Богатая флора и фауна</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
