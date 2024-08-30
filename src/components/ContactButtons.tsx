import React from 'react';
import style from '../styles/ContactButtons.module.css';
import { Url } from 'url';
import {ReactComponent as CV}  from '../cv.svg';
import {ReactComponent as LinkedIn}  from '../linkedin.svg';
import {ReactComponent as Github}  from '../github.svg';

function ContactButtons() {
  const onButtonClick = () => {
    const pdfUrl = "RachelCoxhead_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
    
      const onLinkButtonClick = (url: string) => {
          window.open(url, '_blank');
      };

  return (
    <div className={style.container}>
            <CV className={style.button} onClick={onButtonClick} />
            <LinkedIn className={style.button} onClick={() => onLinkButtonClick("https://www.linkedin.com/in/rachel-coxhead/")} />
            <Github className={style.button} onClick={() => onLinkButtonClick("https://github.com/Ithrendrial")} />
    </div>
  );
}

export default ContactButtons;
