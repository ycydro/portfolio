import Layout from "@/components/layout/Layout"
import Intro from "@/components/intro/Intro"
import About from "@/components/about/About"
import Skills from "./components/skills/Skills"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"

export function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </Layout>
  )
}

export default App
