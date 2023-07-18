import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {AppWrapper, Container, Row, Column} from "../../components/layout/index.js";

const home = () => {
    return (
        <Container>
            <Row className="justify-center">
                <Column className="">
                    <h1>Home</h1>
                </Column>
            </Row>
        </Container>
    )
}

export default home;