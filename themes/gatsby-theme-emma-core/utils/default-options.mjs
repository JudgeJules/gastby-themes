export const withDefaults = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const formatString = themeOptions.formatString || `DD.MM.YYYY`
  const mdx = typeof themeOptions.mdx === `undefined` ? true : themeOptions.mdx
  const sharp = typeof themeOptions.sharp === `undefined` ? true : themeOptions.sharp

  return {
    basePath,
    projectsPath,
    pagesPath,
    formatString,
    mdx,
    sharp,
  }
}
