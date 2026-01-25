import { Card, CardContent } from "@/components/ui/card"
import { Trees, Flower, Sprout, Leaf } from "lucide-react"

export const metadata = {
  title: "Озеленение - КП Аксаково",
  description: "Программа озеленения территории КП Аксаково",
}

export default function LandscapingPage() {
  const initiatives = [
    {
      icon: Trees,
      title: "Посадка деревьев",
      description: "Регулярная высадка декоративных и плодовых деревьев на общественной территории",
    },
    {
      icon: Flower,
      title: "Цветники и клумбы",
      description: "Создание и уход за цветниками в центральной части поселка",
    },
    {
      icon: Sprout,
      title: "Газоны",
      description: "Обустройство и регулярная стрижка газонов",
    },
    {
      icon: Leaf,
      title: "Уход за зелеными зонами",
      description: "Обрезка кустарников, уборка листвы, полив растений",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Озеленение</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-12">
            Озеленение территории - важная часть благоустройства нашего поселка. Мы создаем комфортную и красивую среду
            для проживания всех жителей.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                      <initiative.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{initiative.title}</h3>
                      <p className="text-sm text-muted-foreground">{initiative.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-6 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-green-900">Участвуйте в озеленении!</h2>
              <p className="text-green-800 mb-4">
                Приглашаем всех жителей принять участие в благоустройстве территории. Регулярно проводятся субботники и
                акции по посадке деревьев.
              </p>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span>Весенние и осенние субботники</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span>Акции по посадке деревьев</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">•</span>
                  <span>Уход за общественными клумбами</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">Правила озеленения участков</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Высадка деревьев должна быть согласована с управлением поселка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Деревья не должны затенять соседние участки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Необходимо соблюдать расстояние от границы участка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Регулярный уход за растениями на своем участке обязателен</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
