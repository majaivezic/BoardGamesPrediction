const axios = require('axios');
const api_key = "ymeES/9mVtKlEQCe+g3gMztuuoA5FAcOrGxg8Kh4ik+1uWNfZPB0bk0+HPkCa7/bt52p0X1UDHjdfNnP3dx8oQ=="
const url = "https://ussouthcentral.services.azureml.net/workspaces/8fa3ffbd52a040bdbe140bef9ca4547d/services/0599fe50b65e4f598e0472748c888184/execute?api-version=2.0&format=swagger"

export default function getPrediction(data) {
  return axios({ method: 'POST', url: url, headers: {'Authorization': "Bearer " + api_key}, data: data });
}
