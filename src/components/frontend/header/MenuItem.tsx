import Link from 'next/link'
import React from 'react'

const MenuItem = ({item}: {item: {title: string, path: string}}) => {
  return (
    <Link href={item.path}>
        {item.title}
    </Link>
  )
}

export default MenuItem
