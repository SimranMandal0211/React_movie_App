import React from "react";
import MovieList from "./Movielist";
import Navbar from "./Navbar";

import { movies } from "./moviesData";
import "./index.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount: 0
    }
    // 3 ways of binding.... reson don't want to lost 'this'
    //1.globlely binding-- this.addStars = this.addStars.bind(this); ---> we can mantion it here directly and use this.addStars
    //2. local binding--- this.addStars.bind(this) use directly
    // 3. make function arrow function
}

handleIncStar = (movie) => {
    const {movies} = this.state;
    const mid = this.state.movies.indexOf(movie);

    console.log('mid Inc---> ', mid);
    if(movies[mid].stars >= 5){
        return;
    }

    movies[mid].stars += 0.5;

    this.setState({
        movies: movies
    })
}

handleDecStar = (movie) => {
    const {movies} = this.state;
    const mid = this.state.movies.indexOf(movie);

    console.log('mid Dec---> ', mid);
    if(movies[mid].stars <= 0){
        return;
    }

    movies[mid].stars -= 0.5;

    this.setState({
        movies: movies
    })
}

handleFav = (movie) => {
    const {movies} = this.state;
    const mid = this.state.movies.indexOf(movie);
    console.log('fav---> ', mid, 'movies--->',movies);

    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies: movies
    })
    
}

handleCart = (movie) => {
    const {movies} = this.state;
    const mid = this.state.movies.indexOf(movie);
    console.log('Cart---> ', mid, 'movies--->',movies);

    movies[mid].isInCart = !movies[mid].isInCart;
    this.setState({
        movies: movies
    })
}


  render(){
    const {movies} = this.state;

    return (
      <>
       <Navbar />
       <MovieList movies = {movies}
                  addStars = {this.handleIncStar}
                  decStars = {this.handleDecStar}
                  toggleFav = {this.handleFav}
                  toggleCart = {this.handleCart}
       />
      </>
     );
  }
}

export default App;
