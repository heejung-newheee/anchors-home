import Image from 'next/image'
import Link from "next/link";
// import TabButton from "@/components/TabButton/TabButton";
// import TabContents from "@/components/TabContents/TabContents";

export default function Tab() {
    // props list = type

  return (
      <article className="tab">
          <ul className="tab-btn-wrap">
              <!-- tabButton이 전달 될 경우 해당 위치에 나열됨 -->
              {/* tabButton */}
              <!-- // tabButton이 전달 될 경우 해당 위치에 나열됨 -->
          </ul>

          <section className="tab-content-wrap">
              <!-- tabContents이 전달 될 경우 해당 위치에 나열됨 -->
              {/* tabContents */}
              <!-- // tabContents이 전달 될 경우 해당 위치에 나열됨 -->
          </section>
      </article>
  )
}
