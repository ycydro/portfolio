import { cn } from "@/lib/utils"
import { Volume2Icon } from "lucide-react"
import { useEffect, useState } from "react"

const Identity = () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>(
    undefined
  )
  const [isSpeaking, setIsSpeaking] = useState(false)
  const synth = window.speechSynthesis

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = synth.getVoices()
      const foundVoice = voicesList.find((v) =>
        v.name.includes("Google español")
      )
      if (foundVoice) setVoice(foundVoice)
    }

    loadVoices()

    synth.addEventListener("voiceschanged", loadVoices)

    return () => {
      synth.removeEventListener("voiceschanged", loadVoices)
    }
  }, [synth])
  const handleSpeak = () => {
    if (!voice || synth.speaking) return

    const utterance = new SpeechSynthesisUtterance("Sid Castillo")
    utterance.voice = voice

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    synth.speak(utterance)
  }
  return (
    <div className="flex w-full justify-center gap-4 md:justify-normal">
      {/* Avatar  */}
      <div className="aspect-square min-w-20 bg-foreground md:min-w-35"></div>
      {/* Name and title  */}
      <div className="flex flex-col justify-center gap-0.5 md:gap-1.5">
        <div className="md:-w-fit flex w-full items-center gap-1 text-left md:gap-2">
          <p className="w-full text-2xl font-bold md:w-fit md:text-4xl">
            cyd castillo
          </p>
          <Volume2Icon
            onClick={handleSpeak}
            className={cn(
              "hidden h-3.75 w-3.75 cursor-pointer hover:fill-foreground md:block md:h-6 md:w-6",
              {
                "fill-foreground": isSpeaking,
              }
            )}
          />
        </div>
        <p className="text-md font-mono font-light text-(--semi-muted) md:text-2xl">
          software developer
        </p>
      </div>
    </div>
  )
}

export default Identity
