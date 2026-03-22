type SpotifyMarqueeItemProps = {
  name?: string
  artist?: string
}

const SpotifyMarqueeItem = ({ name, artist }: SpotifyMarqueeItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center font-light">
      <p className="text-sm">{name}</p>
      <p className="text-xs text-muted-foreground">{artist}</p>
    </div>
  )
}

export default SpotifyMarqueeItem
