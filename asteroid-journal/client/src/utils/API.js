import axios from "axios";

export default {
  // Gets all observations
  getObservation: function() {
    return axios.get("/api/observation");
  },
  // Gets the observations with the given id
  getObservation: function(id) {
    return axios.get("/api/observation/" + id);
  },
  // Deletes the  with the given id
  deleteObservation: function(id) {
    return axios.delete("/api/observation/" + id);
  },
  // Saves an observation to the database
  saveObservation: function(observationData) {
    return axios.post("/api/observation", observationData);
  }
};
