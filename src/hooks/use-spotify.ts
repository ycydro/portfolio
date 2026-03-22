import type { Track } from "@/types"
import { useState, useEffect } from "react"

declare global {
  interface Window {
    Spotify: any
    onSpotifyWebPlaybackSDKReady: () => void
  }
}

export function useSpotify() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [mostRecentTrack, setMostRecentTrack] = useState<Track | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("/api/spotify")
        const data = await res.json()

        // current track
        if (data.current?.item) {
          const track = data.current.item
          setCurrentTrack({
            id: track.id,
            name: track.name,
            artist: track.artists.map((a: any) => a.name).join(", "),
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
            spotifyUrl: track.external_urls.spotify,
          })
        } else {
          setCurrentTrack(null)
        }

        // recent track
        if (data.recent?.items?.length) {
          const item = data.recent.items[0].track
          setMostRecentTrack({
            id: item.id,
            name: item.name,
            artist: item.artists.map((a: any) => a.name).join(", "),
            album: item.album.name,
            albumImageUrl: item.album.images[0].url,
            spotifyUrl: item.external_urls.spotify,
          })
        } else {
          setMostRecentTrack(null)
        }
      } catch (err) {
        console.error("Error fetching Spotify data:", err)
        setCurrentTrack(null)
        setMostRecentTrack(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { currentTrack, mostRecentTrack, isLoading }
}
