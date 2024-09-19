"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const MenuItem = ({item}: {item: {title: string, path: string}}) => {
  const pathname = usePathname();
  console.log(pathname)
  // const [selected, setSelected] = useState("");
  return (
    <Link href={item.path} className={`${pathname === item.path && "text-secondary"}`}>
        {item.title}
    </Link>
  )
}

export default MenuItem
