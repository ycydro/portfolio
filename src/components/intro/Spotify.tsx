import { useSpotify } from "@/hooks/use-spotify"
import { cn } from "@/lib/utils"

const Spotify = () => {
  const { currentTrack, mostRecentTrack, isLoading } = useSpotify()

  const trackImage = currentTrack
    ? currentTrack.albumImageUrl
    : mostRecentTrack?.albumImageUrl
  const trackName = currentTrack?.name ?? mostRecentTrack?.name ?? "No track"
  const trackArtist =
    currentTrack?.artist ?? mostRecentTrack?.artist ?? "No track artist"

  if (isLoading) {
    return (
      <div className="flex h-full flex-row items-center justify-center gap-3 md:mt-0 md:flex-col">
        {/* Spinning spotify shit */}
        <div className="relative aspect-square w-10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.25)] ring-1 ring-foreground/10 md:w-25 dark:shadow-[0_0_30px_rgba(255,255,255,0.12)]">
          <img
            src="/spotify/vinyl.png"
            className="absolute inset-0 aspect-square w-full animate-vinyl-spin rounded-full"
          />
        </div>

        <div className="max-w-xs overflow-hidden">
          <div className="flex whitespace-nowrap">
            <p className="text-xs text-muted-foreground">
              Initializing track...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a
      target="_blank"
      href={
        currentTrack ? currentTrack.spotifyUrl : mostRecentTrack?.spotifyUrl
      }
      className="flex h-full flex-row items-center justify-center gap-3 md:mt-0 md:flex-col"
    >
      <div className="relative aspect-square w-10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.25)] ring-1 ring-foreground/10 md:w-25 dark:shadow-[0_0_30px_rgba(255,255,255,0.12)]">
        {trackImage ? (
          <img
            src={trackImage}
            className={cn(
              "absolute inset-0 aspect-square w-full scale-[0.5] rounded-full",
              { "animate-vinyl-spin": currentTrack }
            )}
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 aspect-square w-full min-w-10 scale-[0.5] rounded-full bg-foreground"
            )}
          ></div>
        )}
        <img
          src="/spotify/vinyl.png"
          className={cn("absolute inset-0 aspect-square w-full rounded-full", {
            "animate-vinyl-spin": currentTrack,
          })}
        />
      </div>

      <div className="w-fit overflow-hidden">
        <div
          className={cn("flex whitespace-nowrap", {
            "md:animate-marquee": currentTrack,
          })}
        >
          <div className="flex w-full flex-col items-center font-light md:justify-center">
            <p className="truncate text-sm">{trackName}</p>
            <p className="text-xs text-muted-foreground">{trackArtist}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Spotify
