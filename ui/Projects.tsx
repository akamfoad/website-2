import { darkColors } from "@/ui/brandColors"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"
import { useHover } from "@react-aria/interactions"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Tilt from "react-parallax-tilt"
import { RoughNotation } from "react-rough-notation"

type Project = {
  name: string
  description: string
  image: string
  url?: string
}

const data: Project[] = [
  {
    name: "30 day front-end challenge",
    description:
      "30 days of front-end is a series of daily challenges recreating simple yet delightful UI elements from around the web.",
    url: "/challenge",
    image: "/challenge.png",
  },
  {
    name: "Next.js & MDX blog",
    description:
      "A blog using MDX which allows us to import and embed components inside markdown files.",
    url: "/blog/mdx-nextjs-blog",
    image: "/blog.png",
  },
  // {
  //   name: "Dough",
  //   description:
  //     "A personal budgeting app that makes it easier to manage my finances in one place by pulling data from my UK bank accounts using TrueLayer.",
  //   image: "/dough.png",
  // },
  // {
  //   name: "Contra",
  //   description:
  //     "An iOS app that allows users to create custom pomodoro timers and sessions. It connects to Google Calendar so users can see an overview of their day.",
  //   image: "/contra.jpeg",
  // },
  // {
  //   name: "Bella Pilates",
  //   description:
  //     "A pilates platform offering beginner to advanced programs and nutritional plans for Portuguese-speaking audiences.",
  //   image: "/bella-julia.png",
  // },
]

const Project = ({ project, color }: { project: Project; color: string }) => {
  let { hoverProps, isHovered } = useHover({})

  return (
    <Link href={project.url ? project.url : "/"}>
      <a className={clsx("block rounded-xl", FOCUS_VISIBLE_OUTLINE)}>
        <div {...hoverProps}>
          <Tilt
            transitionSpeed={10000}
            tiltMaxAngleY={8}
            tiltMaxAngleX={8}
            scale={1.01}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareBorderRadius="11px"
          >
            <Image
              src={project.image}
              alt="Project Preview"
              width={500}
              height={300}
              priority={true}
              className="rounded-xl"
            />
          </Tilt>
          <p className="mt-4 text-xl font-bold text-gray-800">
            {project.name}{" "}
            {!project.url ? (
              <span className="text-base font-normal text-gray-500">
                &middot; Under development
              </span>
            ) : null}
          </p>{" "}
          <p className="mt-2 text-gray-700">{project.description}</p>
          {project.url ? (
            <div className="mt-2">
              <RoughNotation
                type="underline"
                show={isHovered}
                strokeWidth={2}
                iterations={1}
                padding={2}
                animationDuration={300}
                color={color}
              >
                <span className="font-medium text-gray-800">View Project</span>
              </RoughNotation>
            </div>
          ) : null}
        </div>
      </a>
    </Link>
  )
}

export const Projects = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <h4 className="mt-2 text-gray-700 lg:text-lg">
        Some of the side projects I'm currently working on:
      </h4>

      <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6">
        {data.map((project, index) => {
          return (
            <div key={index} className="mt-12 lg:w-1/2 lg:px-6">
              <Project project={project} color={darkColors[index]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
