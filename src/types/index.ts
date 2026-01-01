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

export interface ISkillCategory {
  title: string
  list: string
}

export interface ISkills {
  myStack: string
  title: string
  frontend: {
    title: string
    items: ISkillCategory[]
  }
  backend: {
    title: string
    items: ISkillCategory[]
  }
  methodologies: {
    title: string
    items: ISkillCategory[]
  }
  softSkills: {
    title: string
    items: string[]
  }
}

export interface IJobProject {
  title: string
  role?: string
  client?: string
  description: string
  stack: string[]
}

export interface IJob {
  role: string
  company: string
  period: string
  timeDuration: string
  type: string
  description?: string
  technologies?: string[]
  projects: IJobProject[]
  color: string
}

export interface IExperience {
  title: string
  subtitle: string
  totalExp: string
  list: IJob[]
}
