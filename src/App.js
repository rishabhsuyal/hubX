import React from 'react';
import Header from './Component/Navbar/Navbar';
import "./App.css";
import Jumbotron from './Component/Jombotron/Jumbotron';
import CourseBlog from './Component/CourseBlog/CourseBlog';
import EventLog from './Component/EventLog/EventLog';
import NewUser from './Component/NewUser/NewUser';
import Subs from './Component/Subscription/Subs';
import ModalCentre from './Component/Modal/Modal';
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="main">
      <Header />

      <Jumbotron />
      <ModalCentre
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="container1">
        <NewUser />
        <CourseBlog />
        <EventLog />
        <Subs />
        <div className="temp">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Invest
          </Button>
        </div>

      </div>


    </div>
  )
}

export default App;
