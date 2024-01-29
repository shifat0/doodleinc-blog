import BlogWithComments from "./Pages/BlogWithComments";
import Blogs from "./Pages/Blogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="xl:w-[1280px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/:id" element={<BlogWithComments />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
