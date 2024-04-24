import './style.css'

import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer>

            <div className="section1">

                <div className='contact-footer'>

                    <h2>Contato</h2>

                    <div className="footer-icons">
                            <Link to="#">
                                <FaYoutube size={20}/>
                            </Link>

                            <Link to="#">
                                <FaWhatsapp />
                            </Link>

                            <Link to="#">
                                <FaInstagram size={20}/>
                            </Link>
                    </div>
                </div>

                <img src={Logo} />

                <div className="about-us">
                    <h2>Sobre nós</h2>
                    <p>
                        Somos uma clínica de <br />
                        oftalmologia buscando <br />
                        cuidar da saúde dos <br />
                        seus olhos. 
                    </p>
                </div>
            </div>

            <p className='copyright'>Desenvolvido por <strong>Felipe Coutinho</strong> | © 2024 | Todos os direitos reservados</p>
        </footer>
    )
}