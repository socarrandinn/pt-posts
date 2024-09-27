import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainApp } from "./main.routes";
import { HomePage, NotResultPage } from "./pages_lazy";


export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainApp />} >
      <Route index element={<HomePage />} />  
      <Route path='*' element={<NotResultPage />} />
    </Route>
  )
);

