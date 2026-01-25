import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наш адрес</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Адрес офиса</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        МО, деревня Аксаково, улица Багратионовская, стр.2, этаж 1, офис 1
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Телефоны</h3>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">
                          Охрана:{" "}
                          <a href="tel:+79637676946" className="text-primary hover:underline">
                            +7 (963) 767-69-46
                          </a>
                        </p>
                        <p className="text-muted-foreground">
                          Председатель:{" "}
                          <a href="tel:+79166025954" className="text-primary hover:underline">
                            +7 (916) 602-59-54
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.762237,56.098456&z=15&l=map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
