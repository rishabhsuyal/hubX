import React from 'react';
import { Line } from 'react-chartjs-2';
import "./graph.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import { BsCalendar } from "react-icons/bs";


function Graph() {

  const state = {
    labels: ['02-03', '02-04', '02-05', '02-06', '02-07'],
    datasets: [
      {
        label: 'New user',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [0, 0, 0, 1, 5]
      }
    ]
  }

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand><BsCalendar /> Your school</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link>New</Nav.Link>
              <Nav.Link>Revenue</Nav.Link>
              <Nav.Link>Product</Nav.Link>
              <Nav.Link>Active</Nav.Link>
              <NavDropdown title="Last 7 days" id="collasible-nav-dropdown">
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="graph">
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average new user',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>

    </div>
  )
}

export default Graph
