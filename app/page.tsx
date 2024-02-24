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
            <Label htmlFor='volume'>音量</Label>
            <div className='pt-3'>
              <MicVolumeMeter />
            </div>
          </SectionBlock>
          <SectionBlock>
            <Label htmlFor='volume'>音声認識</Label>
            <div className='pt-3'>
              <VoiceText />
            </div>
          </SectionBlock>
          <SectionBlock>
            <Label htmlFor='volume'>録音</Label>
            <div className='pt-3'>
              <Recorder />
            </div>
          </SectionBlock>

          <SectionBlock>
            <Label htmlFor='volume'>環境情報</Label>
            <ul className='mt-3 list-inside list-disc space-y-2 pl-2 text-sm'>
              <li>
                すべての機能が利用できる環境
                <ul className='mt-2 list-inside list-disc space-y-2 pl-4 text-sm'>
                  <li>Google Chrome (Windows, macOS)</li>
                </ul>
              </li>
              <li>
                音声認識以外の機能が利用できる環境
                <ul className='mt-2 list-inside list-disc space-y-2 pl-4 text-sm'>
                  <li>Google Chrome (Android)</li>
                  <li>WebView (Android)</li>
                </ul>
              </li>
              <li>
                録音以外の機能が利用できる環境
                <ul className='mt-2 list-inside list-disc space-y-2 pl-4 text-sm'>
                  <li>Safari (macOS, iOS)</li>
                  <li>Google Chrome (iOS)</li>
                </ul>
              </li>
              <li>
                音量の機能のみが利用できる環境
                <ul className='mt-2 list-inside list-disc space-y-2 pl-4 text-sm'>
                  <li>WebView (iOS)</li>
                </ul>
              </li>
            </ul>

            <p className='mt-3 text-sm text-gray-500'>
              ※出来るだけ多くの環境で機能するように可能な範囲で改善していく予定です
            </p>

            <hr className='my-4' />

            <Label htmlFor='volume'>ソースコード</Label>
            <p className='mt-3'>
              <a
                href='https://github.com/datsukan/mic-test'
                target='_black'
                className='text-sm text-blue-600 hover:underline'
              >
                GitHub - datsukan/mic-test
              </a>
            </p>
          </SectionBlock>
        </div>

        <div className='mt-auto flex flex-col items-center border-t border-gray-200 py-6'>
          <div>© 2024 datsukan</div>
        </div>
      </div>
    </main>
  )
}
