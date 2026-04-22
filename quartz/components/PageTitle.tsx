import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = `${baseDir}/assets/icons/logo.svg`
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link" aria-label={title} title={title}>
        <img class="page-title-logo" src={logoPath} alt={title} />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.page-title-logo {
  display: block;
  width: min(100%, 15rem);
  height: auto;
  filter: brightness(0) saturate(100%);
  opacity: 0.95;
}

[saved-theme="dark"] .page-title-logo {
  filter: brightness(0) invert(1);
}

@media (prefers-color-scheme: dark) {
  :root:not([saved-theme="light"]) .page-title-logo {
    filter: brightness(0) invert(1);
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
