import styles from './index.module.css'
import {CheckLine, Computer, SquareCode,Braces} from 'lucide-react';


const App = () => {
  

  

  const todo = {text: 'Ashley', done:true};
  const mySkills = [
    {
      name:'JavaScript',
      comfort: 1,
      frontEnd: true ,
      backend: true
    },
    {
      name:'CSS',
      comfort: 3,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 4,
      frontEnd: true,
      backend: false
    },
  ];

  
 
      
    
    
   
      
         return (
      <>
        
<ul center-text className = "">
          {mySkills.map(({name, comfort, frontEnd, backend}) => (
            <div className ={styles.language} key = {name}>
              <p><CheckLine color="hotpink" size={18} /><span> Language:   </span>{name}</p>
              <p><Computer color="#00c7fc"/><span> Skill level: </span>{comfort}</p>
              <p><Braces size={20} color="#d357fe" strokeWidth={0.5} absoluteStrokeWidth /><span>Front End:</span>{frontEnd === true ? ' Yes' : 'Nah'}</p>
              <p><SquareCode color="#dff43cff" strokeWidth={1.5} /> <span>Back End: </span>{backend === true ? ' Yes ✔' : 'Nah'}</p> <hr></hr>

              </div>
          ))}
            </ul>
          
        
      </>
        )



  
      }
 
  


export default App
