import { useState, useEffect } from 'react'

export const VoiceText = () => {
  const [transcript, setTranscript] = useState<string>('')
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const recognition = new webkitSpeechRecognition()
      recognition.lang = 'ja-JP'
      recognition.continuous = true
      recognition.interimResults = true
      recognition.start()
      setRecognition(recognition)
    }
  }, [])

  useEffect(() => {
    if (!recognition) return
    recognition.onresult = (event) => {
      const results = event.results
      for (let i = event.resultIndex; i < results.length; i++) {
        if (results[i].isFinal) {
          setTranscript('')
        } else {
          setTranscript(results[i][0].transcript)
        }
      }
    }
  }, [recognition])

  return <div className=' min-h-10 border-l-2 p-2'>{transcript}</div>
}
