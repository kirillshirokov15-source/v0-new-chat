import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Trees, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  const features = [
    {
      icon: MapPin,
      title: "Удобное расположение",
      description: "20 км от МКАД по Дмитровскому шоссе",
    },
    {
      icon: Home,
      title: "145 участков",
      description: "Благоустроенная территория поселка",
    },
    {
      icon: Trees,
      title: "Экология",
      description: "Рядом заповедная зона и Пяловское водохранилище",
    },
    {
      icon: Users,
      title: "Инфраструктура",
      description: "Спортивные площадки, бассейн, детские зоны",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О Поселке</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            КП Аксаково расположен в экологически чистой зоне северной части Подмосковья, всего в 20 км от МКАД по
            Дмитровскому шоссе, в шаговой доступности от Пяловского водохранилища. На территории поселка располагаются
            145 участков, спортивная и детская площадки, административное здание. Поселок имеет выход в лесной массив
            который является заповедной зоной Подмосковья, где вы можете встретить разных животных и птиц.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/poselok">Подробнее о поселке</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
