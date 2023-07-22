import { Container, Row, Column } from "../Layout";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import './style/site.css';
const Navbar = () => {
    return (
        <Container>
            <Nav className="justify-space-between">
                <Column className="">
                    <p>Connor Brinkley</p>
                </Column>
                <Column className="align-right nav-links">
                    <Link to="/" className="active">Home</Link>
                    <Link to="/about" className="active">About Page</Link>
                    <Link to="/contact" className="active">Contact Page</Link>
                    <Link to="/projects" className="active">Projects Page</Link>
                </Column>
            </Nav>
        </Container>
    );
}
const Nav = styled(Row)`
`;

const Link = styled(NavLink)`
  color: blue;
  
  &:visited{
    text-decoration: none;
  }
  &:hover {
    color: red;
  }
`


export default Navbar;