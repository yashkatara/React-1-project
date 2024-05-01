import styles from "./ButtonContainer.module.css"
const ButtonContainer = ({OnButtonClick})=> {
  const ButtonNames =['C','1','2','+','3','4','-','5','6','7','*','8','%','=','9','0'];
  return(
  <div className={styles.buttonscontainer}>
    {ButtonNames.map((ButtonName)=><button className={styles.button} onClick={()=>OnButtonClick(ButtonName)}>{ButtonName}</button>)}
  
  {/* <button className={styles.button}>1</button>
  <button className={styles.button}>2</button>
  <button className={styles.button}>3</button>
  <button className={styles.button}>4</button>
  <button className={styles.button}>5</button> */}

</div>

)};
export default ButtonContainer;