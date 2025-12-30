import { TECHNICAL_LIST } from '~/constants'

export type Technical = (typeof TECHNICAL_LIST)[number]

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

export interface IProjects {
  practicalExperience: string
  titleFirst: string
  titleSecond: string
  description: string
  subDescription: string
  projects: {
    title: string
    subTitle: string
    dateTime: string
    company: string
    description: string
    features: string[]
    technologies: string[]
  }[]
}
