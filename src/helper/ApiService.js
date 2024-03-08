import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getData(endpoint) {
    try {
      const response = await axios.get(`${this.baseURL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  async showData(endpoint,id) {
    try {
      const response = await axios.get(`${this.baseURL}/${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async postData(endpoint, data) {
    try {
      const response = await axios.post(`${this.baseURL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }

  async putData(endpoint, data) {
    try {
      const response = await axios.put(`${this.baseURL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

  async deleteData(endpoint) {
    try {
      const response = await axios.delete(`${this.baseURL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }
}

export default ApiService;
