import { styled } from "styled-components/native";
import { color } from "../../constants/colors";

export const Container = styled.View`
    height: 100px;
    width: 100%;
    flex-direction: row;
    background-color: ${color.black};
    align-items: center;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${color.white};
    text-transform: uppercase;
    margin-left: 20px;
`