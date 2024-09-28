import axios, { AxiosInstance } from 'axios';
import { IUser } from '../interfaces/IUsers';

class UserService {
  private api: AxiosInstance;

  constructor(baseURL: string = 'https://jsonplaceholder.typicode.com') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  
  async getUser(id: number): Promise<IUser> {
    try {
      const response = await this.api.get<IUser>(`/users/${id}`);
      return response.data; 
    } catch (error) {
      throw new Error(`Error fetching user with ID ${id}: ${error}`);
    }
  }

 
  async getAllUsers(): Promise<IUser[]> {
    try {
      const response = await this.api.get<IUser[]>('/users');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`);
    }
  }

}

export default new UserService();
