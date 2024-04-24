import './style.css';

import Note from '../../assets/prancheta.svg';
import Hands from '../../assets/maos.svg';
import Card from '../../assets/cartao.svg';

export function Aside(){
    return(
        <section className='shape-container'>

            <div className='card-container'>
                <img src={Note} className='icon-aside'/>
                <div className="container-aside-text">
                    <h5>Atendimento flexível</h5>
                    <p>
                        Você escolhe como quer <br />
                        agendar sua consulta.
                    </p>
                </div>
            </div>

            <div className='card-container'>
                <img src={Card} className='icon-aside'/>
                <div className="container-aside-text">
                    <h5>Parcelamento em até 12x</h5>
                    <p>
                        Facilitamos para você cuidar <br />
                        da sua visão
                    </p>
                </div>
            </div>

            <div className='card-container'>
                <img src={Hands} className='icon-aside'/>
                <div className="container-aside-text">
                    <h5>Aceitamos 99% dos convênios</h5>
                    <p>
                        Proporcionamos toda facilidade 
                        <br />para você ver melhor.
                    </p>
                </div>
            </div>

        </section>
    )
}