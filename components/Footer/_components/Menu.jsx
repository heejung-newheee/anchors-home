'use client';

import Btn from '@/components/Btn/Btn';

const Menu = ({data}) => {
  const { menuList,  privacyPolicyUrl, privacyPolicyKo } = data;
   
  return (
    <nav className='footer_container_nav'>
      <ul className="gnb">
        {menuList.map((menuList, idx) => (
          <li key={idx}>
            <Btn type="a" url={menuList.url} alt={menuList.alt}>
              {menuList.name[0].words}
              {menuList.name[1] ? ' ' + menuList.name[1].words : ''}
            </Btn>
          </li>
        ))}
      </ul>

      <div className='sideLink'>
      <Btn className="Apply_btn" type="a" url="#none" target="_blank">채용정보</Btn>
      <Btn type="link" alt="privacy policy" url={privacyPolicyUrl}>{privacyPolicyKo}</Btn>
      </div>
    </nav>
  );
};

export default Menu;
 