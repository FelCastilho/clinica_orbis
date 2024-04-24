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
                    Sou Oftalmologista Especialista 
                    em Córnea, Cirurgia Refrativa, <br />
                    Catarata e Lentes de Contato 
                    com experiência de anos. <br /> Criei 
                    a Clínica Orbis Eyecare para oferecer a 
                    você uma maneira <br /> diferente e de 
                    qualidade para cuidar da saúde 
                    dos seus olhos.
                    </p>
            </div>
        </section>
    )
}