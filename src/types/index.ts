export interface IHero {
  name: string
  introduction: string
  role: string
  description: string
  greeting: string
  myCV: string
  contactMe: string
}

export interface IObjectives {
  title: string
  subtitle: string
  become: string
  description: string
  yearExperience: string
  projectDone: string
}

export interface IGrowthRoadmap {
  title: string
  subtitle: string
  orientation: string
  list: {
    id: string
    title: string
    descriptions: string[]
  }[]
}
