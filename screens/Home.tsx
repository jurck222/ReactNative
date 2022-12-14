import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { Container } from "../components/shared";
import { colors } from "../components/colors";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    return(
        <HomeContainer>
            <StatusBar style="dark"></StatusBar>
        </HomeContainer>
    );
};

export default Home;