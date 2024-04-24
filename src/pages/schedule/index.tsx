import './style.css'
import FotoAnderson from '../../assets/anderson.jpg';
import { Link } from 'react-router-dom';

export function Schedule() {
    return (
        <section className='schedule'>

            <div className="contactUs-container">

                <div className="contactUs-text">
                    <h1>Agende sua consulta</h1>
                    <p>
                        Nossos especialistas altamente qualificados e <br />
                        dedicados estão prontos para
                        cuidar de você. <br />
                        Marcar uma consulta é o primeiro passo para <br />
                        se sentir melhor,
                        viver com mais qualidade <br />
                        de vida e garantir um futuro mais saudável.
                    </p>

                    <Link to="#" className='consult-btn'>Entre em contato</Link>
                </div>

                <div className='image-container'> 
                    <img src={FotoAnderson} className='foto-anderson' />
                </div>

            </div>

        </section>
    )
}