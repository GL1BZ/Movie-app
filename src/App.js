import React from "react";

import { Header } from "./layout/Header";
import { Preloader } from "./components/Preloader";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
    state = {
       cards: [],
       loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((responce) => responce.json())
            .then((data) =>
                this.setState({ cards: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
      this.setState({ loading: true });
      fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
              type !== 'all' ? `&type=${type}` : ''
          }`
      )
          .then((responce) => responce.json())
          .then((data) =>
              this.setState({ cards: data.Search, loading: false })
          );
  };

  render(){
    return (
      <div className="App">
          <Header searchMovies={this.searchMovies}/>
          { this.state.loading ? <Preloader /> : <Main cards={ this.state.cards }/>}
          <Footer />
      </div>
    );
  };
}

export default App;
