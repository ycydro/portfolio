export default async function handler(req: any, res: any) {
  try {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ":" +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
    })

    const { access_token } = await tokenRes.json()

    const [currentlyPlayingRes, recentlyPlayedRes] = await Promise.all([
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
      fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
    ])

    const currentlyPlayingData =
      currentlyPlayingRes.status === 204
        ? null
        : await currentlyPlayingRes.json()
    const recentlyPlayedData = await recentlyPlayedRes.json()

    res.status(200).json({
      current: currentlyPlayingData,
      recent: recentlyPlayedData,
    })
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Spotify data" })
  }
}
