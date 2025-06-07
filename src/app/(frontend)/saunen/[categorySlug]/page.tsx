// src/app/(frontend)/saunen/[categorySlug]/page.tsx

import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeroBlock from '@/components/HeroBlock/page'
import { SaunaCard } from '@/components/SaunaCard'

export default async function Page({ params }: { params: { categorySlug: string } }) {
  const payload = await getPayload({ config: configPromise })

  const categoryResult = await payload.find({
    collection: 'categories',
    pagination: false,
    where: { slug: { equals: params.categorySlug } },
  })

  const category = categoryResult.docs[0]
  if (!category) return notFound()

  const saunasResult = await payload.find({
    collection: 'saunas',
    pagination: false,
    where: { category: { equals: category.id } },
  })

  return (
    <>
      <HeroBlock
        name={category.name}
        richText={category.description}
        image={category.previewImage}
      />
      <section className="px-4 sm:px-6 lg:px-12 py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {saunasResult.docs.map((sauna) => (
          <SaunaCard key={sauna.slug} {...sauna} />
        ))}
      </section>
    </>
  )
}
