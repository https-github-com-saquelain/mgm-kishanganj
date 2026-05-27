import { Suspense } from 'react'
import ClassNoticesClient from './ClassNoticesClient'

export default function ClassNoticesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <ClassNoticesClient />
    </Suspense>
  )
}