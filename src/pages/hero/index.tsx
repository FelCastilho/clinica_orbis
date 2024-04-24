import './style.css';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
    
        <section className="hero">
            <div className='hero-container'>
                <div className="hero-text">
                    <h1>
                        Atendimento perto <br />
                        e a poucos minutos <br />
                        de você!
                    </h1>
                    <p>
                        Excelência em oftalmologia <br />
                        no Distrito Federal com <br />
                        acompanhamento pós-consulta.
                    </p>
                    <Link to="" className='btn-hero'>Saiba mais</Link>
                </div>

                <div className='blank-space'></div>
            </div>
        </section>

    )
}