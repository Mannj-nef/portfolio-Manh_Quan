import { Technical } from '~/types'

export const highlightText = (text: string, keywords: Technical[]) => {
  if (!keywords?.length) return text

  const regex = new RegExp(`(${keywords.join('|')})`, 'gi')

  return text.split(regex).map((part, i) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold text-[color:var(--accent)]">
        {part}
      </strong>
    ) : (
      part
    )
  )
}
