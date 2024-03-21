import React, {useState,useEffect} from "react"
import { Blockchainimp } from "../../data/Data"

const PriceCard = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = () => {
    // Perform actions when the button is clicked, using the input value
    console.log('Input value:', input);
    // You can add your logic here, such as filtering the Blockchainimp array
    // based on the input value
  };

  return (
    <>
      <div className='content mtop'>
        <div className="Inputtake">
          <input
            type="text"
            className={input ? 'filled':''}
            id="propid"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
           {/* <label className={input ? 'placeholder active' : 'placeholder'}>
        Write Property Id
      </label> */}
          {/* <button onClick={handleButtonClick}>Click here</button> */}
        </div>
        <div>
          {/* Display input value */}
          {input && <p>Input value: {input}</p>}
          {/* Display Blockchainimp data based on input */}
          {Blockchainimp.map((v) => {
            // console.log(input)
            if (v.id === input.toString()) {
              return (
                <div key={v.id} className="Blocksshown">
                  {v.prevCustom.map((e, index) => (
                    <div key={index} className="block">
                      <h3>Name: {e.name}</h3>
                      <h3>Age: {e.Age}</h3>
                    </div>
                  ))}
                </div>
              );
            } 
          })}
        </div>
      </div>
    </>
  );
};

export default PriceCard;
