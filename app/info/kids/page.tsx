import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Palette, Music, BookOpen } from "lucide-react"

export const metadata = {
  title: "Творческие занятия для детей - КП Аксаково",
  description: "Кружки и секции для детей в КП Аксаково",
}

export default function KidsPage() {
  const activities = [
    {
      icon: Palette,
      title: "Изобразительное искусство",
      description: "Рисование, лепка, аппликация",
      age: "5-12 лет",
    },
    {
      icon: Music,
      title: "Музыкальные занятия",
      description: "Пение, ритмика, музыкальная грамота",
      age: "4-10 лет",
    },
    {
      icon: BookOpen,
      title: "Литературный кружок",
      description: "Чтение, театральные постановки",
      age: "7-14 лет",
    },
    {
      icon: Sparkles,
      title: "Творческая мастерская",
      description: "Рукоделие, поделки, DIY проекты",
      age: "6-14 лет",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Творческие занятия для детей</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-12">
            В нашем поселке организованы различные творческие занятия и кружки для всестороннего развития детей
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <activity.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                      <span className="inline-block text-xs px-3 py-1 bg-secondary rounded-full font-medium">
                        {activity.age}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">Информация о записи</h3>
              <p className="text-muted-foreground mb-4">
                Для получения подробной информации о расписании занятий и записи детей в кружки, пожалуйста, свяжитесь с
                администрацией поселка.
              </p>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium">Контактный телефон</span>
                <a href="tel:+79166025954" className="text-primary font-semibold hover:underline">
                  +7 (916) 602-59-54
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
