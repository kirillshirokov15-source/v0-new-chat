import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Building2 } from "lucide-react"

export const metadata = {
  title: "Контакты - КП Аксаково",
  description: "Контактная информация ТСН КП Аксаково",
}

export default function ContactsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <div className="w-20 h-1 bg-primary mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Адрес офиса</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Московская область, деревня Аксаково, улица Багратионовская, стр.2, этаж 1, офис 1
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Часы работы</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Понедельник - Пятница: 10:00 - 18:00</p>
                        <p>Суббота: 10:00 - 14:00</p>
                        <p>Воскресенье: выходной</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold mb-3">Телефоны</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                          <span className="text-sm">Охрана КПП:</span>
                          <a href="tel:+79637676946" className="text-primary font-semibold hover:underline">
                            +7 (963) 767-69-46
                          </a>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                          <span className="text-sm">Председатель:</span>
                          <a href="tel:+79166025954" className="text-primary font-semibold hover:underline">
                            +7 (916) 602-59-54
                          </a>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                          <span className="text-sm">Комендант:</span>
                          <a href="tel:+79660393553" className="text-primary font-semibold hover:underline">
                            +7 (966) 039-35-53
                          </a>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                          <span className="text-sm">Тех. вопросы:</span>
                          <a href="tel:+79164147078" className="text-primary font-semibold hover:underline">
                            +7 (916) 414-70-78
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardContent className="p-0 h-full min-h-[500px]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.762237,56.098456&z=15&l=map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Реквизиты счета</h2>
                  <p className="text-muted-foreground">Для оплаты взносов и услуг</p>
                </div>
              </div>

              <div className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">Организация:</span>
                  <span className="text-sm font-semibold">ТСН «Коттеджный поселок «Аксаково»</span>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">Банк:</span>
                  <span className="text-sm">Филиал «ЦЕНТРАЛЬНЫЙ» Банка ВТБ ПАО Г. МОСКВА</span>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">БИК:</span>
                  <span className="text-sm font-mono">044525411</span>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">К/с:</span>
                  <span className="text-sm font-mono">30101810145250000411</span>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">ИНН:</span>
                  <span className="text-sm font-mono">5029184470</span>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">КПП:</span>
                  <span className="text-sm font-mono">502901001</span>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2 p-3 bg-secondary/20 rounded">
                  <span className="text-sm font-medium text-muted-foreground">Р/с:</span>
                  <span className="text-sm font-mono font-bold">40703810100000004804</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Есть вопросы?</h2>
              <p className="text-white/90 mb-6">Свяжитесь с нами удобным для вас способом, и мы обязательно поможем!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
