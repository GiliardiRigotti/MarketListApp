import styled from "styled-components/native"
import { color } from "../../constants/colors"

export const Container = styled.View`
    flex: 1;
    background-color: ${color.black};
    align-items: center;
`

export const Label = styled.Text`
    font-size: 20px;
    text-align: justify;
    color: ${color.white};
`

export const Card = styled.View`
    width: 100%;
    align-items: center;
`

export const Line = styled.View`
    width: 80%;
    border-bottom-width: 1px;
    border-color: ${color.gray};
`

export const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: 40px;
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

export const Navbar = styled.View`
    width: 80%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const Title = styled.Text`
    color: ${color.yellow};
    font-size: 20px;
`