import './style.css';
import aprovado from '../../assets/verificado.png'
import leitura from '../../assets/leitura-agil.png'
import conteudo from '../../assets/conteudo-atrativo.png'
import revisao from '../../assets/revisao.png'
import experiencia from '../../assets/experiencia.png'
import ScrollRevealContainer from '../ScrollReveal';



export function Info() {


   


    return(
        <ScrollRevealContainer>

        <div className='informacoes'>
            <h1>Porque nosso método <br/> é diferenciado?</h1>
            <div className='skills'>
                <section>
                    <img src={aprovado} alt="" />
                    <h3>Material aprovado</h3>
                    <p>Elaborado pelo prof. Elder
                        e testado por alunos para
                        efetivação da aprendizagem</p>
                </section>
                <section>
                    <img src={leitura} alt="" />
                    <h3>Leitura ágil</h3>
                    <p>Mapas escritos em
                        ordem descendente
                        para facilitar a leitura,
                        compreenção e memorização através de
                        textos sequenciados.</p>
                </section>
                
                <section>
                    <img src={conteudo} alt="" />
                    <h3>Conteúdos atrativos</h3>
                    <p>Mapas dinâmicos com
                        utilização de textos
                        objetivos, ilustrações,
                        destaques com cores,
                        mnemônicos e dicas de
                        memorização.</p>
                </section>
                
                <section>
                    <img src={revisao} alt="" />
                    <h3>Revisões recorrentes</h3>
                    <p>Conteúdo sintetizado
                        em mapas mentais para
                        diminuir o tempo necessário
                        de estudo e revisão.</p>
                </section>
                
                <section>
                    <img src={experiencia} alt="" />
                    <h3>Experinência e inovação</h3>
                    <p>Mais de 20 anos de
                    experiência como professor
                    de concursos e vestibulares.
                    Aprovado para Banco do Brasil
                    e Analista Administrativo nos
                    TRT’s Maranhão e Goiás.</p>
                </section>
                

            </div>

        </div>
        </ScrollRevealContainer>
    )
}