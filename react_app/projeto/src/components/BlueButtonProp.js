import styles from './BlueButton.module.css'

function BlueButtonProp(props){
    return(
        <div className= {styles.btn}>
            <button>{props.text}</button>
        </div>
    )
}
export default BlueButtonProp