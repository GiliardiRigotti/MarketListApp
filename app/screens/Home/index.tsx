import { Image } from "react-native";
import { Button, ButtonText, Container, Label } from "./styled";
import { images } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";

export default function Home() {
    const { navigate } = useNavigation()
    const [lists, setLists] = useState(null)


    function handleNavigation() {
        navigate('CreateList')
    }

    const { useQuery } = ListRealmContext;
    const result = useQuery(List);

    useEffect(() => {
        function verifyExistList() {
            if (result.length > 0) {
                setLists(result)
                navigate("ManageLists")
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
            <Button onPress={handleNavigation}>
                <ButtonText>
                    Vamos lá
                </ButtonText>
            </Button>
        </Container>
    )
}