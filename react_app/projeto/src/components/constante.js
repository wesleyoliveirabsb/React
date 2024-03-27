import styles from './constante.module.css'

function Constante(){
    const nome ='iu'
    const soma = 1+2
    const logo ='https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png'
    return(
        <div className={styles.title}>
        <p>Texo exemplificando como é modficiar uma tag pelo css pai</p>
        {nome} <br/>
        {soma} <br/>
        <img src={logo} alt='logo react' className={styles.constante}/>
        {soma}
        </div>
    )
}
export default Constante