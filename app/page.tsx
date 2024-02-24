'use client'

import { Label } from '@/component/label'
import { MicVolumeMeter } from '@/component/audio/mic-volume-meter'

export default function Home() {
  return (
    <main className='container mx-auto flex flex-col gap-3'>
      <div className='py-3'>
        <h1 className='text-3xl font-bold'>Mic Test</h1>
      </div>

      <div className='flex flex-col gap-6 rounded p-4 outline outline-1 outline-gray-200'>
        <div>
          <Label htmlFor='volume'>ボリューム</Label>
          <div className='py-2'>
            <MicVolumeMeter />
          </div>
        </div>

        <hr />

        <div>
          <Label htmlFor='volume'>喋った内容</Label>
          <div className='py-2'>
            <p>ほげほげ ほげほげほげほげ</p>
          </div>
        </div>
      </div>
    </main>
  )
}
