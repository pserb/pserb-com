import { Hero } from '@/components/pages/hero/hero'
import { loadProjectsPage } from '@/sanity/loader/loadQuery'

export default async function HeroPage() {
  // const initial = await loadProjectsPage()
  // const data = initial.data
  // const pl = data?.projectList
  // const proj = pl![0]

  const slug = "/"
  const heading = "Stuy Schedule App"
  const subheading = "creator, over 3,700 downloads!"

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow w-full">
      <div className="snap-always snap-center max-w-5xl m-auto">
        <Hero
          link={slug!}
          heading={heading!}
          subheading={subheading!}
        />
      </div>
      <div className="snap-always snap-center max-w-5xl m-auto">
        <Hero
          link={slug!}
          heading={heading!}
          subheading={subheading!}
        />
      </div>
    </div>
  )
}
