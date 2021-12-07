import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./views/test";
import NotFound from "./views/NotFound";

import "./style/index.sass";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Layout>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
