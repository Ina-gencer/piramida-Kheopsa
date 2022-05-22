import './App.css';
import Piramida from './Piramida';
//import picture from './piramida-kheopsa.jpg';
import { data } from './data';
import { useState } from 'react';

function App() {
  const[state, setState] = useState(data);
  const[showText, setShowText] = useState(false);
  const[btnText, setBtnText] = useState('удалить всё');


  console.log(data)


  const removeElement = (id)=> {
    let newArray = state.filter( (i) =>
    i.id !== id)
    setState(newArray)
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText);
  }

  const returnBack =()=> {
    if (btnText === 'удалить всё') {
      setBtnText('вернуть назад..');
      setState([])
    }
    else {
      setBtnText('удалить всё');
      setState(data)
    }
  }

  return (
    <div >
     
    

      <div className='box'>
        {state.map((item => {
          const{id, image, description, header, showMore} = item;


          return(
            <>
            <div key={id}>
              <div className='container'>
                <h1>{id} - {header}</h1>
              </div>

              <div className='container'>
               <img src={image} alt="The Pyramid of Cheops" width="700px"/>
              </div>

              <div className='container text'>
                <p>{showMore ? description : description.substring(0, 200) + "..."}
                  <button className='btnShowText' onClick={ ()=> showTextClick(item)}>
                    {showMore ? "show less" : "show more"}
                  </button>
                </p>
              </div>

              <div className='container'>
                <button className='btnDelete' onClick={ ()=> removeElement(id)} >удалить</button>
              </div>
         
            </div>
           
            </>

          )
        }))}

              <div className='container'>
                <button className='btnDelete' onClick={returnBack}>{btnText}</button>
              </div>
      </div>
<br />
      <div>
        <Piramida />
      </div>
<br />
<hr />
<div className='container'>
  <p>by Ina Gencer </p>
</div>
    </div>

   
  );
}

export default App;
