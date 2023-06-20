import { useNavigation, useRoute } from "@react-navigation/native";
import { ListRealmContext } from "../../models";
import { useCallback, useState } from "react";
import Header from "../../components/Header";
import { AlertContainer, Button, ButtonDelete, ButtonText, Container, DeleteText, Input, InputContainer, InputLabel } from "./styled";
import { Item } from "../../models/Item";
import { Realm } from "@realm/react";
import { TouchableOpacity } from "react-native";

export default function EditItemList({ route }) {
    const item = route.params.item as Item & Realm.Object
    const { useRealm } = ListRealmContext;
    const navigation = useNavigation()
    const [name, setName] = useState(item.name);
    const [modal, setModal] = useState<boolean>(false)

    const realm = useRealm();

    const handleAddItem = () => {
        if (!name) {
            return;
        }
        realm.write(() => {
            item.name = name
        });
        setName("")
        navigation.goBack()
    }

    const deleteItem = useCallback(
        (): void => {
            realm.write(() => {
                realm.delete(item);
            });
            navigation.goBack()
        },
        [realm],
    );

    const handleDeleteItem = (): void => {
        setModal(true)
    }


    return (
        <>
            <Header title="Editar item" />
            <Container>
                <InputContainer>
                    <InputLabel>Editar item</InputLabel>
                    <Input placeholder='Nome do item' onChangeText={value => setName(value)} value={name} />
                </InputContainer>
                <Button onPress={handleAddItem}>
                    <ButtonText>
                        Salvar
                    </ButtonText>
                </Button>
                <TouchableOpacity onPress={handleDeleteItem}>
                    <DeleteText>
                        Excuir item
                    </DeleteText>
                </TouchableOpacity>
            </Container>
            {
                modal &&
                <AlertContainer>
                    <ButtonDelete onPress={deleteItem}>
                        <ButtonText>
                            Excluir item
                        </ButtonText>
                    </ButtonDelete>
                    <TouchableOpacity onPress={() => setModal(false)}>
                        <InputLabel>
                            Cancelar
                        </InputLabel>
                    </TouchableOpacity>
                </AlertContainer>
            }
        </>
    )
}