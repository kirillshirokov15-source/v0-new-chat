"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationMenuProps {
  mobile?: boolean
  onNavigate?: () => void
}

export function NavigationMenu({ mobile, onNavigate }: NavigationMenuProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "Наш Посёлок", href: "/poselok" },
    { title: "Новости", href: "/news" },
    {
      title: "Документы",
      submenu: [
        { title: "Протоколы", href: "/documents/protocols" },
        { title: "Отчёты и финансовые документы", href: "/documents/reports" },
        { title: "Учредительные документы", href: "/documents/founding" },
        { title: "Развитие Посёлка", href: "/documents/development" },
      ],
    },
    {
      title: "Информация",
      submenu: [
        { title: "Правила проживания", href: "/info/rules" },
        { title: "Телефоны ближайших служб", href: "/info/phones" },
        { title: "Положение о водопотреблении", href: "/info/water" },
        { title: "Обслуживание котлов и газовых плит", href: "/info/boilers" },
        { title: "Информация по тарифам", href: "/info/tariffs" },
        { title: "Творческие занятия для детей", href: "/info/kids" },
        { title: "Культурно-массовые мероприятия", href: "/info/culture" },
        { title: "Озеленение", href: "/info/landscaping" },
      ],
    },
    { title: "Чаты", href: "/chats" },
    { title: "Контакты", href: "/contacts" },
  ]

  const handleMenuClick = (title: string) => {
    setOpenMenu(openMenu === title ? null : title)
  }

  if (mobile) {
    return (
      <ul className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <li key={item.title}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => handleMenuClick(item.title)}
                  className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md"
                >
                  {item.title}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", openMenu === item.title && "rotate-180")}
                  />
                </button>
                {openMenu === item.title && (
                  <ul className="mt-2 space-y-1 pl-4">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.title}>
                        <Link
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                          onClick={onNavigate}
                        >
                          {subitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md"
                onClick={onNavigate}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="flex items-center space-x-1">
      {menuItems.map((item) => (
        <li
          key={item.title}
          className="relative"
          onMouseEnter={() => item.submenu && setOpenMenu(item.title)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {item.submenu ? (
            <>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === item.title && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <ul className="bg-white border rounded-md shadow-lg py-2">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.title}>
                        <Link href={subitem.href} className="block px-4 py-2 text-sm hover:bg-secondary">
                          {subitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link href={item.href} className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
