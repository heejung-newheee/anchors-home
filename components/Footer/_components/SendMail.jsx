import {useState} from 'react';

import TextScramble from '@/components/TextScramble/TextScramble';

const SendMail = ({data, state}) => {
  const { sendEmail } = data;

  const [isHovered, setIsHovered] = useState(false); // 마우스 오버 체크
  const [isMouseMove, setIsMouseMove] = useState({left: "0", top: "0"}); // 마우스 포인트 위치
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    setIsHovered(true);
    setIsMouseMove({left: e.clientX + "px", top: e.nativeEvent.layerY + "px"});
  };

  // 탑 버튼 작업

  return (
    <>
      <a href={`mailto:${sendEmail.href}`} title={sendEmail.title} className={"footer_sendMail_btn"} onMouseMove={(e)=> handleMouseMove(e)} onMouseLeave={handleMouseLeave}>
      <TextScramble className={"description"} texts={sendEmail.description} isHovered={isHovered} symbolsYN={false} />
      </a>

      {state.isVisible && <i className={isHovered ? "footer_cursor isHover" : "footer_cursor"} style={isMouseMove}>{sendEmail.title}</i>}
    </>
  );
};

export default SendMail;
 