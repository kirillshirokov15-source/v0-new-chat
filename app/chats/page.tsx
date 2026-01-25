import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export const metadata = {
  title: "Чаты - КП Аксаково",
  description:
    "Для доступа в Whatsapp чаты поселка, пожалуйста свяжитесь с администратором по Whatsapp Номер +7 926 000-80-00. При обращении, укажите: 1. Номер участка, 2. Фамилию Имя, 3. Ваш Статус к участку: Владелец, Член Семьи, Или Арендатор Участка.",
}

export default function ChatsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Чаты</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <Card className="bg-secondary/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Доступ к WhatsApp чатам поселка</h2>
                </div>
              </div>

              <div className="space-y-6 text-lg">
                <p className="leading-relaxed">
                  Для доступа в Whatsapp чаты поселка, пожалуйста свяжитесь с администратором по Whatsapp
                </p>

                <div className="bg-background rounded-lg p-6 border-2 border-primary/20">
                  <p className="text-xl font-bold text-primary mb-2">Номер администратора:</p>
                  <a
                    href="tel:+79260008000"
                    className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    +7 926 000-80-00
                  </a>
                </div>

                <div>
                  <p className="font-bold mb-3">При обращении, укажите:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-baseline gap-2">
                      <span className="font-bold text-primary">1.</span>
                      <span>Номер участка</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="font-bold text-primary">2.</span>
                      <span>Фамилию Имя</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="font-bold text-primary">3.</span>
                      <span>Ваш Статус к участку: Владелец, Член Семьи, Или Арендатор Участка</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
