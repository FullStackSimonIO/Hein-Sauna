// src/app/(frontend)/saunen/[categorySlug]/page.tsx

import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeroBlock from '@/components/HeroBlock/page'
import { SaunaCard } from '@/components/SaunaCard'

type Args = {
  params: Promise<{
    categorySlug: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  // 1) Hole den Slug
  const { categorySlug } = await paramsPromise

  // 2) Payload-Client initialisieren
  const payload = await getPayload({ config: configPromise })

  // 3) Kategorie abrufen
  const categoryResult = await payload.find({
    collection: 'categories',
    pagination: false,
    where: { slug: { equals: categorySlug } },
  })
  const category = categoryResult.docs[0]
  if (!category) return notFound()

  // 4) Saunen dieser Kategorie holen
  const saunasResult = await payload.find({
    collection: 'saunas',
    pagination: false,
    where: { category: { equals: category.id } },
  })

  // 5) Rendern
  return (
    <>
      <HeroBlock
        name={category.name}
        richText={category.description}
        image={category.previewImage}
      />
      <section className="px-4 sm:px-6 lg:px-24 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {saunasResult.docs.map((sauna) => (
          <SaunaCard key={sauna.slug} {...sauna} />
        ))}
      </section>
    </>
  )
}
