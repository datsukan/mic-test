import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const SectionBlock = ({ children }: Props) => {
  return <div className='rounded bg-white p-4 outline outline-1 outline-gray-200'>{children}</div>
}
