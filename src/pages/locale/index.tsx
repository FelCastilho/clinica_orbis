import './style.css';

export function Locale(){
    return(
        <section className='locale'>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15357.458301984418!2d-47.88501900000001!3d-15.784718999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3aef14eaaaab%3A0xb90b7bd0c7f322d5!2zQ2VudHJvIENsw61uaWNvIENsw6lvIE9jdMOhdmlv!5e0!3m2!1sen!2sus!4v1713965819192!5m2!1sen!2sus"
                    width="400"
                    height="400"
                    style={{ border: '' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="contact">

                <div className="contact-text">
                    <h1>Formas de contato</h1>
                    <p>
                        Estamos à disposição para esclarecer <br />
                        sua duvidas, agendar consultas e oferecer <br />
                        o melhor atendimento possível.
                    </p>
                </div>

                <div className="box-contacts">
                    <div className="contact-item">
                        <h3>Instagram</h3>
                        <p>orbis.eyecare</p>
                    </div>

                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>contato@orbis.com</p>
                    </div>

                    <div className="contact-item whatsapp-btn">
                        <h3>Whatsapp</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
