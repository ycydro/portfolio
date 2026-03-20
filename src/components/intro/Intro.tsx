import Container from "../common/Container"
import Identity from "./Identity"
import Spotify from "./Spotify"

const Intro = () => {
  return (
    <Container className="flex justify-between pt-10 pb-5 md:pt-15 md:pb-10">
      {/* Pic with name and title  */}
      <Identity />
      {/* Spotify  */}
      <Spotify />
    </Container>
  )
}

export default Intro
