import axios, { AxiosInstance } from 'axios';
import { IPost } from '../interfaces/post.interface';

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

  
  async getUser(id: number): Promise<IPost> {
    try {
      const response = await this.api.get<IPost>(`/users/${id}`);
      return response.data; 
    } catch (error) {
      throw new Error(`Error fetching user with ID ${id}: ${error}`);
    }
  }

 
  async getAllUsers(): Promise<IPost[]> {
    try {
      const response = await this.api.get<IPost[]>('/users');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`);
    }
  }

}

export default new UserService();
