import { BrowserRouter, Switch, Route } from "react-router-dom";

// page components
import Navbar from "./Components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/create";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import ThemeSelector from "./Components/ThemeSelector";

// styles
import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
