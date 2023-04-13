"use client"
import Image from 'next/image'
import Link from "next/link";
import './Btn.scss';

import {initHelper} from "@/helper/init-helper";
const {jquery , variables} = initHelper();

export default function Btn( {type , url, alt, design, children} ) {
  return (
    <>
      {type === "" && <button type="button" className={design}><span>{children}</span></button> }

      {type === "button" && <button type="button" className={design}><span>{children}</span></button> }

      {type === "submit" && <button type="submit" className={design}><span>{children}</span></button> }

      {type === "a" && <a href={url} title={alt} className={design}><span>{children}</span></a> }

      {type === "link" && <Link href={url} title={alt} className={design}><span>{children}</span></Link>}
    </>
  )
}
