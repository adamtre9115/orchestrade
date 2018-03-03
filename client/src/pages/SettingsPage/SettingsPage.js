import React, { Component } from "react";
import Footer from "../../components/Footer";
import "./SettingsPage.css";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import AccountDetail from "../../components/Account";
import SideNavi from "../../components/SideNavi";
import SettingsMobile from "../../components/SettingsMobile";
import DefaultSettings from "../../components/DefaultSettings";

class Settings extends Component {
  state = {
    page: ""
  };

  // this funcion captures the data-value of the link clicked and sets it to the state
  clickedPage = event => {
    const linkClicked = event.currentTarget.dataset.value;
    this.setState({ page: linkClicked }, function() {
      // const whichPage = this.state.page;
    });
  };

  // determines which page should be rendered based off of the current state
  pageChange = () => {
    const whichState = this.state.page;
    if (whichState === "account") {
      return <AccountDetail />;
    } else if (whichState === "privacy") {
      return <PrivacyPolicy />;
    } else {
      return <DefaultSettings/>
    }
  };
  render() {
    return (
      <div>
        <div className="addSpace">
        <div id="mobile">
          <SettingsMobile aLinkClicked={this.clickedPage}
                  yourValue={this.state.page}/>
          </div>
          <div className="row">
            <div className="sideMenu col-md-2">
              <SideNavi
                aLinkClicked={this.clickedPage}
                yourValue={this.state.page}
              />
            </div>
            <div id="renderedPage" className="col-md-10">{this.pageChange()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Settings;
