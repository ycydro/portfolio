const Spotify = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {/* Spinning spotify shit */}
      <div className="radius aspect-square rounded-full bg-foreground md:min-w-25"></div>
      <p className="font-light">recently played</p>
    </div>
  )
}

export default Spotify
