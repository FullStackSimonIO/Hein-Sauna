// src/app/(frontend)/saunen/[categorySlug]/[saunaSlug]/page.tsx
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { PayloadRedirects } from '@/components/PayloadRedirects'

type Args = {
  params: Promise<{
    categorySlug: string
    saunaSlug: string
  }>
}

async function Page({ params: paramsPromise }: Args) {
  // jetzt awaiten wir das Promise-Param
  const { categorySlug, saunaSlug } = await paramsPromise

  const payload = await getPayload({ config: configPromise })

  const saunaResult = await payload.find({
    collection: 'saunas',
    limit: 1,
    pagination: false,
    depth: 2,
    where: { slug: { equals: saunaSlug } },
  })
  const sauna = saunaResult.docs[0]
  if (!sauna) return notFound()

  return (
    <article className="pb-24">
      <PayloadRedirects disableNotFound url={`/saunen/${categorySlug}/${saunaSlug}`} />
      <RenderHero {...sauna.hero} />
      <RenderBlocks blocks={sauna.layout ?? []} />
    </article>
  )
}

export default Page
