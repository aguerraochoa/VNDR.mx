import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route index element={<div>Hello there</div>} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
