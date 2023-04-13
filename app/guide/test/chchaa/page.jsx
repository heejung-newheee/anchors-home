"use client"
import {initHelper} from "@/helper/init-helper";
const {jquery , variables} = initHelper();
import Btn from "@/components/Btn/Btn";
import Logo from "@/components/Logo/Logo";

export default function chchaa() {
  return (
    <>

      1. &lt;Btn&gt;<br/>
      <Btn design="btnSecondaryUp">테스트 버튼</Btn>
      <br/><br/>

      2. &lt;Logo&gt;<br/>
      <Logo />
      <br/><br/>


    </>
  )
}
