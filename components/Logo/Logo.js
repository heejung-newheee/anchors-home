import Image from 'next/image'
import Link from "next/link";
// import Btn

export default function Logo() {
  return (
      <!-- header_footer.json 호출 -->
      <h1 className="logo">
        {/* Btn component */}
          <img src="@/components/Logo/Logo" alt="Anchors"/>
        {/* //Btn component */}
      </h1>
  )
}
