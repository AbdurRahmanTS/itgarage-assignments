import { Container } from "@mui/material";
import Content from "../Content/Content";
import Header from "../Header/Header";


const Main = () => {
    return (
        <Container fixed>
            <Header />
            <Content />
        </Container>
    );
};

export default Main;