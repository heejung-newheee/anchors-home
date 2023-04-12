"use client"
import Image from 'next/image'
import Link from "next/link";

export default function ElementTitle( {data} ) {

  return (
      <strong className="element-title">
        {data}
      </strong>
  )
}
