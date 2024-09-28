import axios, { AxiosInstance } from 'axios';
import { IPost } from '../interfaces/post.interface';

class PostService {
  private api: AxiosInstance;

  constructor(baseURL: string = 'https://jsonplaceholder.typicode.com') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Obtener un post por ID
  async getPost(id: number): Promise<IPost> {
    try {
      const response = await this.api.get<IPost>(`/posts/${id}`);
      return response.data; // Devolvemos solo los datos, que coinciden con IPost
    } catch (error) {
      throw new Error(`Error fetching post with ID ${id}: ${error}`);
    }
  }

  // Listar todos los posts
  async getAllPosts(): Promise<IPost[]> {
    try {
      const response = await this.api.get<IPost[]>('/posts');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching posts: ${error}`);
    }
  }

  // Crear un nuevo post
  async createPost(post: IPost): Promise<IPost> {
    try {
      const response = await this.api.post<IPost>('/posts', post);
      return response.data;
    } catch (error) {
      throw new Error(`Error creating post: ${error}`);
    }
  }

  // Actualizar un post existente (PUT)
  async updatePost(post: IPost): Promise<IPost> {
    try {
      const response = await this.api.put<IPost>(`/posts/${post.id}`, post);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating post with ID ${post.id}: ${error}`);
    }
  }

  // Actualizar parcialmente un post (PATCH)
  async patchPost(id: number, title?: string, body?: string): Promise<IPost> {
    try {
      const data: { [key: string]: string | number | undefined } = {};
      if (title) data.title = title;
      if (body) data.body = body;

      const response = await this.api.patch<IPost>(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error patching post with ID ${id}: ${error}`);
    }
  }

  // Eliminar un post
  async deletePost(id: number): Promise<void> {
    try {
      await this.api.delete(`/posts/${id}`);
    } catch (error) {
      throw new Error(`Error deleting post with ID ${id}: ${error}`);
    }
  }

  // Filtrar posts por userId
  async filterPostsByUserId(userId: number): Promise<IPost[]> {
    try {
      const response = await this.api.get<IPost[]>(`/posts`, {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching posts for user ID ${userId}: ${error}`);
    }
  }

  // Obtener los comentarios de un post por ID
  async getPostComments(postId: number): Promise<any[]> {
    try {
      const response = await this.api.get<any[]>(`/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching comments for post ID ${postId}: ${error}`);
    }
  }
}

export default new PostService();
