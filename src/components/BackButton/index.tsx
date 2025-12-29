'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const BackButton: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      onClick={() => router.back()}
    >
      <ArrowLeft className="w-4 h-4 mr-1" />
      Back
    </Button>
  )
}
