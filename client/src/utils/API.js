import axios from "axios";

export default {
  //GET ROUTES
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // returns all inventory items
  getInventory: function(){
    return axios.get("/api/inventory");
  },
  // Gets the instruments with the given id
  getInventoryBySchoolId: function(schoolId) {
    return axios.get("/api/inventory/" + schoolId);
  },
  // Gets the template with the given mongo id
  getTemplateById: function(_id) {
    return axios.get("/api/templates/" + _id);
  },
  //Gets the instruments by their specific category ex "Brass"
  getByCat: function(search){
    return axios.get("/api/inventory/category/" + search);
  },
  //Gets the instruments by their specific type ex "Trombone"
  getByInst: function(instrument){
    return axios.get("api/inventory/instruments/" + instrument);
  },
  //Gets all instrument templates (AddPage)
  getInstrumentTemplates: function() {
    return axios.get("api/templates");
  },

  //POST ROUTES
  //Create an instrument (AddPage)
  createInstrument: function(instrumentData) {
    return axios.post("api/inventory", instrumentData);
  },

  //DELETE ROUTES
  //Delete an instrument (ManagePage)
  deleteInstrument: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  sendMail: function(){
    return axios.post("/api/mail");
  }
};