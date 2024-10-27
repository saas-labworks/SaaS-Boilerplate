import { ReactNode } from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

type Props = {
  children: ReactNode
  content: string;
  asChild?: boolean;
}

export function SimpleTooltip({ children, content, asChild = true }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild={asChild}>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <span>{content}</span>
      </TooltipContent>
    </Tooltip>
  )
}
