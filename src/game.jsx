import n1 from './img/num_1.png'
import n2 from './img/num_2.png'
import n3 from './img/num3.png'
import n4 from './img/num_4.png'
import n5 from './img/num_5.png'
import n6 from './img/num_6.png'
import n7 from './img/num_7.png'
import n8 from './img/num_8.png'
import n9 from './img/num_9.png'
import React from 'react'
import { ThemeContext } from './themes/Themes'
// import styles from '../src/App.module.css'
import img_num_1 from '../src/img/kl.png'
import img_num_2 from '../src/img/opi.png'
// import Scale from "../scale";
import Confetti from "react-confetti";
import { useSpring, animated } from 'react-spring';


import { useToggle } from './useToggle'
import { useState } from 'react'
// import F_1 from './questions/first_questions'
import styles from'./App.module.css';
// import Scale from './scale'

const Game=()=>{


  const { theme, toggle, dark } = React.useContext(ThemeContext)

const[visible,setvisible]=useState(true)
const[visible2,setvisible2]=useState(true)
const[visible3,setvisible3]=useState(true)
const[visible4,setvisible4]=useState(true)
const[visible5,setvisible5]=useState(true)
const[visible6,setvisible6]=useState(true)
const[visible7,setvisible7]=useState(true)
const[visible8,setvisible8]=useState(true)
const[visible9,setvisible9]=useState(true)



const [show,setshow]=useState(false)
const [isRedScreenVisible, setRedScreenVisible] = useState(false);
const [slider,setslider]=useState(0)
const[clicked,setClicked]=useState(false)
    const handleslider=(e)=>{
setslider(e.target.value)}
const { backgroundColor } = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const openRedScreen = () => {
    if(!clicked){
      setClicked(true)
    }
      setRedScreenVisible(true);
    
   
  };

const dogClick=()=>{

    setshow(true)
    setTimeout(() => {
      setshow(false)
  }, 5000);
    setslider(slider+10)
}

setTimeout(() => {
    setRedScreenVisible(false);
}, 2000);


const Clicker=()=>{
  

  setvisible(!visible)

   
     
     }
const Clicker2=()=>{

setvisible2(!visible2)
        
}     
const Clicker3=()=>{

  setvisible3(!visible3)
    
}
const Clicker4=()=>{

  setvisible4(!visible4)
    
}
const Clicker5=()=>{

  setvisible5(!visible5)
    
}
const Clicker6=()=>{

  setvisible6(!visible6)
    
}
const Clicker7=()=>{

  setvisible7(!visible7)
    
}
const Clicker8=()=>{

  setvisible8(!visible8)
    
}
const Clicker9=()=>{

  setvisible9(!visible9)
    
    }

return (
 <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className={styles.App}>
      <div>
        
            <label htmlFor="scaleInput">Scale:</label>
            <input
            type="range"
            min="0"
            max="90"
            value={slider}
            onChange={handleslider}
            step={10}
            />
            <p>selected value:{slider}</p>

        </div>
 <div className={styles.boxes}>
    <div className={styles.big_box_1}>
       <div className={styles.b1}>
        
       <img hidden={!visible} onClick={Clicker} className={styles.img} src={n1} alt="" />
      
       {/*F1  */}
        <div className={styles.ff} hidden={visible} >
           
    <div  style={{color: theme.color}} className={styles.glav}>
      
      { isRedScreenVisible &&  
               <animated.div
         style={{
           width: '100%',
           height: '100vh',
           backgroundColor: 'red',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           position: 'fixed',
           top: 0,
           left: 0,
           zIndex: 1,
           opacity:0.5
         }}
       >
        <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
   </animated.div>}
           <div   className={styles.bos}>
           <img onClick={dogClick} aria-disabled={clicked} className={styles.dog}src={img_num_1} alt="" />
           <img  onClick={openRedScreen} disabled={clicked} className={styles.cat}src={img_num_2} alt="" />
           {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
            
           </div>
           <div style={{color: theme.color}} className={styles.bos_2}>
               <p style={{color: theme.color}}>Kто из них собака</p>
           </div>
       </div>
     
        </div>
      {
      //    visible &&(
      //  <img  hidden={visible} className={styles.img_2}src={n2} alt="" />
      //    )
      }
       </div>
       {/* f1 */}
       <div className={styles.b2}>
         <img hidden={!visible2} onClick={Clicker2} className={styles.img} src={n2} alt="" />
         <div className={styles.ff2} hidden={visible2}>
           {/* F2 */}
    <div className={styles.glav2_}>
            
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
                 opacity:0.5
               }}
             >
                   <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
         </animated.div>}
                  <div  className={styles.bos_2_2_}>
                     <p style={{color: theme.color}}> Что  такое замыкание?</p>
                 </div>
         
                 <div className={styles.bos2_2_2}>
                <button onClick={openRedScreen} className={styles.btn_num_1}>Это функция которая возвращает массив</button>
                <button onClick={dogClick}  className={styles.btn_num_2_2}>функция внутри функции которая помнит свое лексическое окружения</button>
                 {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
                 </div>
                
             </div>
           {/* f2 */}
         </div>
       </div>
       <div className={styles.b3}>
         <img hidden={!visible3} onClick={Clicker3} className={styles.img} src={n3} alt="" />
         <div className={styles.ff2} hidden={visible3}>
          {/* F3 */}
            
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
                  opacity:0.5
                }}
                
              >
                     <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
          </animated.div>}
                   <div className={styles.bos_2_2}>
                      <p style={{color: theme.color}}>сколько зубов у коня Шынгыс хана?</p>
                  </div>
          
                  <div className={styles.bos2}>
                  <button onClick={dogClick} className={styles.btn_num_2}>13</button>
                 <button onClick={openRedScreen} className={styles.btn_num_1}>40</button>
                
                  {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
                  </div>
                 
              </div>
          {/* f3 */}
         </div>
       </div>
       </div>
    <div className={styles.big_box_1}>
       <div className={styles.b4}>
         <img onClick={Clicker4} hidden={!visible4} className={styles.img} src={n4} alt="" />
       
       <div className={styles.ff2} hidden={visible4}>
        {/* F4 */}
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
        opacity:0.5
      }}
    >
           <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
</animated.div>}
         <div className={styles.bos_2_2}>
            <p style={{color: theme.color}} > в коком году была первая мировая?</p>
        </div>

        <div className={styles.bos2}>
        <button onClick={dogClick} className={styles.btn_num_2}>1914-1918</button>
       <button onClick={openRedScreen} className={styles.btn_num_1}>1912-1923</button>
      
        {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
        </div>
       
    </div>
  
          {/* f4 */}
         </div>
         </div>
       <div className={styles.b5}>
         <img onClick={Clicker5} hidden={!visible5} className={styles.img} src={n5} alt="" />
       
       <div className={styles.ff2} hidden={visible5}>
        {/* F5 */}
             
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
        opacity:0.5
      }}
    >
           <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
</animated.div>}
         <div className={styles.bos_2_2}>
            <p style={{color: theme.color}}>солкько хрмосом у человека?</p>
        </div>

        <div className={styles.bos2}>
       <button onClick={openRedScreen} className={styles.btn_num_1}>32</button>
       <button onClick={dogClick} className={styles.btn_num_2}>46</button>
        {show && <Confetti  numberOfPieces={200}/>}
        </div>
       
    </div>
          {/* f5 */}
         </div>
         </div>
       <div className={styles.b6}>
         <img onClick={Clicker6} hidden={!visible6} className={styles.img} src={n6} alt="" />
       
       <div className={styles.ff2} hidden={visible6}>
        {/* F6 */}
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
        opacity:0.5
      }}
    >
           <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
</animated.div>}
         <div className={styles.bos_2_2}>
            <p style={{color: theme.color}}>самая большая гора?</p>
        </div>

        <div className={styles.bos2}>
        <button onClick={dogClick} className={styles.btn_num_2}>everest</button>
       <button onClick={openRedScreen} className={styles.btn_num_1}>eiler</button>
       
        {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
        </div>
       
    </div>
  
          {/* f6 */}
         </div>
         </div>
    </div>
    <div className={styles.big_box_1}>
       <div className={styles.b7}>
         <img onClick={Clicker7} hidden={!visible7} className={styles.img} src={n7} alt="" />
       
       <div className={styles.ff2} hidden={visible7}>
        {/* F7 */}
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
        opacity:0.5
      }}
    >
           <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
</animated.div>}
         <div className={styles.bos_2_2}>
            <p style={{color: theme.color}}>в кокм году было создоно Казахское ханство</p>
        </div>

        <div className={styles.bos2}>
       <button onClick={openRedScreen} className={styles.btn_num_1}>1588</button>
       <button onClick={dogClick} className={styles.btn_num_2}>1465</button>
        {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
        </div>
       
    </div>
  
          {/* f7 */}
         </div>
         </div>
       <div className={styles.b8}>
         <img onClick={Clicker8} hidden={!visible8} className={styles.img} src={n8} alt="" />
       
       <div className={styles.ff2} hidden={visible8}>
        {/* F8 */}
           
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
                           opacity:0.5
                         }}
                       >
                             <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
                   </animated.div>}
                            <div className={styles.bos_2_2}>
                               <p style={{color: theme.color}}>сколько штатов в Америке?</p>
                           </div>
                   
                           <div className={styles.bos2}>
                          <button onClick={openRedScreen} className={styles.btn_num_1}>49</button>
                          <button onClick={dogClick} className={styles.btn_num_2}>50</button>
                           {show && <Confetti width={window.width} height={window.height} numberOfPieces={200}/>}
                           </div>
                          
                       </div>
                     
          {/* f8 */}
         </div>
         </div>
       <div className={styles.b9}>
         <img onClick={Clicker9} hidden={!visible9} className={styles.img} src={n9} alt="" />
         <div className={styles.ff2} hidden={visible9}>
          {/* F9 */}
           
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
        opacity:0.5
      }}
    >
           <h1 style={{fontSize:60,fontWeight:600,color:theme.color,opacity:1}} >YOU MISSED</h1>
</animated.div>}
         <div className={styles.bos_2_2}>
            <p style={{color: theme.color}} >в каком месте Казахстан по теретории?</p>
        </div>

        <div className={styles.bos2}>
        <button onClick={dogClick} className={styles.btn_num_2}>9</button>
       <button onClick={openRedScreen} className={styles.btn_num_1}>11</button>
       
        { show && <Confetti width={window.width} height={window.height} numberOfPieces={200}
       
        />
        
        }
        
        </div>
       
    </div>
          {/* f9 */}
         </div>
       </div>
    </div>

 </div>
 </div>
)}
export default Game