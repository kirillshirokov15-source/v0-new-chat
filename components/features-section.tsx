import { Card, CardContent } from "@/components/ui/card"
import { Zap, Award, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Оперативность",
      description: "Все возникающие вопросы решаются быстро.",
    },
    {
      icon: Award,
      title: "Качество",
      description: "Все делаем для себя - качественно.",
    },
    {
      icon: Users,
      title: "Профессионализм",
      description: "За годы работы, мы научились решать все возникающие вопросы.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">от Жителей к Жителям</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Наша форма управления поселком ТСН - Товарищество Собственников недвижимости.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
