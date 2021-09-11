import React,{useState} from 'react';
import Slider from 'react-input-slider';

function PriceSlider({brand,xmax,sign,handle}) {
    const [state, setState] = useState({ x: 10});
    function handleChange(e){
        setState({x:e.x});
        handle(state);
    }
    return (
        <div>
        <h4>{brand} {sign}{state.x} </h4>
        <Slider
          axis="x"
          xmax={xmax}
          x={state.x}
          onChange={handleChange}
        />
      </div>
    )
}

export default PriceSlider
