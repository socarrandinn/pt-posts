import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes/routes'
import MainProvider from './contexts/MainProvider';


function App() {
  return (
    <MainProvider>
      <RouterProvider router={routers} />
    </MainProvider>
  )
}

export default App
