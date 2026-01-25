import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/d0-b0-d0-ba-d1-81-d0-b0-d0-ba-d0-be-d0-b2-d0-be.webp"
          alt="КП Аксаково"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-accent/10" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Добро пожаловать в <span className="text-primary">КП Аксаково</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Комфортный коттеджный поселок в экологически чистой зоне северной части Подмосковья. Всего 20 км от МКАД по
            Дмитровскому шоссе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/poselok">
                Узнать больше <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacts">Контакты</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/d0-b0-d0-ba-d1-81-d0-b0-d0-ba-d0-be-d0-b2-d0-be.webp"
              alt="Въезд в поселок днем"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/d0-b0-d0-ba-d1-81-d0-b0-d0-ba-d0-be-d0-b2-d0-be-20-d0-bd-d0-be-d1-87-d1-8c.webp"
              alt="Въезд в поселок ночью"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/ct-block-item-138499-2-5-image-jjac9xqa.jpg"
              alt="Дом в поселке"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
