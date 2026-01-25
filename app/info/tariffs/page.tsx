import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Информация по тарифам - КП Аксаково",
  description: "Тарифы на коммунальные услуги в КП Аксаково",
}

export default function TariffsPage() {
  const tariffs = [
    {
      service: "Членские взносы ТСН",
      rate: "Согласно решению общего собрания",
      period: "ежемесячно",
    },
    {
      service: "Электроэнергия",
      rate: "Согласно тарифам Мосэнергосбыт",
      period: "по счетчику",
    },
    {
      service: "Водоснабжение",
      rate: "Согласно тарифам Мосводоканал",
      period: "по счетчику",
    },
    {
      service: "Газоснабжение",
      rate: "Согласно тарифам Мособлгаз",
      period: "по счетчику",
    },
    {
      service: "Вывоз мусора",
      rate: "Включено в членские взносы",
      period: "по графику",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Информация по тарифам</h1>
          <div className="w-20 h-1 bg-primary mb-8"></div>

          <p className="text-lg text-muted-foreground mb-12">
            Тарифы на коммунальные услуги и членские взносы ТСН «КП Аксаково»
          </p>

          <div className="space-y-4">
            {tariffs.map((tariff, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{tariff.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Тариф:</div>
                      <div className="font-semibold">{tariff.rate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Период оплаты:</div>
                      <div className="font-semibold">{tariff.period}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-secondary/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">Важная информация</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Членские взносы оплачиваются до 10 числа каждого месяца</li>
                <li>• Тарифы на коммунальные услуги устанавливаются соответствующими организациями</li>
                <li>• Показания счетчиков необходимо передавать коменданту до 25 числа каждого месяца</li>
                <li>• При задержке оплаты более 2 месяцев начисляется пеня</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
