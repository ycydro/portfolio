import { useTheme } from "@/context/theme-provider"
import type { JSX } from "react"
import { MoonIcon, SunIcon } from "../svgs/random"

const ToggleThemeButton = (): JSX.Element => {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="md:top-none fixed top-4 right-4 z-50 flex size-10.5 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-secondary/90 text-xl shadow-xl backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 md:top-217.5 md:right-1/2 md:size-12.5"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ToggleThemeButton
