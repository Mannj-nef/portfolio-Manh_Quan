'use client'

import SplitSection from '~/components/SplitSection'
import { IObjectives } from '~/types'

interface CareerObjectiveProps {
  dict: IObjectives
}

const CareerObjective = ({ dict }: CareerObjectiveProps) => {
  return (
    <div id="career-objective">
      <SplitSection
        title={dict.title}
        subtitle={dict.subtitle}
        become={dict.become}
        isIndigoColor
        imageSrc="/assets/manh-quan-mac.webp"
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          {dict.description}
        </p>
        {/* Trong
          tương lai gần, tôi hướng đến vai trò Technical Lead, nơi tôi có thể
          kết hợp tư duy hệ thống (System Design) và khả năng dẫn dắt đội ngũ để
          giải quyết các bài toán công nghệ phức tạp. */}

        <div className="grid grid-cols-2 gap-8 border-t pt-8">
          <div>
            <div className="text-5xl font-bold mb-2">3+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest">
              {dict.yearExperience}
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">6+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest">
              {dict.projectDone}
            </div>
          </div>
        </div>
      </SplitSection>
    </div>
  )
}

export default CareerObjective
