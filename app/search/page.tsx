"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  const allContent = [
    {
      title: "Повестка заседания Правления 21 июня 2025 года",
      type: "Новость",
      date: "17.06.2025",
      link: "/news/749",
      excerpt:
        "Уважаемые жители! Доводим до вашего сведения повестку очередного заседания Правления ТСН КП Аксаково...",
    },
    {
      title: "Протокол заседания Правления №62",
      type: "Документ",
      date: "02.04.2025",
      link: "/documents/protocols",
      excerpt: "Публикуем протокол заседания Правления ТСН КП Аксаково №62...",
    },
    {
      title: "Правила проживания",
      type: "Информация",
      date: "",
      link: "/info/rules",
      excerpt: "Правила проживания в КП Аксаково установлены для обеспечения комфортного и безопасного проживания...",
    },
    {
      title: "Телефоны ближайших служб",
      type: "Информация",
      date: "",
      link: "/info/phones",
      excerpt: "Контакты экстренных и коммунальных служб для жителей КП Аксаково...",
    },
    {
      title: "Информация по тарифам",
      type: "Информация",
      date: "",
      link: "/info/tariffs",
      excerpt: "Тарифы на коммунальные услуги и членские взносы ТСН КП Аксаково...",
    },
  ]

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query),
    )
    setSearchResults(results)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Поиск по сайту</h1>
          <div className="w-20 h-1 bg-primary mb-12"></div>

          <div className="mb-12">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Введите запрос для поиска..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-lg py-6"
              />
              <Button size="lg" onClick={handleSearch} className="px-8">
                <Search className="h-5 w-5 mr-2" />
                Найти
              </Button>
            </div>
          </div>

          {searchResults.length > 0 && (
            <div>
              <p className="text-muted-foreground mb-6">
                Найдено результатов: <span className="font-bold">{searchResults.length}</span>
              </p>
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-secondary rounded-full">{result.type}</span>
                            {result.date && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>{result.date}</span>
                              </div>
                            )}
                          </div>
                          <CardTitle className="text-lg mb-2">
                            <Link href={result.link} className="hover:text-primary transition-colors">
                              {result.title}
                            </Link>
                          </CardTitle>
                          <p className="text-sm text-muted-foreground line-clamp-2">{result.excerpt}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  По вашему запросу ничего не найдено. Попробуйте изменить запрос.
                </p>
              </CardContent>
            </Card>
          )}

          {!searchQuery && searchResults.length === 0 && (
            <Card className="bg-secondary/30">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-3">Советы по поиску:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Используйте ключевые слова для более точного поиска</li>
                  <li>• Попробуйте разные варианты написания</li>
                  <li>• Используйте более общие термины, если поиск не дал результатов</li>
                  <li>• Проверьте правильность написания слов</li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
