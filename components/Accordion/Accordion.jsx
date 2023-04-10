"use client"
import Image from 'next/image'
import Link from "next/link";
// import AccordionTitle from "@/components/AccordionTitle/AccordionTitle";
// import AccordionContents from "@/components/AccordionContents/AccordionContents";

export default function Accordion() {
  return (
      <dl className="accordion">
        {/*작업자 자유 영역*/}
          {/*AccordionTitle*/}{/*activeOtion="Y"*/}
            아코디언 타이틀
          {/*// AccordionTitle*/}
          {/*AccordionContents*/}
           아코디언 컨텐츠
          {/*// AccordionContents*/}
        {/*작업자 자유 영역*/}
      </dl>
  )
}
