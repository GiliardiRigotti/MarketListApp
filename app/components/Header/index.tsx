import { TouchableOpacity } from "react-native"
import { color } from "../../constants/colors"
import { Container, Title } from "./styled"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"

interface Props {
    title?: string
    goBack?: boolean
}

export default function Header({ title, goBack = true }: Props) {
    const navigation = useNavigation()
    function handleNavigation() {
        navigation.goBack()
    }
    return (
        <Container>
            <StatusBar backgroundColor={color.black} translucent={true} style="light" />
            {
                goBack &&
                <TouchableOpacity onPress={handleNavigation}>
                    <Icon name="arrow-left" size={25} color={color.white} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            }

            <Title>{title}</Title>
        </Container>
    )
}