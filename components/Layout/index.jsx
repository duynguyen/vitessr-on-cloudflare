import React from 'react'
import logo from './logo.svg'
import { PageContextProvider } from '../../hooks/usePageContext'
import './index.css'
import Link from '../Link'

function Main({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8em',
        borderRight: '2px solid #eee',
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }) {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} />
      </a>
    </div>
  )
}


export default function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Main>
          <Sidebar>
            <Logo />
            <Link href="/">Welcome</Link>
            <Link href="/about">About</Link>
          </Sidebar>
          <Content>{children}</Content>
        </Main>
      </PageContextProvider>
    </React.StrictMode>
  )
}
