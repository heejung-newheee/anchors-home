import Image from 'next/image'
import Link from "next/link";
// import ElementTitle from "@/components/ElementTitle/ElementTitle";
// import DepthTitle from "@/components/DepthTitle/DepthTitle";
// import Disclaimer from "@/components/Disclaimer/Disclaimer";

export default function BaseArticle() {
    // props list = img, imgAlt, elementTitle, description, disclaimer

  return (
      <article className="base-article">

          <img /> <!--src="{img.json} || {img.string}" alt="{imgAlt.json} || {imgAlt.string}"-->z

          {/*ElementTitle*/} <!--data="{elementTitle.json} || {elementTitle.string}"-->

          {/*Description*/} <!--data="{description.json} || {description.string}"-->

          {/*Disclaimer*/} <!--data="{disclaimer.json} || {disclaimer.string}"-->

      </article>
  )
}
