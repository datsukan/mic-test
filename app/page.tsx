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
    <main className='container mx-auto px-3'>
      <div className='flex min-h-screen flex-col justify-between gap-10'>
        <div className='flex flex-col gap-8'>
          <div className='flex items-center gap-3 pt-6'>
            <Image src='/icon.png' alt='logo' width={32} height={32} />
            <h1 className='mb-0.5 text-3xl font-bold'>Mic Test</h1>
          </div>

          <div className='text-sm'>
            <p>本サイトはマイク音声の入力有無・音量・音質を確認するためのテスト環境です。</p>
            <p>機能を実行するためにマイクの利用許可が求められますので許可の上ご利用ください。</p>
            <p>
              本サイト上で入力・認識・録音されたいかなる情報もサーバーには送信されず、すべてクライアントサイドの端末上で処理されるのでご安心ください。
            </p>
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
        </div>

        <div className='mt-auto flex flex-col items-center border-t border-gray-200 py-6'>
          <div>© 2024 datsukan</div>
        </div>
      </div>
    </main>
  )
}
