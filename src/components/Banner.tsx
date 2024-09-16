import React, { useState, useEffect } from 'react';
import style from '../styles/Contact.module.css';

function Banner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  // Effect to track window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 3000);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.banner}>
    {isMobile ? (
        <>
            // &nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;_______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
            // &nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;____&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;__|<br />
            // &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|____)&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/\&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&#92;_|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&#92;_|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|<br />
            // &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_<br />
            // &nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&#92;&nbsp;&nbsp;`.____.`&#92;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___/&nbsp;|&nbsp;&nbsp;_|&nbsp;&nbsp;|__/&nbsp;|<br />
            // &nbsp;&nbsp;|_____|&nbsp;&nbsp;|____|&nbsp;|_____|&nbsp;&nbsp;|_____|&nbsp;&nbsp;`._______.`&nbsp;|_____|&nbsp;|_____|&nbsp;|__________|&nbsp;|_________|<br />
            // <br />
            // <br />
            // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________<br />
            // &nbsp;&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;____&nbsp;&nbsp;|&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;'.<br />
            // &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&#92;_|&nbsp;/&nbsp;&nbsp;&nbsp;.--.&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;\_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/&#92;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'.&nbsp;&nbsp;&#92; <br />
            // &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;`&nbsp;'&nbsp;&nbsp;&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;| <br />
            // &nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;`.____.`&#92;&nbsp;&#92;&nbsp;&nbsp;&nbsp;`--`&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;_/&nbsp;&nbsp;/'&nbsp;`&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___/&nbsp;|&nbsp;&nbsp;_/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___.'&nbsp;&nbsp;/<br />
            // &nbsp;&nbsp;&nbsp;&nbsp;`._______.`&nbsp;&nbsp;`.______.`&nbsp;&nbsp;|_____|&nbsp;|_____|&nbsp;|_____|&nbsp;|_____|&nbsp;|__________|&nbsp;|_____|&nbsp;&nbsp;|_____|&nbsp;|__________.' <br />
            // <br /><br />
        </>
    ) : (
        <>
            // &nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;_______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;__________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________<br />
            // &nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;____&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;__|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.`&nbsp;&nbsp;____&nbsp;&nbsp;|&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;_|&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;'.<br />
            // &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|____)&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/\&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&#92;_|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&#92;_|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;.`&nbsp;&nbsp;&nbsp;&nbsp;&#92;_|&nbsp;/&nbsp;&nbsp;&nbsp;.--.&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;\_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;/&#92;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'.&nbsp;&nbsp;&#92; <br />
            // &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;`&nbsp;'&nbsp;&nbsp;&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;___|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;____&nbsp;&nbsp;&#92;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;| <br />
            // &nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&#92;&nbsp;&nbsp;`.____.`&#92;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___/&nbsp;|&nbsp;&nbsp;_|&nbsp;&nbsp;|__/&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;`.____.`&#92;&nbsp;&#92;&nbsp;&nbsp;&nbsp;`--`&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;_/&nbsp;&nbsp;/'&nbsp;`&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___/&nbsp;|&nbsp;&nbsp;_/&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&#92;&nbsp;&nbsp;&#92;_&nbsp;&nbsp;&nbsp;_|&nbsp;&nbsp;|___.'&nbsp;&nbsp;/ <br />
            // &nbsp;&nbsp;|_____|&nbsp;&nbsp;|____|&nbsp;|_____|&nbsp;&nbsp;|_____|&nbsp;&nbsp;`._______.`&nbsp;|_____|&nbsp;|_____|&nbsp;|__________|&nbsp;|_________|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`._______.`&nbsp;&nbsp;`.______.`&nbsp;&nbsp;|_____|&nbsp;|_____|&nbsp;|_____|&nbsp;|_____|&nbsp;|__________|&nbsp;|_____|&nbsp;&nbsp;|_____|&nbsp;|__________.' <br />
            // <br /><br /><br />
        </>
    )}
    </div>
  );
}

export default Banner;
