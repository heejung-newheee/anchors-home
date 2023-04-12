"use client"
import Image from 'next/image'
import Link from "next/link";
import './Visual.scss'

export default function Visual( {imgUrl, dimm, children} ) {

  const dimmClass = dimm === "Y" ? " dimmed" : "";

  return (
      <article className={"visual" + dimmClass} style={{backgroundImage:`url(${imgUrl})`}}>
          {children}
      </article>
  )

}
{/* dimm 초기값 설정 */}
Visual.defaultProps = {
  dimm: "N"
}
