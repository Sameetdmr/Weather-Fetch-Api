import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'





class App extends Component {

  state = {
    temp: "",
    humidity: ""

  }

  handleClick = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adf166eabda1d997c8dde75a075e5903`);
    const rtr = await api.json();
    this.setState({
      temp: (rtr.main.temp) - 272,
      humidity: (rtr.main.humidity)

    });
  }



  render() {
    return (
      <div className="container">

        <Container>
          <Row>
            <Col sm={8}>
              <h1 style={{ fontSize: 20 }}>Hava Durumu App</h1>

              <form onSubmit={this.handleClick}>
                <input type="text" placeholder="Enter city" name="city" className="form-control" style={{ backgroundColor: "white", width: '40vh' }} /><br></br>
                <button className="btn btn-success">Get Weather</button>


              </form>
            </Col>

            <Col sm={4}>

              {this.state.temp !== '' ? <h3>Temp:{this.state.temp}</h3> : ''}
              {this.state.humidity !== '' ? <h3>Humidity:{this.state.humidity} %</h3> : ''}

            </Col>
          </Row>
        </Container>










      </div>
    );

  }


}

export default App;
