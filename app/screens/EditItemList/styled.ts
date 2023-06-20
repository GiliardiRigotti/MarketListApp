import styled from "styled-components/native"
import { color } from "../../constants/colors"

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${color.black};
    justify-content: center;
    align-items: center;
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

export const ButtonDelete = styled.TouchableOpacity`
    margin-top: 30px;
    width: 60%;
    height: 50px;
    border-radius: 8px;
    background-color: ${color.red};
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${color.black};
`
export const DeleteText = styled.Text`
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${color.red};
`

export const InputContainer = styled.View`
    width: 60%;
`

export const InputLabel = styled.Text`
    font-size: 14px;
    color: ${color.white};
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: color.gray
})`
    height: 50px;
    border-radius: 8px;
    padding-left: 5px;
    background-color: ${color.blackLight};
    color: ${color.gray};
    border-width: 1px;
    border-color: ${color.gray};
`

export const AlertContainer = styled.View`
    width: 100%;
    height: 35%;
    position: absolute;
    bottom: 0;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${color.blackLight};
    align-items: center;
    justify-content: space-around;
`