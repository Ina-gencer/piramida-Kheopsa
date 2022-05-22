import back from './back.png';
import next from './next.png';
import { facts } from './facts';
import { useState } from 'react';

function Piramida(){
    const[state, setState] = useState(0);
    const{img, text} = facts[state];

    const clickBack =()=> {
        setState(state => {
            state--;
            if(state < 0) {
                return facts.length-1;
            }
            return state
        })
    }

    const clickNext = ()=> {
        setState(state =>{
            state++;
            if(state > facts.length-1){
                state = 0;
            }
            return state;
        })
    }

    return (
        <div>
            <div className='container'>
                <h1>Интересные факты о пирамиде Хеопса</h1>
            </div>

            <div className='containerSlide container'>
                <button className='btnBack' onClick={clickBack}>
                    <img className='icon' src={back} alt="icon-back" />
                </button>

                <img className='Piramida' src={img} alt="piramida-Kheopsa" width="800px" height="600px"/>

                <button className='btnBack' onClick={clickNext}>
                    <img className='icon' src={next} alt="icon-next" />
                </button>
            </div>

            <div className='container text'>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Piramida;