import {AppWrapper, Container, Row, Column} from "../../components/layout/index.js";

const contact = () => {
    return (
        <Container>
            <Row className="justify-center">
                <Column className='justify-center align-center'>
                    <h1>Contact</h1>
                </Column>
            </Row>
            <Row className="justify-center">
                <Column className='justify-center align-center'>
                    <h2>Websites</h2>
                    <div className="website-wrapper">
                        <div className="linked-in">
                            <a target="_blank" href="@{https://www.linkedin.com/in/connorbrinkley/}">
                                <p>Linked In</p>
                                <img alt="linkedin" src="/images/linkedin.svg"></img>
                            </a>
                        </div>
                        <div className="github">
                            <a target="_blank" href="@{https://github.com/cbgamer97}">
                                <p>GitHub</p>
                                <img alt="github" src="/images/github.svg"></img>
                            </a>
                        </div>
                    </div>
                </Column>
                <Column className='justify-center align-center'>
                    <p>Email: <a th:href="'mailto:' + ${email}">Connor.F.Brinkley@gmail.com</a></p>
                </Column>
            </Row>
        </Container>
    )
}