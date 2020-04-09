import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { usedValues: [], nextNumber: 0, message: "" };

  renderTable = () => {
    const tdStyle = { border: "1px solid black", textAlign: "center" };
    const tdNextStyle = { border: "1px solid black", textAlign: "center", color:'red', fontWeight: 'bold'  };

    let table = [];
    for (let i = 0; i < 90; i += 10) {
      let children = [];
      for (let j = i + 1; j <= i + 10; j++) {
        let currentStyle = tdStyle;
        var element = document.getElementById(j)
        if(element !== null)
        {
          if(this.state.nextNumber === j || element.style.color !== "")
          {
            currentStyle = tdNextStyle;
          }

        }
    
        children.push(
          <td style={currentStyle} id={j} key={j}>
            {j}
          </td>
        );
      }

      table.push(<tr key={i}>{children}</tr>);
    }

    return table;
  };

  getUniqueInt = () => {
    const max = 91;
    if (this.state.usedValues.length >= max - 1) {
      this.setState({ message: "Game Over" });
      return;
    }

    var val = Math.floor(Math.random() * max);
    //const found = this.state.usedValues.find(x => x === val);
    while (val === 0 || this.state.usedValues.find(x => x === val) > 0) {
      val = Math.floor(Math.random() * max);
    }
 
    var newValue = [...this.state.usedValues, val];
    console.log("NewValue", newValue);
    this.setState({
      usedValues: newValue,
      nextNumber: val,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="d-flex p-2 justify-content-center alert-warning mb-2">
          Tambola
        </h1>
        <div className="row">
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
          <div className="col">
            <button
              className="btn btn-primary mb-2"
              style={{ width: "100%" }}
              onClick={this.getUniqueInt}
            >
              Next Number
            </button>
            <div className="w-100"></div>
            <div>
              <p
                className="mt-5 font-weight-bold display-1 d-flex p-2 justify-content-center"
                id="number"
              >
              {this.state.message === "" ? this.state.nextNumber : this.state.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;