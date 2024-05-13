import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Prevention is better than intervention.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Prevention is better than intervention.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Dr. Harold uses her expertise to optimize health habits and applies hormone therapy and anti-aging practices to ensure
            patient health and wellness. She focuses on helping her patients plan for longevity with lifestyle adjustments.
            She advocates for appropriate nutrition, exercise regimen and supplementation based on the patients goals. 
            Her lifetime commitment to functional medicine, is consistently applied in her clinical practice and research work.
            </p>
            <p>
            Prior to starting her own private practice dedicated to Anti-aging and Hormone Therapy, Dr.Harold was the medical
            director of a large medical device company that helps patient intraoperative journey on wound healing and
            preventing healthcare associated complications. Her work has been published and she is currently active in the
            teaching programs and contributes to educational activities across USA, Latin America, Europe and Middle East
            Africa.
            </p>
            <p>
            In parallel she is as a fitness enthusiast, Yoga and Ayerveda practitioner generating change with her 360
            degree approach for disease prevention through the combination of Ayerveda way of living with the anti-aging
            modern medicine approach for every day good health to feel ageless and free from disease through incorporated
            healing, personalized medicine, hormone optimization, regeneration therapies, yoga, exercise and meditation
            practices.
            </p>
            <p>
              What is Functional Medicine?
              Also known as integrative medicine, it focuses on optimal function of the
              body to address the aging process, menopause, management of acute
              illnesses and chronic diseases by treating the root causes.
              </p>
              <p>
              The holistic approach is important and offers optimization of internal
              balances and as practiced by GP or specialists who have undergone
              CME training in the field of FM to apply protocols such as:
              IV Drips, Hormone Therapy, Peptides, Ozone Therapy & Gut Imbalances
              You are what you eat…so eat well and be well!
            </p>
            <p>
              TBC
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              fluhasa@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
