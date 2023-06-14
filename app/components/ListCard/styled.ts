import { styled } from "styled-components/native";
import { color } from "../../constants/colors";

export const Card = styled.View`
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`

export const Label = styled.Text`
    font-size: 20px;
    color: ${color.white};
`