"use client"
import {initHelper} from "@/helper/init-helper";
import ElementTitle from '@/components/ElementTitle/ElementTitle'
import Visual from '@/components/Visual/Visual'
const {jquery , variables} = initHelper();

export default function jueun() {
  return (
      <>
        {/* ElementTitle component test */}
        <ElementTitle data="Element Title"/>

        {/* Visual component test */}
        <Visual imgUrl="https://picsum.photos/1920/800">
          <div>
            <p>Title</p>
            <span>Description</span>
          </div>
        </Visual>

      </>
  )
}
