import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="/icon.png" alt="icon" width={30} height={30} />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="The Complete Manual of Suicide" />
      <link rel="icon" type="image/png" href="/icon.png"></link>
    </>
  ),
  toc: {
    float: true,
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ▼▼⧨▽▽'
      }
    }
  },
  footer: {
    text: (
      <span>
        By Tsurumi Wataru<br />
        © Copyright 1993.<br />
        MIT {new Date().getFullYear()} ©{' '}<a href="https://nextra.site" target="_blank">Nextra</a>.
      </span>
    ),
  },
  editLink: {
    text: ''
  },
  feedback: {
    content: '',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'vn', text: 'Tiếng Việt' },
  ]
}

export default config
