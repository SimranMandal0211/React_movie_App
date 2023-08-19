import React from "react";
import './index.css';

class MovieCard extends React.Component{

// these functions are work when props not use and add this.state in constructor ....
    // addStars = () => {
    //     if(this.state.stars >= 5){
    //         return;
    //     }

    //     // form1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // });

    //     // form2
    //     this.setState((prevState) => {
    //         return{
    //             stars: prevState.stars + 0.5
    //         }
    //     });

    //     // this.state.stars += 0.5;
    // }

    decStars = () => {
        if(this.state.stars <= 0){
            return;
        }
        // form1
        this.setState({
            stars: this.state.stars - 0.5
        });
    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    toggleCart= () => {
        this.setState({
            isInCart: !this.state.isInCart
        })
    }

    render(){
        console.log(this.props);
        const {movies, addStars} = this.props;

        const {title, poster, plot, price, rating, stars, fav, isInCart} = this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" 
                            src={poster}
                        />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                    onClick = {this.decStars}
                                />

                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png"
                                    onClick = {() => {addStars(movies)}}    
                                />

                                <span>{stars}</span>
                            </div>

                            {/* {this.fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                                    <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={ fav? "unfavourite-btn" : "favourite-btn" } onClick={this.handleFav}>{ fav ? "Un-favourite" : "Favourite" }</button>


                            <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                                {isInCart ? "Remove from Cart":"Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default MovieCard;