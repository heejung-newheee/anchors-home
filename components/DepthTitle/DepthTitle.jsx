"use client"
import Image from 'next/image'
import Link from "next/link";

export default function DepthTitle() {
    // props list = blindOption, data

  return (
      <!-- h3~h6 까지 해당 뎁스 확인하여 순서대로 부여 -->
      <h3 className="depth-title {blindOption}">
          {/*data.string*/}
      </h3>
  )
}
