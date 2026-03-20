import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="duration-300ms mx-auto max-w-4xl min-w-0 transition-colors">
      {children}
    </main>
  )
}

export default Layout
