// This Navbar.js not used in code 
// this is for practice different method of styling webpage

import styled from "styled-components";

//3. style components
const Nav = styled.div`
    width: 100%;
    height: 70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px;

    &:hover{color: #0f0}
`;

const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartCount = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    fontSize: 12px;
    visibility: ${(props) => props.show ? "visible" : "hidden"};
`;

function Navbar(props){
        const {cartCount}= props;
        return(
            <>
                <Nav>
                    <Title> Movie APP </Title>
                    <div style={styles.cartContainer}>
                        <CartImg src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart icon" style={styles.cartIcon}></CartImg>
                        <CartCount color = "yellow" show = {true}>{cartCount}</CartCount>
                    </div>
                </Nav>
            </>
        )
}

export default Navbar;

// 1. import style.css
// 2. inline styling---> declaring object outside
const styles = {
    cartContainer:{
        position: "relative",
        cursor: "pointer",
    },
    cartIcon: {
        height: 48,
        marginRight: 20
    }
}
