'use client'

import { Folder, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function PersonalProjects() {
  const mockData = {
    titleFirst: 'Some things',
    titleSecond: "I've built",
    description: 'Dự án cá nhân, mã nguồn mở và những thử nghiệm công nghệ.',
    projects: [
      {
        title: 'NestJS E-commerce API',
        description:
          'Xây dựng hệ thống API RESTful hoàn chỉnh cho trang thương mại điện tử. Tích hợp thanh toán Stripe, xác thực JWT, và xử lý đơn hàng thời gian thực.',
        technologies: ['NestJS', 'PostgreSQL', 'Docker'],
        githubUrl: '#',
        externalUrl: '#',
      },
      {
        title: 'Real-time Chat App',
        description:
          'Ứng dụng nhắn tin theo thời gian thực mô phỏng Discord. Hỗ trợ tạo phòng chat, gửi tin nhắn đa phương tiện và thông báo đẩy.',
        technologies: ['React', 'Socket.io', 'Tailwind'],
        githubUrl: '#',
        externalUrl: '#',
      },
      {
        title: 'Personal Portfolio V1',
        description:
          'Phiên bản đầu tiên của trang web cá nhân, được thiết kế tập trung vào hiệu năng tải trang và trải nghiệm người dùng với Dark Mode.',
        technologies: ['HTML/CSS', 'JavaScript'],
        githubUrl: '#',
      },
    ],
  }

  return (
    <section id="personal-projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 tracking-tight">
            <span className="text-slate-900 dark:text-slate-100">
              {mockData.titleFirst}
            </span>{' '}
            <span className="text-slate-400/80 dark:text-slate-400">
              {mockData.titleSecond}
            </span>
          </h2>
          <p className="text-muted-foreground text-base">
            {mockData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6 text-slate-500 dark:text-slate-400">
                <Folder className="w-10 h-10 text-indigo-500 stroke-[1.5]" />
                <div className="flex gap-4 items-center">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="hover:text-indigo-500 transition-colors"
                      target="_blank"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {project.externalUrl && (
                    <Link
                      href={project.externalUrl}
                      className="hover:text-indigo-500 transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground font-mono font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
