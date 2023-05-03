'use client';
import Btn from '@/components/Btn/Btn';

function TabButton({ dataList = [], onClick, className }) {
  const BUTTON_ARR = Array.isArray(dataList) ? dataList : [dataList];

  return (
    <ul className="tab_btn_wrap">
      {BUTTON_ARR.map((button, idx) => (
        <li className="tab-button" data-tab-index={idx} key={idx}>
          <Btn type="button" onClick={onClick} className={className}>
            {button}
          </Btn>
        </li>
      ))}
    </ul>
  );
}

export default TabButton;
