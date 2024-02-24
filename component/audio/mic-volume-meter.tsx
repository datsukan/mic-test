import { useState, useEffect, useRef } from 'react'
import { MeterLegend } from '@/component/audio/meter-legend'

// 各音量範囲のカラークラス
const smallVolumeColorClass = 'bg-blue-600'
const appropriateVolumeColorClass = 'bg-green-600'
const louderVolumeColorClass = 'bg-orange-400'
const tooLoudVolumeColorClass = 'bg-red-500'

// 各音量範囲の上限・下限
const smallVolumeUpperLimit = 20
const louderLowerLimit = 60
const tooLoudVolumeLowerLimit = 80

// メーターの上限
const meterUpperLimit = 100

export const MicVolumeMeter = () => {
  const audioContext = useRef<AudioContext>()
  const reqIdRef = useRef(0)

  const [volume, setVolume] = useState(0)
  const [maxVolume, setMaxVolume] = useState(0)
  const [meterWidth, setMeterWidth] = useState('')
  const [meterColorClass, setMeterColorClass] = useState('')

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const context = new AudioContext()
        const source = context.createMediaStreamSource(stream)
        const analyserNode = context.createAnalyser()
        analyserNode.fftSize = 256
        source.connect(analyserNode)

        audioContext.current = context

        const dataArray = new Uint8Array(analyserNode.frequencyBinCount)
        let smoothedVolume = 0
        const smoothingFactor = 0.8

        const updateVolume = () => {
          analyserNode.getByteFrequencyData(dataArray)
          const average = dataArray.reduce((acc, cur) => acc + cur, 0) / dataArray.length

          smoothedVolume += (average - smoothedVolume) * smoothingFactor
          setVolume(smoothedVolume)
          // setVolume(average)
          reqIdRef.current = requestAnimationFrame(updateVolume)
        }

        updateVolume()
      })
      .catch((error) => {
        console.error('マイクへのアクセスに失敗しました:', error)
        alert('マイクを認識できませんでした')
      })

    return () => {
      cancelAnimationFrame(reqIdRef.current)
      if (audioContext.current) {
        audioContext.current.close()
      }
    }
  }, [audioContext])

  useEffect(() => {
    if (volume > maxVolume) {
      setMaxVolume(volume)
    }
  }, [volume, maxVolume])

  useEffect(() => {
    const meterWidthPercent = () => {
      return Math.floor((volume / meterUpperLimit) * meterUpperLimit)
    }
    setMeterWidth(`${meterWidthPercent()}%`)

    const meterColor = () => {
      const percent = meterWidthPercent()

      if (percent < smallVolumeUpperLimit) {
        return smallVolumeColorClass
      }

      if (percent >= tooLoudVolumeLowerLimit) {
        return tooLoudVolumeColorClass
      }

      if (percent >= louderLowerLimit) {
        return louderVolumeColorClass
      }

      return appropriateVolumeColorClass
    }
    setMeterColorClass(meterColor())
  }, [volume])

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-3'>
        <MeterLegend colorClass={smallVolumeColorClass} label='小さい' />
        <MeterLegend colorClass={appropriateVolumeColorClass} label='適正' />
        <MeterLegend colorClass={louderVolumeColorClass} label='やや大きい' />
        <MeterLegend colorClass={tooLoudVolumeColorClass} label='大きすぎる' />
      </div>
      <div className='overflow-hidden rounded-full bg-gray-100 outline outline-1 outline-gray-300'>
        <div
          className={`h-3 ${meterColorClass}`}
          style={{ width: meterWidth, transition: 'width: .1s' }}
        ></div>
      </div>
      <div>
        <span className='mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs'>現在の音量</span>
        {Math.floor(volume)}
      </div>
      <div>
        <span className='mr-2 rounded-full bg-red-200 px-2 py-1 text-xs'>最大の音量</span>
        {Math.floor(maxVolume)}
      </div>
    </div>
  )
}
