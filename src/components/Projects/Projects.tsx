import React from 'react'
import Link from 'next/link'

function Projects() {
  return (
    <Link
      href="/projectId"
      className="text-white hover:text-gray-300 text-5xl font-semibold"
    >
      Projects
    </Link>
  )
}

export default Projects
