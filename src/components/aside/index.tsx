import './style.css';

import Note from '../../assets/prancheta.svg';
import Hands from '../../assets/maos.svg';
import Card from '../../assets/cartao.svg';

export function Aside(){
    return(
        <section className='shape-container'>

            <div className='card-container'>
                <img src={Note}/>
                <div className="container-aside-text">
                    <h1>Atendimento flexível</h1>
                    <p>Você escolhe como quer <br />
                    agendar sua consulta.</p>
                </div>
            </div>

            <div className='card-container'>
                <img src={Card}/>
                <div className="container-aside-text">
                    <h1>Atendimento flexível</h1>
                    <p>Você escolhe como quer <br />
                    agendar sua consulta.</p>
                </div>
            </div>

            <div className='card-container'>
                <img src={Hands}/>
                <div className="container-aside-text">
                    <h1>Atendimento flexível</h1>
                    <p>Você escolhe como quer <br />
                    agendar sua consulta.</p>
                </div>
            </div>

        </section>
    )
}