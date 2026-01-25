import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"

export const metadata = {
  title: "Новости - КП Аксаково",
  description: "Последние новости коттеджного поселка Аксаково",
}

export default function NewsPage() {
  const allNews = [
    {
      id: "758",
      title: "Повестка заседания Правления ТСН «КП Аксаково» 14 сентября 2025 года",
      date: "04.09.2025",
      excerpt:
        "Уважаемые жители! Доводим до вашего сведения повестку очередного заседания Правления ТСН КП Аксаково, которое состоится 14 сентября 2025 года.",
    },
    {
      id: "749",
      title: "Повестка заседания Правления 21 июня 2025 года",
      date: "17.06.2025",
      excerpt:
        "Уважаемые жители! Доводим до вашего сведения повестку очередного заседания Правления ТСН КП Аксаково, которое состоится 21 июня 2025 года.",
    },
    {
      id: "736",
      title: "Повестка заседания Правления ТСН «КП Аксаково» 22 марта 2025 года",
      date: "20.03.2025",
      excerpt:
        "Уважаемые жители! Доводим до вашего сведения повестку очередного заседания Правления, которое состоится 22 марта 2025 года.",
    },
    {
      id: "727",
      title: "Список кандидатов в члены Правления ТСН «КП «Аксаково» в марте 2025 года",
      date: "06.03.2025",
      excerpt:
        "Публикуем список кандидатов для избрания в члены Правления ТСН КП Аксаково на общем собрании в марте 2025 года.",
    },
    {
      id: "624",
      title: "УВАЖАЕМЫЕ ЖИТЕЛИ!",
      date: "13.03.2024",
      excerpt:
        "Приглашаем вас на празднование ШИРОКОЙ МАСЛЕНИЦЫ 16 марта в субботу в 17.00 на детской площадке. В программе: песни, танцы, рыцарские бои, знакомство с древнерусским оружием, конкурсы, игры, хороводы и конечно, блины. ЖДЕМ ВСЕХ!",
    },
    {
      id: "374",
      title: "Добавлены телефоны Россетей и Мытищинского Водоканала",
      date: "07.11.2023",
      excerpt:
        "В раздел Телефоны ближайших Экстренных, Муниципальных и Коммерческих Служб добавлены телефоны для экстренной связи с Водоканалом и Россети Московский Регион для связи при глобальных перебоях.",
    },
    {
      id: "372",
      title: "Опубликовано уведомление о проведении общего собрания 21 октября 2023 года",
      date: "04.10.2023",
      excerpt:
        "Уважаемые жители! Опубликовано уведомление о проведении общего собрания членов ТСН КП Аксаково 21 октября 2023 года.",
    },
    {
      id: "370",
      title: "Опубликован протокол заседания Правления №54",
      date: "05.09.2023",
      excerpt: "Опубликован протокол заседания Правления №54. С документом можно ознакомиться в разделе Протоколы.",
    },
    {
      id: "368",
      title: "Опубликовано видео нашего поселка",
      date: "07.08.2023",
      excerpt: "Опубликовано новое видео о нашем поселке. Ролик размещен на странице сайта.",
    },
    {
      id: "365",
      title: "Дороги Сделаны!",
      date: "26.07.2023",
      excerpt:
        "Ура! Мы это сделали. Остались мелкие работы. Но это уже не так страшно. Благодарю всех за проявленное терпение и участие. Об открытии проезда через КПП сообщу в пятницу. Всем доброй ночи! Председатель Правления Бурова Л.С.",
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Новости</h1>
          <div className="w-20 h-1 bg-primary mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((item) => (
              <Card key={item.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-4">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="px-0">
                    <Link href={`/news/${item.id}`}>Читать полностью</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
