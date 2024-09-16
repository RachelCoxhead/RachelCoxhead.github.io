import React from 'react';
import style from '../styles/Contact.module.css';

function About() {
  const lineNumbers = Array.from({ length: 50}, (_, index) => index + 1);
  return (
    <div className={style.page}>
      <div className={style.line_numbers}>{lineNumbers.map((number) => (
        <div key={number}>{number}</div>
      ))}</div>
      <div className={style.code}>
      <span className={style.banner}>
        // &nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;_______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________<br />
        // &nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;____&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;__|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;____&nbsp;&nbsp;|&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;'.<br />
        // &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|____)&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/\&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&#92;_|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&#92;_|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&#92;_|&nbsp;/&nbsp;&nbsp;&nbsp;.--.&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;\_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/&#92;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'.&nbsp;&nbsp;&#92; <br />
        // &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;`&nbsp;'&nbsp;&nbsp;&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;| <br />
        // &nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&#92;&nbsp;&nbsp;`.____.`&#92;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___/&nbsp;|&nbsp;&nbsp;_|&nbsp;&nbsp;|__/&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;`.____.`&#92;&nbsp;&#92;&nbsp;&nbsp;&nbsp;`--`&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;_/&nbsp;&nbsp;/'&nbsp;`&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___/&nbsp;|&nbsp;&nbsp;_/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___.'&nbsp;&nbsp;/ <br />
        // &nbsp;&nbsp;|_____|&nbsp;&nbsp;|____|&nbsp;|_____|&nbsp;&nbsp;|_____|&nbsp;&nbsp;`._______.`&nbsp;|_____|&nbsp;|_____|&nbsp;|__________|&nbsp;|_________|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`._______.`&nbsp;&nbsp;`.______.`&nbsp;&nbsp;|_____|&nbsp;|_____|&nbsp;|_____|&nbsp;|_____|&nbsp;|__________|&nbsp;|_____|&nbsp;&nbsp;|_____|&nbsp;|__________.' <br />
        // <br /><br /><br />
        </span>
        <span style={{ color: '#DA6EB5' }}>const</span> <span style={{ color: '#82A3F1' }}>employee</span><span style={{ color: '#89DDF1' }}>: Developer</span><span style={{ color: '#DA6EB5' }}> = </span><span style={{ color: '#FFB913' }}>&#123;</span>
        <div className={style.code_section}>
          name: <span style={{ color: '#C2E36B' }}>'Rachel Coxhead'</span>,<br />
          education: <span style={{ color: '#DA6EB5' }}>[</span> <br />
          <div className={style.code_section}>
            <span style={{color: '#1797D5'}}>&#123;</span><br />
            <div className={style.code_section}>
              degree: <span style={{ color: '#C2E36B' }}>'BCIS'</span>,<br />
              major: <span style={{ color: '#C2E36B' }}>'Software Development'</span>,<br />
              dateCompleted: <span style={{ color: '#C2E36B' }}>'2023-12-12'</span><br />
            </div>
            <span style={{color: '#1797D5'}}>&#125;</span>,<br />
            <span style={{color: '#1797D5'}}>&#123;</span><br />
            <div className={style.code_section}>
              degree: <span style={{ color: '#C2E36B' }}>'BSc'</span>,<br />
              major: <span style={{ color: '#C2E36B' }}>'Mathematics'</span>,<br />
              dateCompleted: <span style={{ color: '#C2E36B' }}>'2023-05-01' </span><br />
            </div>
            <span style={{color: '#1797D5'}}>&#125;</span>,<br />
          </div>
          <span style={{ color: '#DA6EB5' }}>]</span>, <br />
          location: <span style={{ color: '#C2E36B' }}>'Auckland, New Zealand'</span>, <br />
          interests: <span style={{ color: '#DA6EB5' }}>[</span><span style={{ color: '#C2E36B' }}>"Latin Dancing</span>, <span style={{ color: '#C2E36B' }}>Motorbike Riding</span>, <span style={{ color: '#C2E36B' }}>Tramping</span><span style={{ color: '#DA6EB5' }}>]</span><br />
        </div>
        <span style={{ color: '#FFB913' }}>&#125;</span>
        
        <br /><br />
        <span style={{ color: '#DA6EB5' }}>function</span> &nbsp;<span style={{ color: '#82A3F1' }}>about</span><span style={{ color: '#FFB913' }}>(</span><span style={{ color: '#82A3F1' }}>me</span><span style={{ color: '#89DDF1' }}>: Developer</span><span style={{ color: '#FFB913' }}>)</span><span style={{ color: '#89DDF1' }}>:</span> &nbsp;void <span style={{ color: '#FFB913' }}>&#123;</span> <br />
        <div className={style.code_section}>
            console<span style={{ color: '#DA6EB5' }}>.</span><span style={{ color: '#82A3F1' }}>log</span><span style={{ color: '#DA6EB5' }}>(</span><span style={{ color: '#C2E36B' }}>` <br />
              <div className={style.code_section}>
                Hi there, I'm <span style={{color: '#E0506C'}}>$&#123;</span><span style={{color: '#FFFFFF'}}>me</span><span style={{ color: '#DA6EB5' }}>.</span><span style={{ color: '#89DDF1' }}>name</span><span style={{color: '#E0506C'}}>&#125;</span>, a recent university graduate kicking off my career in tech. I'm based in <span style={{color: '#E0506C'}}>$&#123;</span><span style={{color: '#FFFFFF'}}>me</span><span style={{ color: '#DA6EB5' }}>.</span><span style={{ color: '#89DDF1' }}>location</span><span style={{color: '#E0506C'}}>&#125;</span>, where I completed my studies.<br /><br />
                I'm a people person, so I'm happiest when working on products which I know are focused on real problems that impact real people in the end. Technically, this means I especially love working on the front-end. My favourite projects have involved tinkering in React to develop the perfect interface between the product and the user. <br /><br />
                Currently I am looking for opportunities as a junior software developer, so if I have piqued your interest or you just want to chat, don't hesitate to reach out!
              </div>
            `</span><span style={{ color: '#DA6EB5' }}>)</span><br />
        </div>
        <span style={{ color: '#FFB913' }}>&#125;</span>
        </div>
    </div>
  );
}

export default About;


