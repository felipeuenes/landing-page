import './video.css';


export function Video(){
    return(
      

            <div className='videoApresentacao'>
                <h1>Conheça nosso método!</h1>
                <div className='videoAqui'>
                <iframe  src="https://www.youtube.com/embed/I-sKa_KZLuw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <button className='btn'>EU QUERO!</button>
            </div>
       
    )
}