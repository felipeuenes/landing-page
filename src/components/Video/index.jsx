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
                <iframe src="https://www.youtube.com/embed/jix4JBDV3WE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
      {/* </ScrollRevealContainer> */}
      <a href="https://wa.me/5588996857750?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+m%C3%A9todo+Aprenda+J%C3%A1%21" target="_blank" rel="noopener noreferrer">

                <button className='btn'>EU QUERO!</button>
      </a>
            </div>
       
    )
}