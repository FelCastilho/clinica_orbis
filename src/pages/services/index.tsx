import './style.css'
import check from '../../assets/Check.svg';

export function Services(){
    return(
        <section className="services">
            <h1>TUDO QUE VOCÊ PRECISA EM UM SÓ LUGAR</h1>

            <div className="container-services">

                <div className='grupo1'>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Oftalmologia geral</p>
                    </div>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Especialista em córnea</p>
                    </div>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Especialista em retina</p>
                    </div>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Oftalmopediatria</p>
                    </div>

                </div>

                <div className='grupo2'>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Cirurgia refrativa</p>
                    </div>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Cirurgia de catarata</p>
                    </div>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Cirurgia de ceratocone</p>
                    </div>

                    <div className='services-text'>
                        <img src={check} className='icon-check'/>
                        <p>Lentes de contato</p>
                    </div>

                </div>
                
            </div>

        </section>
    )
}