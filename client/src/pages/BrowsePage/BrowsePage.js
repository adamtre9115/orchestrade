import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Search from "../../components/Search";
//import Request from "../../components/Request"
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import "./BrowsePage.css";
import API from "../../utils/API";

class BrowsePage extends Component {
  // the state of the inventory will be stored here
  state = {
    inventory: [],
    buttonSearch: "",
    inputSearch: "",
    searchInventory: [],
    modal: false
  };

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  // reach for our inventory and update our state
  getInventory = event => {
    API.getInventory().then(results => {
      this.setState({
        inventory: results.data
      });
    });
  };
  filterResults = (arr, wordToMatch, propToCheck) => {
    return arr.filter((instrument, i, arr) => {
      if (
        instrument[propToCheck]
          .toLowerCase()
          .indexOf(wordToMatch.toLowerCase()) !== -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  };
  // handles when the search button is clicked
  handleInstSearch = event => {
    const instToSearch = this.state.inputSearch;
    const searchInventory = this.filterResults(
      this.state.inventory,
      instToSearch,
      "instrumentName"
    );
    this.setState({ searchInventory });
  };
  // search event for buttons
  btnSearch = event => {
    const buttonSearchResult = event.currentTarget.dataset.value;
    const searchInventory = this.filterResults(
      this.state.inventory,
      buttonSearchResult,
      "type"
    );
    this.setState({ searchInventory });
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const searchInventory = this.filterResults(
      this.state.inventory,
      event.target.value,
      "instrumentName"
    );
    this.setState({ searchInventory });
    console.log(searchInventory);
  };

  // Handles Request 
  toggle(event) {
    this.setState({
      modal: !this.state.modal
    });
  }

  sendMail = event => {
    API.sendMail().then(this.setState({modal: !this.state.modal}))
  }

  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = theState => {
    const stateRender = theState;
    return (
      <div className="inventorySect col-12 py-4 px-0 mx-0">
        <h1 class="available font-weight-light py-2">Available Instruments</h1>
        <ul className="list-inline list-unstyled px-0 mx-0">
          {stateRender.map(cat => (
            <li
              key={cat._id}
              className="list-inline-item col-xs-12 col-sm-6 col-md-4 pb-4 px-0 mx-0"
            >
              <InstrumentCard
                uniqueId={cat._id}
                type={cat.type}
                link={cat.image}
                brand={cat.brand}
                instrument={cat.instrumentName}
                school={cat.school}
                details={cat.details}
                action="Request Instrument" //The innerHTML of the button
               clickEvent={this.toggle} //The button's page specific click event (requesting intruments)
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="addSpace"></div>
        <div className="fadeIn">
          <Search
            btnClick={this.btnSearch}
            yourValue={this.state.inputSearch}
            handleChange={this.handleInputChange}
            clickSearch={this.handleInstSearch}
          />
          {this.state.searchInventory.length > 0
            ? this.renderInventory(this.state.searchInventory)
            : this.renderInventory(this.state.inventory)}
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle} className="text-white bg-dark">Request Form</ModalHeader>
        <ModalBody>
          <Form method ="POST">          
            <FormGroup>
              <Label for="length"><strong>How long do you need this instrument?</strong></Label> 
              <Input type="select" name="length" id="length">
                <option>3 Days</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>1 Semester</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="message"><strong>Your Message:</strong></Label>
              <Input type="textarea" name="message" id="message" rows="4" maxLength="200" />
            </FormGroup>
            {/* <FormGroup>
              <Label for="email"><strong>Provide an email address to best contact you</strong></Label>
              <Input type="text" name="email" id="email" />
            </FormGroup>          
            <FormGroup>
              <Label for="name"><strong>Provide full name</strong></Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="instrument"><strong>Name any specific instrument you would like to borrow</strong></Label>
              <Input type="text" id="instrument" placeholder="Instrument" />
            </FormGroup> */}
          </Form>            
        </ModalBody>          
        <ModalFooter className="bg-dark">
          <Button color="primary" onClick={this.sendMail}>Send Request Email</Button>
        </ModalFooter>
      </Modal>
        <Footer />
      </div>
    </div>

    );
  
}

  }

export default BrowsePage;