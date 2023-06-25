import { useNavigation, useRoute } from "@react-navigation/native";
import { ListRealmContext } from "../../models";
import { useState } from "react";
import Header from "../../components/Header";
import { Button, ButtonText, Container, Input, InputContainer, InputLabel } from "./styled";
import { Item } from "../../models/Item";
import { List } from "../../models/List";
import { Realm } from "@realm/react";

export default function AddItemList({ navigation, route }) {
    const list = route.params.list as List & Realm.Object
    const { useRealm } = ListRealmContext;
    const [name, setName] = useState("");

    const realm = useRealm();

    const handleAddItem = () => {
        if (!name) {
            return;
        }
        realm.write(() => {
            return new Item(realm, name, list._id);
        });
        setName("")
        navigation.navigate("ListItems", { list })
    }


    return (
        <>
            <Header title="Adicionar item" />
            <Container>
                <InputContainer>
                    <InputLabel>Nome do item</InputLabel>
                    <Input placeholder='Nome do item' onChangeText={value => setName(value)} value={name} />
                </InputContainer>
                <Button onPress={handleAddItem}>
                    <ButtonText>
                        Adicionar
                    </ButtonText>
                </Button>
            </Container>
        </>
    )
}