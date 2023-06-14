import { TouchableOpacity } from "react-native"
import { color } from "../../constants/colors"
import { Container, Title } from "./styled"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native"

interface Props {
    title?: string
}

export default function Header({ title }: Props) {
    const navigation = useNavigation()
    function handleNavigation() {
        navigation.goBack()
    }
    return (
        <Container>
            <TouchableOpacity onPress={handleNavigation}>
                <Icon name="arrow-left" size={25} color={color.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <Title>{title}</Title>
        </Container>
    )
}