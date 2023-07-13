import { Image } from "react-native";
import { Button, ButtonText, Container, Label } from "./styled";
import { images } from "../../assets";
import { useEffect, useState } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";

export default function Home({ navigation }) {
    const [lists, setLists] = useState(null)


    function handleNavigation() {
        navigation.navigate('CreateList')
    }

    const { useQuery } = ListRealmContext;
    const result = useQuery(List);

    useEffect(() => {
        function verifyExistList() {
            if (result.length > 0) {
                setLists(result)
                navigation.navigate("ManageLists")
            }
        }
        if (lists == null) {
            verifyExistList()
        }
        return () => { }
    }, [lists])

    return (
        <Container>
            <Image source={images.logo} style={{ width: 200, height: 300, resizeMode: "center", marginBottom: 30 }} />
            <Label>Comece sua primeira lista de compras</Label>
            <Button testID="click-me-button" onPress={handleNavigation}>
                <ButtonText>
                    Vamos lá
                </ButtonText>
            </Button>
        </Container>
    )
}