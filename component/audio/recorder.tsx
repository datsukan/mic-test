import { useEffect, useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'

export const Recorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
  })
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    setIsRecording(status === 'recording')
  }, [status])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3'>
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className='flex items-center gap-2 rounded px-3 py-2 text-sm outline outline-1 outline-gray-300 hover:bg-slate-100'
        >
          <div
            className={`h-4 w-4 rounded-full ${isRecording ? 'animate-pulse bg-red-600' : 'bg-gray-600'}`}
          />
          {isRecording ? '録音停止' : '録音開始'}
        </button>
      </div>
      <audio src={mediaBlobUrl} controls />
    </div>
  )
}
