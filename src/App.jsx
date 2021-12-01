
import './App.scss';



//pages
import Home from '../src/pages/Home/Home';
import Channel from './pages/channel/channel';
import { Switch, Route } from "react-router";
import Header from './components/header/Header';
import Video from "./pages/video/video";



function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/video" component={Video} ></Route>
        <Route path="/channel" component={Channel}></Route>
        <Route path="/" component={Home} ></Route>
      </Switch>


    </div>
  );
}

export default App;
