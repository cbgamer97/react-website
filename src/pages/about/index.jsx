import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {AppWrapper, Container, Row, Column} from "../../components/layout/index.js";

const about = () => {
    return (
        <Container>
            <Row className="justify-center">
                <Column className='justify-center align-center'>
                    <h1>About</h1>
                </Column>
            </Row>
        </Container>
    )
}

export default about;