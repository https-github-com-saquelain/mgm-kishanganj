import { Suspense } from 'react'
import AdmissionsClient from './AdmissionsClient'

export default function AdmissionsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <AdmissionsClient />
    </Suspense>
  )
}