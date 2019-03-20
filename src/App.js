import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";

// person name  business name gst number
// the fourth function will send the POST request to the node express server.

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      business_name: "",
      business_gst_number: ""
    };
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    });
  }

  onChangeGstNumber(e) {
    this.setState({ business_gst_number: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      `The values are ${this.state.person_name}, ${
        this.state.business_name
      }, and ${this.state.business_gst_number}`
    );
    this.setState({
      person_name: "",
      business_name: "",
      business_gst_number: ""
    });
  }
  render() {
    return (
      // add the navigation bar in our React CRUD example. Write a following code inside the App.js file.

      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              React CRUD For NBA
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Index
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <h2>Welcome to React CRUD </h2> <br />
          {/* 切換至當前頁面 透過COMPONENT 抓索引來判別是哪個頁面 */}
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
