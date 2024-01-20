import React, { useState } from "react";
import styles from '../App.module.css'
import img_num_1 from '../img/kl.png'
import img_num_2 from '../img/opi.png'
import Scale from "../scale";
import Confetti from "react-confetti";
import { useSpring, animated } from 'react-spring';
const F_8=()=>{
    const [show,setshow]=useState(false)
    const [isRedScreenVisible, setRedScreenVisible] = useState(false);
    const { backgroundColor } = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
      const openRedScreen = () => {
        setRedScreenVisible(true);
      };
    const dogClick=()=>{
        setshow(true)
    }
    setTimeout(() => {
        setshow(false)
    }, 6000);
   
    setTimeout(() => {
        setRedScreenVisible(false);
    }, 2000);

return(
   
      
    <div className={styles.glav2}>
                      
   { isRedScreenVisible &&  
            <animated.div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        opacity:0.6
      }}
    >
</animated.div>}
         <div className={styles.bos_2_2}>
            <p>сколько штатов в Америке?</p>
        </div>

        <div className={styles.bos2}>
       <button onClick={openRedScreen} className={styles.btn_num_1}>49</button>
       <button onClick={dogClick} className={styles.btn_num_2}>50</button>
        {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
        </div>
       
    </div>
  
)
}
export default F_8;