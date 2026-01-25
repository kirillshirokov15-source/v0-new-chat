import { Card, CardContent } from "@/components/ui/card"
import { Phone, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Телефоны ближайших служб - КП Аксаково",
  description: "Контакты экстренных и коммунальных служб для жителей КП Аксаково",
}

export default function PhonesPage() {
  const emergency = [
    { service: "Служба спасения", phone: "112" },
    { service: "Пожарная охрана", phone: "101" },
    { service: "Полиция", phone: "102" },
    { service: "Скорая помощь", phone: "103" },
    { service: "Газовая служба", phone: "104" },
  ]

  const local = [
    { service: "КПП охрана", phone: "+7 (963) 767-69-46" },
    { service: "Председатель правления", phone: "+7 (916) 602-59-54" },
    { service: "Комендант", phone: "+7 (966) 039-35-53" },
    { service: "Технические вопросы", phone: "+7 (916) 414-70-78" },
  ]

  const utilities = [
    { service: "Водоканал (аварии)", phone: "+7 (495) 000-00-00" },
    { service: "Электросети (аварии)", phone: "+7 (495) 000-00-00" },
    { service: "Газовая служба", phone: "+7 (495) 000-00-00" },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Телефоны ближайших служб</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Экстренные службы</h3>
                  <p className="text-red-800 text-sm mb-4">
                    В экстренных ситуациях звоните 112 - единый номер вызова экстренных служб
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {emergency.map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                        <span className="font-medium text-sm">{item.service}</span>
                        <a href={`tel:${item.phone}`} className="text-red-600 font-bold">
                          {item.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Службы поселка</h2>
                </div>
                <div className="space-y-3">
                  {local.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm font-medium">{item.service}</span>
                      <a
                        href={`tel:${item.phone.replace(/\s/g, "")}`}
                        className="text-primary font-semibold text-sm hover:underline"
                      >
                        {item.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Коммунальные службы</h2>
                </div>
                <div className="space-y-3">
                  {utilities.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm font-medium">{item.service}</span>
                      <a
                        href={`tel:${item.phone.replace(/\s/g, "")}`}
                        className="text-primary font-semibold text-sm hover:underline"
                      >
                        {item.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
