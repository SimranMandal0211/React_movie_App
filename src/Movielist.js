import MovieCard from "./Moviecard";

function MovieList(props){
        // const {title, plot, price, rating, stars, fav, isInCart} = this.state.movies;
        const {movies, addStars, decStars, toggleFav, toggleCart} = props;

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

export default MovieList;