import './style.css'
// import topo from '../../assets/fundo-inicio.png'
import logoBranca from '../../assets/logo-branca.png'


export function Topo(){

    return(
       
       <div className='boxTop'>
            
            
            <img src={logoBranca} alt="logo" className='logoBranca' />


            <div className='txt'>
                <section id='textoTempo'>
                    <h1>Chega de <br/>
                    <strong> perder tempo!</strong></h1>
                    <p>Aprenda com os mapas mentais do professor Elder 
                        e ganhe em facilidade e agilidade para memorizar o
                        conteúdo programático do seu concurso</p>                     
                </section>
                <section id='foto'>
                    <h1>foto</h1>    
                </section>  

            </div>
       </div>
       
    )
}