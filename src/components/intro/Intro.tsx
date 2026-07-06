import Container from "../common/Container"
import Identity from "./Identity"
import Spotify from "./Spotify"

const Intro = () => {
  return (
    <Container className="w-full pt-10 pb-0 md:pt-15">
      {/* Pic with name and title  */}
      <Identity />
    </Container>
  )
}

export default Intro
