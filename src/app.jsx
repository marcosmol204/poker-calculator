import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { DashboardView, ActionsView, NotFoundView } from "./views";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardView />} />
          <Route path="actions" element={<ActionsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
