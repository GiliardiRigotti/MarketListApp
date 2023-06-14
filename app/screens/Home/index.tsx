import { Image } from "react-native";
import { Button, ButtonText, Container, Label } from "./styled";
import { images } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";

const { useQuery, useRealm } = ListRealmContext;
export default function Home() {
    const { navigate } = useNavigation()
    const result = useQuery(List);

    const lists = useMemo(() => result.sorted('createdAt'), [result]);

    function handleNavigation() {
        navigate('CreateList')
    }

    useEffect(() => {
        function verifyExistList() {
            if (lists.length > 0) {
                navigate("ManageLists")
            }
        }
        verifyExistList()
    }, [])

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