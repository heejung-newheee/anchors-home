"use client"
import Image from 'next/image'
import Link from "next/link";

export default function Device() {
    // props list = imgUrl, alt

  return (
      <article className="device">
          <img src="@/components/Device/Device" alt="{alt[0]}"/> <!--{imgUrl[0]}-->
          <img src="@/components/Device/Device" alt="{alt[1]}"/> <!--{imgUrl[1]}-->
          <img src="@/components/Device/Device" alt="{alt[2]}"/> <!--{imgUrl[2]}-->
      </article>
  )
}
