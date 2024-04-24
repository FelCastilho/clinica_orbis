import './style.css';
import Img from '../../assets/foto-anderson.svg';
export function About(){
    return(
        <section className="about">
            <div>
                <img src={Img} alt="" />
            </div>
        </section>
    )
}