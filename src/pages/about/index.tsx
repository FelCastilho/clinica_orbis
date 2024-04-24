import './style.css';
import Img from '../../assets/foto-anderson.svg';
export function About(){
    return(
        <section className="about">
            <div>
                <img src={Img} className='image-about' />
            </div>

            <div className="text-about">
                <h1>Dr. Anderson Braz</h1>
                <p className='crm'>CRM - DF 22735 | RQE 17185</p>

                <p className='about-contentText'>
                    Sou Oftalmologista Especialista <br />
                    em Córnea, Cirurgia Refrativa,<br />
                    Catarata e Lentes de Contato <br />
                    com experiência de anos e criei <br />
                    a Orbis Eyecare para oferecer a <br />
                    você uma maneira diferente e de <br />
                    qualidade para cuidar da saúde <br />
                    dos seus olhos.
                    </p>
            </div>
        </section>
    )
}