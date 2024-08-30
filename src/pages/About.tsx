import React from 'react';
import style from '../styles/Contact.module.css';

function About() {
  return (
    <div className={style.page}>
      const bio: Developer = &#123;
      <div className={style.code_section}>
        name: 'Rachel Coxhead', <br />
        education: [ <br />
        <div className={style.code_section}>
          &#123; <br />
          <div className={style.code_section}>
            degree: 'BCIS', <br />
            major: 'Software Development', <br />
            dateCompleted: '2023-12-12' <br />
          </div>
          &#125;, <br />
          &#123; <br />
          <div className={style.code_section}>
            degree: 'BSc', <br />
            major: 'Mathematics', <br />
            dateCompleted: '2023-05-01' <br />
          </div>
          &#125;, <br />
        </div>
        ], <br />
        location: 'Auckland, New Zealand', <br />
        interests: ["Latin dancing", "Motorbike riding", "Tramping"] <br />
      </div>
      &#125;
      
      <br /><br />
      function &nbsp;about(me: Developer): &nbsp;void &#123; <br />
      <div className={style.code_section}>
          console.log(` <br />
            <div className={style.code_section}>
              Hi there, I'm $&#123;me.name&#125;, a recent university graduate kicking off my career in tech. I'm based in $&#123;me.location&#125;, where I completed my studies.<br /><br />
              I'm a people person, so I'm happiest when working on products which I know are focused on real problems that impact real people in the end. Technically, this means I especially love working on the front-end. My favourite projects have involved tinkering in React to develop the perfect interface between the product and the user. <br /><br />
              Currently I am looking for opportunities as a junior software developer, so if I have piqued your interest or you just want to chat, don't hesitate to reach out!
            </div>
          `);
      </div>
    </div>
  );
}

export default About;