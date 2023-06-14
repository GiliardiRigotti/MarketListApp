import { color } from "../../constants/colors"
import { Container, Title } from "./styled"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

interface Props {
    title?: string
}

export default function Header({ title }: Props) {
    return (
        <Container>
            <Icon name="arrow-left" size={25} color={color.white} style={{ marginLeft: 10 }} />
            <Title>{title}</Title>
        </Container>
    )
}