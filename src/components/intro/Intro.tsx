import Container from "../common/Container"
import Identity from "./Identity"
import Spotify from "./Spotify"

const Intro = () => {
  return (
    <Container className="w-full space-y-5 pt-10 pb-0 md:flex md:justify-between md:space-y-0 md:pt-15 md:pb-10">
      {/* Pic with name and title  */}
      <Identity />
      {/* Spotify  */}
      <Spotify />
    </Container>
  )
}

export default Intro
