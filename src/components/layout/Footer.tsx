import { useEffect, useState } from "react"
import Container from "../common/Container"
const Footer = () => {
  const year = new Date().getFullYear()
  const [lastUpdateDate, setLastUpdateDate] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    async function getLatestCommit() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ycydro/portfolio/commits?page=1&per_page=1"
        )
        if (!response.ok) {
          throw Error
        }

        const data = await response.json()
        const latestCommitDate = new Date(data[0].commit.committer.date)

        const formatted = latestCommitDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })

        setLastUpdateDate(formatted)
      } catch (error) {}
    }

    getLatestCommit()
  }, [])

  return (
    <Container className="p-5 md:py-10">
      <footer className="flex h-full items-center justify-between gap-4">
        <p className="text-sm">&copy; {String(year)}</p>

        <div className="h-px flex-1 bg-current" />
        {lastUpdateDate && (
          <p className="text-sm font-light">last updated: {lastUpdateDate}</p>
        )}
      </footer>
    </Container>
  )
}

export default Footer
