import { useNavigation, useRoute } from "@react-navigation/native";
import { ListRealmContext } from "../../models";
import { useCallback, useState } from "react";
import Header from "../../components/Header";
import { AlertContainer, Button, ButtonDelete, ButtonText, Container, DeleteText, Input, InputContainer, InputLabel } from "./styled";
import { Item } from "../../models/Item";
import { Realm } from "@realm/react";
import { TouchableOpacity } from "react-native";

//Tela de edição do item da lista
export default function EditItemList({ navigation, route }) {
    const item = route.params.item as Item & Realm.Object
    const { useRealm } = ListRealmContext;
    const [name, setName] = useState(item.name);
    const [modal, setModal] = useState<boolean>(false)

    const realm = useRealm();

    //Altera o nome do item e volta na lista dos items
    const handleEditItem = () => {
        if (!name) {
            return;
        }
        realm.write(() => {
            item.name = name
        });
        setName("")
        navigation.goBack()
    }

    //Deleta o item do banco de dados e volta na tela dos items
    const deleteItem = useCallback(
        (): void => {
            realm.write(() => {
                realm.delete(item);
            });
            navigation.goBack()
        },
        [realm],
    );

    //Faz a ação de abrir o modal que confirma se quer excluir mesmo o objeto
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
                <Button onPress={handleEditItem}>
                    <ButtonText>
                        Salvar
                    </ButtonText>
                </Button>
                <TouchableOpacity onPress={handleDeleteItem}>
                    <DeleteText>
                        Excluir item
                    </DeleteText>
                </TouchableOpacity>
            </Container>
            {//Modal que se abre para fazer a confirmação da exclusão do item
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