"use client"
import Image from 'next/image'
import Link from "next/link";

export default function Video({videoUrl}) {
  return (
    <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" controls>
      {videoUrl}
    </video>
  )
}
