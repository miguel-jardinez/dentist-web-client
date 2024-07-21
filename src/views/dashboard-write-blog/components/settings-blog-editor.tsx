import { CategorySection } from "./category-section"
import { DescriptionSeoSection } from "./description-seo-section"
import { SlugSection } from "./slug-section"

export const SettingsBlogEditor = () => {

  return (
    <div className="w-1/3 border-l border-l-slate-200">
      <CategorySection />
      <SlugSection />
      <DescriptionSeoSection />
    </div>
  )
}
