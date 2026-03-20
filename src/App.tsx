import Layout from "@/components/layout/Layout"
import Intro from "@/components/intro/Intro"
import About from "@/components/about/About"
import Skills from "./components/skills/Skills"

export function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Skills />
    </Layout>
  )
}

export default App
