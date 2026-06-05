import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="top-bar">
      <span>Affiliated to Mata Gujri University, Kishanganj &nbsp;|&nbsp; Recognized by NMC &amp; Govt. of India</span>
      <div className="top-bar-links">
        <Link href="/class-notices">Notices</Link>
        <Link href="/results">Results</Link>
        <a href="https://www.mgmmckishanganj.in/wp-content/uploads/2023/12/Pro-forma-18-1.pdf" target="_blank" rel="noopener noreferrer">Info NMC</a>
        <Link href="/cmes-events">CMEs &amp; Events</Link>
        <a href="#">Alumni</a>
      </div>
    </div>
  )
}