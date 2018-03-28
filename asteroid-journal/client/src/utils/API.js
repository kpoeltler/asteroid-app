import axios from "axios";

export default {
  // Gets all observations
  getObservations: function() {
    return axios.get("/api/observations");
  },
  // Gets the observations with the given id
  getObservation: function(id) {
    return axios.get("/api/observations/" + id);
  },
  // Deletes the observations with the given id
  deleteObservation: function(id) {
    return axios.delete("/api/observations/" + id);
  },
  // Saves an observation to the database
  saveObservation: function(observationData) {
    return axios.post("/api/observations", observationData);
  }
};
