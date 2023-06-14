import styled from "styled-components/native"
import { color } from "../../constants/colors"

export const Container = styled.View`
    flex: 1;
    background-color: ${color.black};
    align-items: center;
    justify-content: center;
`

export const Label = styled.Text`
    font-size: 20px;
    text-align: justify;
    color: ${color.white};
`

export const Button = styled.TouchableOpacity`
    margin-top: 30px;
    width: 60%;
    height: 50px;
    border-radius: 8px;
    background-color: ${color.yellow};
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${color.black};
`