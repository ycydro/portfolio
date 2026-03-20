import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="animate mx-auto max-w-4xl min-w-0 fade-in">
      {children}
    </main>
  )
}

export default Layout
