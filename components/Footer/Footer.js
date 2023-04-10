import Image from 'next/image'
import Link from "next/link";
// import Btn
// import Lottie

export default function Footer() {
  return (
      <!-- header_footer.json 호출 -->
      <Footer>
          <div className="lottie-wrap">
              {/* Lottie component */} <!-- Lottie component (Ready to talk about your works?) -->
              {/* Lottie component */} <!-- Lottie component (손가락모션) -->
          </div>
          <div className="btn-wrap">
              {/* Btn component */} <!--href="{header_footer.sendEmail}" title="send mail"-->
                  <span>send mail</span>
              {/* // Btn component */}
          </div>
          <div className="copyright-wrap">
              <span className="copyright">{/*header_footer.copyright*/}</span>
          </div>
      </Footer>
  )
}
