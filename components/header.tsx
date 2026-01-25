"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { NavigationMenu } from "@/components/navigation-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
              А
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">КП Аксаково</span>
              <span className="text-xs text-muted-foreground">Товарищество собственников</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu />
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link href="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t py-4">
            <NavigationMenu mobile onNavigate={() => setIsMenuOpen(false)} />
          </nav>
        )}
      </div>
    </header>
  )
}
