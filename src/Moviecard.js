import React from "react";
import './index.css';

class MovieCard extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0, 
            fav: false,
            isInCart: false
        }
        // 3 ways of binding.... reson don't want to lost 'this'
        //1.globlely binding-- this.addStars = this.addStars.bind(this); ---> we can mantion it here directly and use this.addStars
        //2. local binding--- this.addStars.bind(this) use directly
        // 3. make function arrow function
    }

    addStars = () => {
        if(this.state.stars >= 5){
            return;
        }

        // form1
        // this.setState({
        //     stars: this.state.stars + 0.5
        // });

        // form2
        this.setState((prevState) => {
            return{
                stars: prevState.stars + 0.5
            }
        });

        // this.state.stars += 0.5;
    }

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
        const {title, plot, price, rating, stars} = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" 
                            src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
                        />
                    </div>

                    <div className="right">
                        <div className="title">{this.state.title}</div>
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
                                    onClick = {this.addStars}    
                                />

                                <span>{stars}</span>
                            </div>

                            {/* {this.fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                                    <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={ this.state.fav? "unfavourite-btn" : "favourite-btn" } onClick={this.handleFav}>{ this.state.fav ? "Un-favourite" : "Favourite" }</button>


                            <button className={this.state.isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                                {this.state.isInCart ? "Remove from Cart":"Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default MovieCard;