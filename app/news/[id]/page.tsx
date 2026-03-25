import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowLeft, FileText, Download } from "lucide-react"
import { notFound } from "next/navigation"

const newsData: Record<
  string,
  {
    id: string
    title: string
    date: string
    content: string
    pdfUrl?: string
    pdfUrl2?: string
    pdfLabel2?: string
  }
> = {
   "800": {
    id: "800",
    title: "Уведомление о проведении общего собрания",
    date: "24.03.2026",
    content: "",
    pdfUrl: "/documents/uvedomlenie-obshhego-sobraniya-2025.pdf",
    pdfUrl2: "/documents/dop_doc_25_03.pdf",
    pdfLabel2: "Дополнительный документ",
  },
  "758": {
    id: "758",
    title: "Повестка заседания Правления ТСН «КП Аксаково» 14 сентября 2025 года",
    date: "04.09.2025",
    content: "",
    pdfUrl: "/documents/povestka-14-09-2025.pdf",
  },
  "749": {
    id: "749",
    title: "Повестка заседания Правления 21 июня 2025 года",
    date: "17.06.2025",
    content: "",
    pdfUrl: "/documents/povestka-21-06-2025.pdf",
  },
  "736": {
    id: "736",
    title: "Повестка заседания Правления ТСН «КП «Аксаково» 22 марта 2025 года",
    date: "20.03.2025",
    content: "",
    pdfUrl: "/documents/povestka-22-03-2025.pdf",
  },
  "727": {
    id: "727",
    title: "Список кандидатов в члены Правления ТСН «КП «Аксаково» в марте 2025 года",
    date: "06.03.2025",
    content: "",
    pdfUrl: "/documents/spisok-kandidatov-2025.pdf",
  },
  "624": {
    id: "624",
    title: "УВАЖАЕМЫЕ ЖИТЕЛИ!",
    date: "13.03.2024",
    content: `УВАЖАЕМЫЕ ЖИТЕЛИ!

Приглашаем вас на празднование ШИРОКОЙ МАСЛЕНИЦЫ

ДАТА: 16 марта, суббота
ВРЕМЯ: 17:00
МЕСТО: Детская площадка

В ПРОГРАММЕ:
• Песни и танцы
• Рыцарские бои
• Знакомство с древнерусским оружием
• Конкурсы и игры
• Хороводы
• И конечно, БЛИНЫ!

ЖДЕМ ВСЕХ!

Приходите всей семьей. Будет весело и интересно как детям, так и взрослым.`,
  },
  "374": {
    id: "374",
    title: "Добавлены телефоны Россетей и Мытищинского Водоканала",
    date: "07.11.2023",
    content: `Уважаемые жители!

В раздел "Телефоны ближайших Экстренных, Муниципальных и Коммерческих Служб" добавлены телефоны для экстренной связи с Водоканалом и Россети Московский Регион.

Эти контакты необходимы для связи при глобальных перебоях с водоснабжением и электроснабжением.

Рекомендуем сохранить эти номера в своих телефонах.

С полным списком телефонов можно ознакомиться в разделе "Информация - Телефоны ближайших служб".`,
  },
  "372": {
    id: "372",
    title: "Опубликовано уведомление о проведении общего собрания 21 октября 2023 года",
    date: "04.10.2023",
    content: `Уважаемые жители!

Опубликовано уведомление о проведении общего собрания членов ТСН КП Аксаково и собственников недвижимости, не являющихся членами ТСН.

ДАТА ПРОВЕДЕНИЯ: 21 октября 2023 года

Ознакомиться с повесткой дня и полным текстом уведомления можно в разделе "Документы - Протоколы".

Просим всех жителей принять участие в голосовании по важным вопросам управления поселком.`,
  },
  "370": {
    id: "370",
    title: "Опубликован протокол заседания Правления №54",
    date: "05.09.2023",
    content: `Уважаемые жители!

Опубликован протокол заседания Правления ТСН КП Аксаково №54.

На заседании были рассмотрены текущие вопросы управления поселком, вопросы благоустройства территории и обращения жителей.

С полным текстом протокола можно ознакомиться в разделе "Документы - Протоколы".`,
  },
  "368": {
    id: "368",
    title: "Опубликовано видео нашего поселка",
    date: "07.08.2023",
    content: `Уважаемые жители!

Опубликовано новое видео о нашем поселке КП Аксаково.

Видеоролик показывает красоту нашего поселка, инфраструктуру, детские площадки и уютную атмосферу загородной жизни.

Ролик размещен на главной странице сайта.

Приглашаем всех посмотреть!`,
  },
  "365": {
    id: "365",
    title: "Дороги Сделаны!",
    date: "26.07.2023",
    content: `Уважаемые жители!

Ура! Мы это сделали!

Ремонт дорог завершен. Остались мелкие работы, но это уже не так страшно.

Благодарю всех за проявленное терпение и участие в решении этого важного вопроса.

Об открытии проезда через КПП сообщу в пятницу.

Всем доброй ночи!

С уважением,
Председатель Правления
Бурова Л.С.`,
  },
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(newsData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = newsData[id]
  if (!news) {
    return {
      title: "Новость не найдена - КП Аксаково",
    }
  }
  return {
    title: `${news.title} - Новости - КП Аксаково`,
    description: news.content.substring(0, 160),
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const news = newsData[id]

  if (!news) {
    notFound()
  }

  const formatContent = (content: string) => {
    const lines = content.split("\n")
    const elements: React.ReactNode[] = []
    let currentParagraph: string[] = []

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (!trimmedLine) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 leading-relaxed">
              {currentParagraph.join(" ")}
            </p>,
          )
          currentParagraph = []
        }
        return
      }

      const isHeading =
        trimmedLine.endsWith(":") ||
        (trimmedLine === trimmedLine.toUpperCase() && trimmedLine.length > 3 && /^[А-ЯЁA-Z\s!?]+$/.test(trimmedLine))

      if (isHeading) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 leading-relaxed">
              {currentParagraph.join(" ")}
            </p>,
          )
          currentParagraph = []
        }

        elements.push(
          <h2 key={`h-${index}`} className="text-xl font-semibold mt-6 mb-3 text-foreground">
            {trimmedLine}
          </h2>,
        )
        return
      }

      const isListItem = /^(\d+\.|•|-)/.test(trimmedLine)

      if (isListItem) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 leading-relaxed">
              {currentParagraph.join(" ")}
            </p>,
          )
          currentParagraph = []
        }

        elements.push(
          <div key={`li-${index}`} className="mb-2 pl-4 leading-relaxed">
            {trimmedLine}
          </div>,
        )
        return
      }

      currentParagraph.push(trimmedLine)
    })

    if (currentParagraph.length > 0) {
      elements.push(
        <p key="p-final" className="mb-4 leading-relaxed">
          {currentParagraph.join(" ")}
        </p>,
      )
    }

    return elements
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/news">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к новостям
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>{news.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">{news.title}</h1>

          <Card>
            <CardContent className="p-6 md:p-8">
              {news.pdfUrl ? (
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-lg w-full">
                    <div className="p-4 bg-red-100 rounded-lg">
                      <FileText className="h-12 w-12 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Документ PDF</h3>
                      <p className="text-muted-foreground text-sm">{news.title}</p>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href={news.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Скачать PDF
                      </a>
                    </Button>
                  </div>
                  
            {news.pdfUrl2 && (
                    <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-lg w-full">
                      <div className="p-4 bg-red-100 rounded-lg">
                        <FileText className="h-12 w-12 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {news.pdfLabel2 ?? "Дополнительный документ"}
                        </h3>
                        <p className="text-muted-foreground text-sm">{news.title}</p>
                      </div>
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <a href={news.pdfUrl2} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Скачать PDF
                        </a>
                      </Button>
                    </div>
                  )}
                  
                  <div className="w-full">
                    <iframe src={news.pdfUrl} className="w-full h-[600px] border rounded-lg" title={news.title} />
                  </div>
                </div>
              ) : (
                <div className="prose prose-lg max-w-none">{formatContent(news.content)}</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
