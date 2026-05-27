import { Suspense } from 'react'
import ResultsClient from './ResultsClient'

export default function ResultsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <ResultsClient />
    </Suspense>
  )
}