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
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm outline outline-1 hover:bg-slate-100 ${isRecording ? 'text-red-600 outline-red-600' : 'outline-gray-300'}`}
        >
          <div className='relative'>
            {isRecording && (
              <div className='absolute h-full w-full animate-ping rounded-full bg-red-600 opacity-75' />
            )}
            <div className='relative h-4 w-4 rounded-full bg-red-600' />
            {isRecording && (
              <>
                <div className='absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white' />
                <div className='absolute left-1 top-1 h-2 w-2 rounded-full bg-red-600' />
              </>
            )}
          </div>
          {isRecording ? '録音停止' : '録音開始'}
        </button>
      </div>
      <audio className='w-full' src={mediaBlobUrl} controls />
    </div>
  )
}
