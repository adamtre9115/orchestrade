import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Add from "../../components/Add";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";

//We still need to work on the search input/tabs... Also the search tabs need to be made responsive 
class AddPage extends Component {
  
  //The state of the AddPage will be stored here
  state = {
    buttonSearch: "",
    inventory: [],
    filteredInventory:[],
    modal: false
  };
  
  //What does this do?
  //Need to learn more about this snippet, used for toggling modal
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  //What does this do?
  componentDidMount() {
    //Invoke getInstrumentTemplates()
    this.getInstrumentTemplates();
  }

  //Declare the getInstrumentTemplates function
  getInstrumentTemplates = event => {
    API.getInstrumentTemplates().then(results => {
      this.setState({
        inventory: results.data
      });
    });
  };


  /////////////////////////////////////
  // EVENT HANDLERS                  //
  /////////////////////////////////////

  //Category click event that is passed an instrumentType from Manage.js (string value, ie "Brass")
  handleClick = (instrumentType) => {

    //Filter the inventory with the instrumentType string
    let filteredInventory = this.state.inventory.filter(item => item.type === instrumentType);

    //Set the button search state to equal instrument type
    this.setState({ 
      buttonSearch: instrumentType, //buttonSearch state now equals selected instrument type (string value in instrumentType, ie "Brass")
      filteredInventory: filteredInventory //filteredInventory now equals the filteredInventory array created above
    });
  } //End of handleClick()

  //Add Instrument click event
  handleAddClick = (event) => {
    event.preventDefault();

    //Find the template clicked using the template's mongoId
    API.getTemplateById(this.state.templateId)
    .then(results => {
      
      //New object containing template info and user info/input
      let newInstrument = {
        isAvailable: true,
        schoolId: "1", //Obtained from user info
        instrumentName: results.data.instrumentName,
        school: "Example High School",
        type: results.data.type,
        brand: this.state.brandInput,
        image: results.data.image,
        details: this.state.detailsInput
      }

      //Save the newly created instrument to the inventory collection
      API.createInstrument(newInstrument)
      .then(results => {
  
        //Toggle modal, empty brandInput/detailsInput
        this.setState({ modal: !this.state.modal, brandInput: "", detailsInput: "" });
    
      }); //End of createInstrument() resolve

    }); //End of getTemplateId() resolve

  } //End of handleAddClick()

  //Toggle for the modal
  toggle(event) {

    //Reference the mongoId and name of the clicked Template
    let mongoId = event.target.getAttribute('uniqueid');
    let instrument = event.target.getAttribute('data-instrument');
    let image = event.target.getAttribute('data-src');

    //Toggle the state of the modal
    this.setState({
      modal: !this.state.modal, //True/false
      templateId: mongoId, //ID of the template selected
      instrumentName: instrument,
      instrumentImage: image
    });

  } //End of toggle()

  //Updates the state of specified input values based on current input element
  updateInputValue(evt) {
    if (evt.target.getAttribute('data-field') === 'brand') {
      this.setState({ brandInput: evt.target.value });
    }
    else if (evt.target.getAttribute('data-field') === 'details') {
      this.setState({ detailsInput: evt.target.value });
    }
  } //End of updateInputValue()


  /////////////////////////////////////
  // RENDER METHODS                  //
  /////////////////////////////////////

  //When renderInventory() is invoked with an array as the argument (inventory)
  //If the inventory array is not undefined, return an <ul> with each index mapped into a <li> element
  renderInventory = (inventory) => {
    if(inventory.length !== undefined) {
      return (
        <div className="inventorySect col-12 px-0 mx-0">
          <ul className="list-inline list-unstyled px-0 mx-0">
            {inventory.map(inv => (
              <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
                <InstrumentCard
                  key={inv._id}
                  uniqueId={inv._id}
                  link={inv.image}
                  brand={"Template"}
                  instrument={inv.instrumentName}
                  action="Add Instrument" //The innerHTML of the button
                  clickEvent={this.toggle} //The button's page specific click event (adding intruments)
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  //This function renders either the entire user inventory, or the filtered inventory
  shouldRender = () => {
    //If the buttonSearch state is blank, render entire inventory
    if (this.state.buttonSearch === "") {
      return this.renderInventory(this.state.inventory)
    }
    //Else, render the filteredInventory stored in the state
    else {
      return this.renderInventory(this.state.filteredInventory);
    }
  } //End of shouldRender()

  render() {
    return (
      <div>
        <div className="fadeIn">
          <Add handleClick={this.handleClick} />
          {this.shouldRender()}

          {/* Start of Modal */}
          {/* It would be best to separate this modal, but this works for now (easier to pass information) */}
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} className="bg-dark text-white">{this.state.instrumentName}</ModalHeader>
              <ModalBody>
                <img className="img-fluid text-center" width="250" height="250" src={this.state.instrumentImage}/>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">Brand </InputGroupAddon>
                  <Input value={this.state.brandInput} onChange={evt => this.updateInputValue(evt)} maxLength="50" data-field="brand"/>
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroupAddon addonType="prepend">Details</InputGroupAddon>
                  <Input value={this.state.detailsInput} onChange={evt => this.updateInputValue(evt)} maxLength="120" data-field="details"/>
                </InputGroup>
              </ModalBody>
              <ModalFooter className="bg-dark">
                <Button color="primary" onClick={this.handleAddClick} data-value>Upload</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div> {/* End of Modal */}

          <Footer />
        </div>
        
      </div>
    ); //End of return()

  } //End of render()

} //End of AddPage Component Class

export default AddPage;
