import React from "react"
import ToggleThemeButton from "./ToggleThemeButton"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ToggleThemeButton />
      <main className="transition-[color, background-color] relative mx-auto max-w-4xl min-w-0 animate-fade-up space-y-5 overflow-x-hidden duration-300 md:space-y-0">
        {children}
      </main>
    </>
  )
}

export default Layout
