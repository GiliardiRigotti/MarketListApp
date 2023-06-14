import React, { useCallback, useState } from 'react';

import { TaskRealmContext, ListRealmContext } from '../../models';
import Header from "../../components/Header";
import { Button, ButtonText, Container, Input, InputContainer, InputLabel } from "./styled";
import { List } from '../../models/List';
import { color } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function CreateList() {
    const { useRealm } = ListRealmContext;
    const { navigate } = useNavigation()
    const [title, setTitle] = useState("");

    const realm = useRealm();

    const handleCreateList = () => {
        if (!title) {
            return;
        }
        realm.write(() => {
            return new List(realm, title);
        });
        navigate("ManageLists")
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