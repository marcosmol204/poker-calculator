import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { DashboardView, ActionsView, NotFoundView } from "./views";
import { GameProvider } from "./context";

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardView />} />
            <Route path="actions" element={<ActionsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
