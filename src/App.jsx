import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import ProjectPage from "./pages/ProjectPage";


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects/:id" element={<ProjectPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
