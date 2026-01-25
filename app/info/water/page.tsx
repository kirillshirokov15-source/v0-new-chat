import { Card, CardContent } from "@/components/ui/card"
import { Droplets } from "lucide-react"

export const metadata = {
  title: "Положение о водопотреблении - КП Аксаково",
  description: "Правила водопотребления в КП Аксаково",
}

export default function WaterPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Положение о водопотреблении</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Droplets className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Передача показаний счетчиков</h3>
                  <p className="text-blue-800 mb-3">
                    Показания счетчиков воды необходимо передавать коменданту до 25 числа каждого месяца
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm mb-1">Комендант: Лесничий Николай Геннадьевич</p>
                    <p className="text-sm">
                      Телефон:{" "}
                      <a href="tel:+79660393553" className="text-blue-600 font-semibold">
                        +7 (966) 039-35-53
                      </a>
                    </p>
                    <p className="text-xs text-blue-700 mt-1">SMS, WhatsApp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Основные правила</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Все жилые дома должны быть оборудованы приборами учета воды (счетчиками)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Показания счетчиков передаются ежемесячно до 25 числа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>
                      Оплата производится на основании переданных показаний, в случае несовпадения показаний с
                      контрольным счетчиком, начисления производятся по последнему
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Счетчики воды подлежат обязательной поверке в установленные сроки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>При обнаружении неисправности счетчика необходимо незамедлительно сообщить в управление</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
