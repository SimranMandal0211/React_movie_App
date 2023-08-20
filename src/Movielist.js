import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{

    render(){
        // const {title, plot, price, rating, stars, fav, isInCart} = this.state.movies;
        const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;

        return(
            <>
               {movies.map((movie) =>  
                    <MovieCard  movies = {movie} 
                                addStars = {addStars}
                                decStars = {decStars}
                                toggleCart = {toggleCart}
                                toggleFav = {toggleFav}
                                key = {movie.id}
                    />
                )}
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