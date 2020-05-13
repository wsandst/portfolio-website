
import "../layout/layout.css"

import altonTheme from "typography-theme-alton"

import Typography from "typography"

altonTheme.overrideThemeStyles = () => ({
    'h1, h2, h3, span': {
        color: 'var(--textTitle)'
    },
    a: {
        color: 'var(--textLink)'
    },
    span: {
        color: 'var(--textNormal)'
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
      boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
  })
  

const typography = new Typography(altonTheme);

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale