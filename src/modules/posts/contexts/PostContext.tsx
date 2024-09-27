import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ChildrenProps } from '../../../types';
import { IPost } from '../interfaces/post.interface';
import { useFindPosts } from '../hooks/useFindPosts';
// Data value of the provider context
type PostContextValue = {
  posts?: IPost[],
  isLoading?: boolean
  error?: any
  onFilter?: (searchTerm: string) => void
}
// default value of the context
const defaultValue: PostContextValue = {}

// create context
const PostContext = createContext<PostContextValue>(defaultValue);

type PostContextProps = ChildrenProps & {
  children: any
}

const PostProvider = (props: PostContextProps) => {
  const { data, isLoading, error } = useFindPosts();
  const [posts, setPost] = useState<IPost[]>([]);
  const [originalPosts, setOriginalPosts] = useState<IPost[]>([]); 

 
  useEffect(() => {
    if (data) {
      const postsData = data as unknown as IPost[];
      setPost(postsData);          
      setOriginalPosts(postsData);   
    }
  }, [data]); 
  
  const onFilter = useCallback((searchTerm: string) => {
    if (searchTerm === '') {
    
      setPost(originalPosts);
    } else {
     
      setPost(
        originalPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [originalPosts]);

  return (
    <PostContext.Provider
      value={{ isLoading, error, posts, onFilter }}
      {...props}
    />
  );
}

const usePostContext = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
}

export { PostProvider, usePostContext }