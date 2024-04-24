import './style.css'

import comment1 from '../../assets/comment1.jpg'
import comment2 from '../../assets/comment2.jpg'

export function FeedBacks(){
    return(
        <section className='feedbacks'>
            <h1>FEEDBACKS</h1>

            <div className='comments'>
                <img src={comment1} />
                <img src={comment2} />
            </div>
        </section>
    )
}