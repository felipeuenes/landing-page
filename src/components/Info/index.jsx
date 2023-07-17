import './style.css';
import aprovado from '../../assets/verificado.png'
import leitura from '../../assets/leitura-agil.png'
import conteudo from '../../assets/conteudo-atrativo.png'
import revisao from '../../assets/revisao.png'
import experiencia from '../../assets/experiencia.png'


export function Info() {

    return(
        <div className='informacoes'>
            <h1>Porque nosso método <br/> é diferenciado?</h1>
            <div className='skills'>
                <section>
                    <img src={aprovado} alt="" />
                    <h3>Material aprovado</h3>
                </section>
                <section>
                    <img src={leitura} alt="" />
                    <h3>Material aprovado</h3>
                </section>
                
                <section>
                    <img src={conteudo} alt="" />
                    <h3>Material aprovado</h3>
                </section>
                
                <section>
                    <img src={revisao} alt="" />
                    <h3>Material aprovado</h3>
                </section>
                
                <section>
                    <img src={experiencia} alt="" />
                    <h3>Material aprovado</h3>
                </section>
                

            </div>

        </div>
    )
}