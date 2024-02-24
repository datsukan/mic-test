'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { SectionBlock } from '@/component/section-block'
import { Label } from '@/component/label'
import { MicVolumeMeter } from '@/component/audio/mic-volume-meter'
import { VoiceText } from '@/component/audio/voice-text'
const Recorder = dynamic(() => import('@/component/audio/recorder').then((m) => m.Recorder), {
  ssr: false,
})

export default function Home() {
  return (
    <main className='container mx-auto flex flex-col gap-8 px-3'>
      <div className='flex items-center gap-3 pt-6'>
        <Image src='/icon.png' alt='logo' width={32} height={32} />
        <h1 className='mb-0.5 text-3xl font-bold'>Mic Test</h1>
      </div>

      <SectionBlock>
        <div>
          <Label htmlFor='volume'>音量</Label>
          <div className='py-2'>
            <MicVolumeMeter />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div>
          <Label htmlFor='volume'>音声認識</Label>
          <div className='py-2'>
            <VoiceText />
          </div>
        </div>
      </SectionBlock>
      <SectionBlock>
        <div>
          <Label htmlFor='volume'>録音</Label>
          <div className='py-2'>
            <Recorder />
          </div>
        </div>
      </SectionBlock>
    </main>
  )
}
