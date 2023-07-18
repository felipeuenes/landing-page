import './video.css';
import ScrollRevealContainer from '../ScrollReveal';

export function Video(){
    return(
        
        <div className='videoApresentacao'>
            <ScrollRevealContainer>

                <h1>Conheça nosso método!</h1>
            </ScrollRevealContainer>
                {/* <ScrollRevealContainer> */}
                <div className='videoAqui'>
                <iframe  src="https://www.youtube.com/embed/I-sKa_KZLuw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
      {/* </ScrollRevealContainer> */}
                <button className='btn'>EU QUERO!</button>
            </div>
       
    )
}