'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const Slug = () => {
  const { slug } = useParams<{ slug: string }>()
  return <div>{decodeURIComponent(slug)}</div>
}

export default Slug