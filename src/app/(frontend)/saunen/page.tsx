// src/app/(frontend)/saunas/[categorySlug]/page.tsx

import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import HeroBlock from '@/components/HeroBlock/page'
import { SaunaCard } from '@/components/SaunaCard'

export default async function Page({
  params,
  searchParams, // wird zwar nicht gebraucht, muss aber deklariert sein
}: any) {
  const payload = await getPayload({ config: configPromise })

  // 1) Kategorie holen
  const categoryResult = await payload.find({
    collection: 'categories',
    draft: false,
    limit: 1,
    overrideAccess: false,
    pagination: false,
    where: {
      slug: { equals: params.categorySlug },
    },
    select: {
      id: true,
      name: true,
      description: true,
      previewImage: true,
    },
  })

  const category = categoryResult.docs[0]
  if (!category) {
    return notFound()
  }

  // 2) Alle Saunen dieser Kategorie laden
  const saunaResult = await payload.find({
    collection: 'saunas',
    draft: false,
    overrideAccess: false,
    pagination: false,
    depth: 1,
    where: {
      category: { equals: category.id },
    },
    select: {
      name: true,
      slug: true,
      previewImage: true,
      previewDescription: true,
      uvp: true,
      price: true,
      discount: true,
      ctaLink: true,
    },
  })

  const saunas = saunaResult.docs

  return (
    <>
      <HeroBlock
        name={category.name}
        richText={category.description}
        image={category.previewImage}
      />

      <section className="px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {saunas.map((s) => (
          <SaunaCard
            key={s.slug}
            name={s.name}
            slug={s.slug}
            previewImage={s.previewImage}
            previewDescription={s.previewDescription}
            uvp={s.uvp}
            price={s.price}
            discount={s.discount}
            categorySlug="saunen"
          />
        ))}
      </section>
    </>
  )
}
