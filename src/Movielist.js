import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies : [
                {
                    title: "The Avengers",
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    plot: "Supernatural powers shown in the movie.",
                    price: 199,
                    rating: 8.9,
                    stars: 0, 
                    fav: false,
                    isInCart: false
                },
                {
                    title: "Iron Man",
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates",
                    price: 399,
                    rating: 8.5,
                    stars: 0, 
                    fav: false,
                    isInCart: false
                },
                {
                    title: "The Dark Knight",
                    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
                    price: 299,
                    rating: 9.0,
                    stars: 0, 
                    fav: false,
                    isInCart: false
                },
                
            ]
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
        // const {title, plot, price, rating, stars, fav, isInCart} = this.state.movies;
        const {movies} =this.state;

        return(
            <>
               {movies.map((movie) =>  <MovieCard movies = {movie} addStars= {this.handleIncStar} decStars= {this.handleDecStar} toggleFav= {this.handleFav} toggleCart= {this.handleCart} />)}
            </>

            // <MovieCard title= {title}
            //             plot= {plot}
            //             price= {price}
            //             rating= {rating}
            //             stars= {stars}
            //             fav= {fav}
            //             isInCart= {isInCart}
            // />
        )
    }

}

export default MovieList;