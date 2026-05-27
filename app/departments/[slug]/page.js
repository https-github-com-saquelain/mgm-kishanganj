import { notFound } from 'next/navigation'
import DepartmentClient from './DepartmentClient'
import { getDepartment, departments } from '../../data/departments'

// Tell Next.js all valid slugs at build time
export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }))
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params
  const dept = getDepartment(slug)
  if (!dept) notFound()
  return <DepartmentClient dept={dept} />
}