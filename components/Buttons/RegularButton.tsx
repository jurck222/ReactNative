import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import { 
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native"

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: ${colors.primary};
    border-radius: 20px
`;
interface ButtonProps{
    btnStyle?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
    <ButtonView onPress={props.onPress} style={props.btnStyle}>
        <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
    );
};

export default RegularButton;