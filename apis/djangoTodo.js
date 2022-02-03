import axiosInstance from "../axios";

class DjangoTodo {
  static async getTasks() {
    const response = await axiosInstance.get("/");
    return response.data;
  }

  static async getTaskById(id) {
    const response = await axiosInstance.get(`/task/${id}`);
    return response.data;
  }

  static async deleteTask(id) {
    const response = await axiosInstance.delete(`/task/${id}`);
    return response.data;
  }

  static async updateTask(id, data) {
    const response = await axiosInstance.put(`/task/${id}`, data);
    return response.data;
  }

  static async createTask(data) {
    const response = await axiosInstance.post("/", data);
    console.log(response);
    return response.data;
  }
}

export default DjangoTodo;
