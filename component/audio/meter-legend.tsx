type Props = {
  colorClass: string
  label: string
}

export const MeterLegend = ({ colorClass, label }: Props) => {
  return (
    <div className='flex items-center gap-1'>
      <div className={`h-3 w-3 rounded-full ${colorClass}`}></div>
      <span className='text-xs'>{label}</span>
    </div>
  )
}
