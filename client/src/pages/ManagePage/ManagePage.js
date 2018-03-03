import React, { Component } from "react";
import Navi from "../../components/Navi";
import Manage from "../../components/Manage";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class ManagePage extends Component {
  
  state = {
    schoolId: "1", //User's school ID
    buttonSearch: "", //Type of instrument searched (this is used to filter the inventory)
    userInventory: [], //User's Inventory
    filteredInventory: [] //User's filtered inventory
  };

  componentDidMount() {
    this.getInventoryBySchoolId(this.state.schoolId); //Retrieve all instruments with this ID
  }

  getInventoryBySchoolId = schoolId => {
    API.getInventoryBySchoolId(this.state.schoolId).then(results => {
      this.setState({
        userInventory: results.data
      });
    });
  };

  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = (inventory) => {
    if(inventory.length !== undefined) {
      return (
        <div className="inventorySect col-12 py-4 px-0 mx-0">
          <ul className="list-inline list-unstyled px-0 mx-0">
            {inventory.map(inv => (
              <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 pb-4 px-0 mx-0">
                <InstrumentCard
                  key={inv._id}
                  uniqueId={inv._id}
                  link={inv.image}
                  brand={inv.brand}
                  instrument={inv.instrumentName}
                  school={inv.school}
                  details={inv.details}
                  action="Remove Instrument" //The innerHTML of the button
                  clickEvent={this.handleManageClick} //The button's page specific click event (deleting intruments)
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  //Category click event that is passed an instrumentType from Manage.js (string value, ie "Brass")
  handleClick = (instrumentType) => {

    //Filter the userInventory with the instrumentType string
    let filteredInventory = this.state.userInventory.filter(item => item.type == instrumentType);

    //Set the button search state to equal instrument type
    this.setState({ 
      buttonSearch: instrumentType, //buttonSearch state now equals selected instrument type (string value in instrumentType, ie "Brass")
      filteredInventory: filteredInventory //filteredInventory now equals the filteredInventory array created above
    });
  }

  //Remove Instrument click event
  handleManageClick = (event) => {

    //Reference the mongoId of the selected instrument
    let mongoId = event.target.getAttribute('uniqueid');

    //findById and delete the instrument in inventory
    API.deleteInstrument(mongoId).then(result => {
      
      //Get the user's updated inventory
      this.getInventoryBySchoolId(this.state.schoolId);
    });
  }

  //This function renders either the entire user inventory, or the filtered inventory
  shouldRender = () => {
    //If the buttonSearch state is blank, render entire inventory (userInventory)
    if (this.state.buttonSearch == "") {
      return this.renderInventory(this.state.userInventory)
    }
    //Else, render the filteredInventory stored in the state
    else {
      return this.renderInventory(this.state.filteredInventory);
    }
  }

  render() {
    return (
      <div>
        <div className="fadeIn">
          <Manage handleClick={this.handleClick}/>
            {this.shouldRender()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default ManagePage;
