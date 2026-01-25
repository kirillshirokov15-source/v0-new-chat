import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Повестка заседания Правления ТСН «КП Аксаково» 14 сентября 2025 года",
      date: "04.09.2025",
      excerpt:
        "Уважаемые жители! Доводим до вашего сведения повестку очередного заседания Правления ТСН КП Аксаково...",
      link: "/news/758",
    },
    {
      id: 2,
      title: "Повестка заседания Правления 21 июня 2025 года",
      date: "17.06.2025",
      excerpt: "Повестка заседания Правления ТСН КП Аксаково 21 июня 2025 года...",
      link: "/news/749",
    },
    {
      id: 3,
      title: "Повестка заседания Правления ТСН «КП «Аксаково» 22 марта 2025 года",
      date: "20.03.2025",
      excerpt: "Повестка заседания Правления ТСН «КП «Аксаково» 22 марта 2025 года...",
      link: "/news/736",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Новости</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {news.map((item) => (
            <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0">
                  <Link href={item.link}>Читать далее...</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/news">Все новости</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
