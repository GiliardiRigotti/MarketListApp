import React, { useState } from 'react';

import { ListRealmContext } from '../../models';
import Header from "../../components/Header";
import { Button, ButtonText, Container, Input, InputContainer, InputLabel } from "./styled";
import { List } from '../../models/List';

//Tela de criação de lista
export default function CreateList({ navigation }) {
    const { useRealm } = ListRealmContext;
    const [title, setTitle] = useState("");
    const realm = useRealm();

    //Adiciona a lista no banco de dados e redireciona para a tela da listagem das listas
    const handleCreateList = () => {
        if (!title) {
            return;
        }
        realm.write(() => {
            return new List(realm, title);
        });
        setTitle("")
        navigation.navigate("ManageLists")
    }


    return (
        <>
            <Header title="Criar Lista" />
            <Container>
                <InputContainer>
                    <InputLabel>Nome da Lista</InputLabel>
                    <Input placeholder='Nome da Lista' onChangeText={value => setTitle(value)} value={title} />
                </InputContainer>
                <Button onPress={handleCreateList}>
                    <ButtonText>
                        Criar Lista
                    </ButtonText>
                </Button>
            </Container>
        </>
    )
}