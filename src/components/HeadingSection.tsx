interface IHeadingSection {
  title: string
  subtitle: string
  become: string
  isIndigoColor?: boolean
}

const HeadingSection = ({
  title,
  subtitle,
  become,
  isIndigoColor,
}: IHeadingSection) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span
          className={`w-8 h-[2px] ${
            isIndigoColor ? 'bg-indigo' : 'bg-emerald'
          }`}
        ></span>
        <span
          className={`uppercase font-semibold  ${
            isIndigoColor ? 'text-indigo' : 'text-emerald'
          }`}
        >
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl font-bold font-serif tracking-tight -mt-2">
        <span className="mb-1 block">{become}</span>
        <p className={`${isIndigoColor ? 'text-indigo' : 'text-emerald'} `}>
          {title}
        </p>
      </h2>
    </>
  )
}

export default HeadingSection
