import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      image: "/images/ct-block-item-138499-70970-5-image-ifdme1rf.jpg",
      title: "Председатель правления",
      name: "Бурова Людмила Сергеевна",
      phone: "+7 (916) 602-59-54",
    },
    {
      image: "/images/ct-block-item-138499-1-5-image-6rjlfx2b.jpg",
      title: "Комендант",
      name: "Лесничий Николай Геннадьевич",
      phone: "+7 (966) 039-35-53",
      note: "Передача показаний по воде (SMS, WhatsApp)",
    },
    {
      image: "/images/ct-block-item-138499-3-5-image-bgh66h1g.jpg",
      title: "Технические вопросы",
      name: "Александр Гарникович Тадевосян",
      phone: "+7 (916) 414-70-78",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша Команда</h2>
          <p className="text-lg text-muted-foreground">Профессиональный подход к делу</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 w-full bg-muted">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-center mb-2 text-primary">{member.title}</h3>
                  <p className="text-sm text-center mb-3 font-medium">{member.name}</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                      {member.phone}
                    </a>
                  </div>
                  {member.note && (
                    <p className="text-xs text-muted-foreground text-center mt-3 italic">{member.note}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
