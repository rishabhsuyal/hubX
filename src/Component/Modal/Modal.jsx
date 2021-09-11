import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import DoughnutChart from '../PieChart/PieChart';
import PriceSlider from '../PriceSlider/PriceSlider';
import "./PModal.css";

function ModalCentre(props) {
    const [invest, setinvest] = useState(1000);
    const [rate, setrate] = useState(1);
    const [duration, setduration] = useState(1);
    function handleInvest(e){
        setinvest(e.x);
    }
    function handleRate(e){
        setrate(e.x);
    }
    function handleduration(e){
        setduration(e.x);
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mutual fund return calculator
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="con12">
                    <div className="slid">
                        <PriceSlider handle={handleInvest} brand="Total Investment" xmax="1000000" sign="₹" />
                        <PriceSlider handle={handleRate} brand="Expected Return Rate" xmax="100" sign="%"/>
                        <PriceSlider handle={handleduration} brand="Time Period" xmax="50" sign="Yr"/>
                        <h4>Total Value {invest*[(1+rate)^(duration*12)-1]*(1+rate)/rate}</h4>
                    </div>
                    <DoughnutChart invest={invest} rate={rate} dur={duration}/>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ModalCentre;



