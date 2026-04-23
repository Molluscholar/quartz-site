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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 50;
  min-height: 5.75rem;
  padding: 0.6rem 0;
  background: var(--light);
  display: flex;
  align-items: center;
}

.page-title-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-left: max(1rem, calc((100vw - 1500px) / 2 + 2rem));
}

.page-title-logo {
  display: block;
  width: clamp(16rem, 26vw, 26rem);
  height: auto;
  filter: brightness(0) saturate(100%);
  opacity: 0.95;
}

@media all and (max-width: 1199px) {
  .page-title-link {
    margin-left: 1rem;
  }

  .page-title-logo {
    width: clamp(13.5rem, 30vw, 20rem);
  }
}

@media all and (max-width: 800px) {
  .page-title {
    min-height: 4.7rem;
    padding: 0.45rem 0;
  }

  .page-title-link {
    margin-left: 0.75rem;
  }

  .page-title-logo {
    width: clamp(11rem, 50vw, 15rem);
  }
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
