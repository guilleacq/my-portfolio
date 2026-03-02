import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/project/:id" element={<ProjectPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
