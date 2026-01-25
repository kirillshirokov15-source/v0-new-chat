import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О поселке */}
          <div>
            <h3 className="text-lg font-bold mb-4">КП Аксаково</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Коттеджный поселок в экологически чистой зоне северной части Подмосковья, в 20 км от МКАД по Дмитровскому
              шоссе.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/poselok" className="text-slate-300 hover:text-white transition-colors">
                  Наш Посёлок
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="/documents/protocols" className="text-slate-300 hover:text-white transition-colors">
                  Документы
                </Link>
              </li>
              <li>
                <Link href="/info/rules" className="text-slate-300 hover:text-white transition-colors">
                  Информация
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-slate-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-300">Охрана КПП:</div>
                  <a href="tel:+79637676946" className="text-white hover:underline">
                    +7 (963) 767-69-46
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-300">Председатель:</div>
                  <a href="tel:+79166025954" className="text-white hover:underline">
                    +7 (916) 602-59-54
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Адрес */}
          <div>
            <h3 className="text-lg font-bold mb-4">Адрес</h3>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <address className="text-slate-300 not-italic leading-relaxed">
                МО, деревня Аксаково, улица Багратионовская, стр.2, этаж 1, офис 1
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} ТСН «КП Аксаково». Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
