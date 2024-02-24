import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  htmlFor: string
}

export const Label = ({ children, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className='font-black'>
      {children}
    </label>
  )
}
