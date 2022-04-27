import { usePageContext } from '../../hooks/usePageContext'

export default function Link({ href, children }) {
  const pageContext = usePageContext()
  const className = ['navigation-link', pageContext.urlPathname === href && 'is-active'].filter(Boolean).join(' ')
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
