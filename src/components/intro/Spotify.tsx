import { useSpotify } from "@/hooks/use-spotify"
import { cn } from "@/lib/utils"

const Spotify = () => {
  const { currentTrack, mostRecentTrack, isLoading } = useSpotify()

  if (isLoading) {
    return (
      <div className="flex h-full flex-row items-center gap-3 md:mt-0 md:max-w-30 md:flex-col md:justify-center">
        {/* Spinning spotify shit */}
        <div className="relative aspect-square w-15 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.25)] ring-1 ring-foreground/10 md:w-25 dark:shadow-[0_0_30px_rgba(255,255,255,0.12)]">
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

  if (!currentTrack && !mostRecentTrack) {
    return null
  }

  return (
    <div className="flex h-full flex-row items-center gap-3 md:mt-0 md:max-w-30 md:flex-col md:justify-center">
      {/* Spinning spotify shit */}
      <div className="relative aspect-square w-15 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.25)] ring-1 ring-foreground/10 md:w-25 dark:shadow-[0_0_30px_rgba(255,255,255,0.12)]">
        <img
          src={
            currentTrack
              ? currentTrack.albumImageUrl
              : mostRecentTrack?.albumImageUrl
          }
          className={cn(
            "absolute inset-0 aspect-square w-full scale-[0.5] rounded-full",
            { "animate-vinyl-spin": currentTrack }
          )}
        />
        <img
          src="/spotify/vinyl.png"
          className={cn("absolute inset-0 aspect-square w-full rounded-full", {
            "animate-vinyl-spin": currentTrack,
          })}
        />
      </div>

      <div className="max-w-25 overflow-hidden">
        <div
          className={cn("flex whitespace-nowrap", {
            "animate-marquee": currentTrack,
          })}
        >
          <div className="flex items-center justify-center font-light md:flex-col">
            <p className="text-sm">
              {" "}
              {currentTrack ? currentTrack.name : mostRecentTrack?.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {currentTrack ? currentTrack.artist : mostRecentTrack?.artist}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotify
