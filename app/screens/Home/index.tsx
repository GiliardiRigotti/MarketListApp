import { Image } from "react-native";
import { Button, ButtonText, Container, Label } from "./styled";
import { images } from "../../assets";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const { navigate } = useNavigation()

    function handleNavigation() {
        navigate('CreateList')
    }

    return (
        <Container>
            <Image source={images.logo} style={{ width: 200, height: 300, resizeMode: "center", marginBottom: 30 }} />
            <Label>Comece sua primeira lista de compras</Label>
            <Button onPress={handleNavigation}>
                <ButtonText>
                    Vamos lá
                </ButtonText>
            </Button>
        </Container>
    )
}