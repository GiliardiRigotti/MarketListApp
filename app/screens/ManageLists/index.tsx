import { useCallback, useEffect, useMemo } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";
import Header from "../../components/Header";
import { Button, ButtonText, Card, Container, Line } from "./styled";
import { ListCard } from "../../components/ListCard";
import { ScrollView } from "react-native";

//Tela de gerenciamento das listas
export default function ManageLists({ navigation }) {
    const { useQuery, useRealm } = ListRealmContext;
    const realm = useRealm();
    const result = useQuery(List);

    //Verifica se houve a alteração na listas, caso não houver, não deixa a tela se carregar novamente para evitar baixa performace do dispositivo
    const lists = useMemo(() => result.sorted('createdAt'), [result]);

    //Deleta a lista
    const handleDeleteList = useCallback(
        (list: List & Realm.Object): void => {
            realm.write(() => {
                realm.delete(list);
            });
        },
        [realm],
    );

    //Leva a tela para adicionar lista 
    const handleNavigationCreateList = () => {
        navigation.navigate("CreateList")
    }

    //Verificação se a lista esta vazia, caso esteja ele ja redireciona para a tela de criar lista
    useEffect(() => {
        function checkListLength() {
            if (lists.length == 0) {
                navigation.navigate("CreateList")
            }
        }
        checkListLength()
    }, [lists])


    return (
        <>
            <Header title="Minhas Listas" goBack={false} />
            <Container>
                <ScrollView
                    style={{ width: "100%" }}
                >
                    {//Exibe todas as listas criadas
                        lists.map((item, index) =>
                            <Card key={index}>
                                <ListCard list={item} onDelete={handleDeleteList} />
                                {
                                    index + 1 < lists.length &&
                                    <Line />
                                }
                            </Card>
                        )
                    }
                </ScrollView>
                <Button onPress={handleNavigationCreateList}>
                    <ButtonText>
                        Criar Lista
                    </ButtonText>
                </Button>
            </Container>
        </>
    )
}