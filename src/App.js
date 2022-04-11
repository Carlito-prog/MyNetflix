import request from "./apicalls";
import "../src/App.css";

import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Rows from "./Components/Rows";

function App() {
  return (
    <main className="app">
      <section>
        {/* Navbar */}
        <Nav />
        {/* Banner */}
        <Banner />
        <Rows title="JUST OUT" fetchUrl={request.justOut} isLargeRow />
        <Rows title="TOP 50 MOVIES" fetchUrl={request.topFifthyMovies} />
        <Rows title="TOP 50 SHOWS" fetchUrl={request.topFifthyShows} />
        <Rows title="POP MOVIES" fetchUrl={request.popularMovies} />
        <Rows title="POP SHOWS" fetchUrl={request.popularShows} />
        {/* <Rows title="MOST WATCHED" 
       fetchUrl={request.mostWatched}/> */}
      </section>
    </main>
  );
}

export default App;
