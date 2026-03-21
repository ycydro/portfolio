import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="transition-[color, background-color] mx-auto max-w-4xl min-w-0 animate-fade-up space-y-2.5 overflow-x-hidden duration-300 md:space-y-0">
      {children}
    </main>
  )
}

export default Layout
