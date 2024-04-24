import './style.css'

import img1 from '../../assets/space1.png';
import img2 from '../../assets/space2.png';
import img3 from '../../assets/space3.png';

export function OurSpace(){
    return(
        <section className="our-space">
            <h1>CONHEÇA NOSSO ESPAÇO</h1>
            <div className="photos">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </div>
        </section>
    )
}