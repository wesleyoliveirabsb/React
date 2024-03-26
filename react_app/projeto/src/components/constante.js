function Constante(){
    const nome ='iu'
    const soma = 1+2
    const logo ='https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png'
    return(
        <div>
        {nome} <br/>
        {soma} <br/>
        <img src={logo} alt='logo react'/>
        {soma}
        </div>
    )
}
export default Constante