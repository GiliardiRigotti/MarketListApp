import { useCallback, useEffect, useMemo } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";
import Header from "../../components/Header";
import { Button, ButtonText, Card, Container, Line } from "./styled";
import { ListCard } from "../../components/ListCard";
import { useNavigation } from "@react-navigation/native";


export default function ManageLists() {
    const { useQuery, useRealm } = ListRealmContext;
    const realm = useRealm();
    const result = useQuery(List);
    const { navigate } = useNavigation()

    const lists = useMemo(() => result.sorted('createdAt'), [result]);


    const handleDeleteTask = useCallback(
        (list: List & Realm.Object): void => {
            realm.write(() => {
                realm.delete(list);
            });
        },
        [realm],
    );

    const handleNavigationCreateList = () => {
        navigate("CreateList")
    }

    useEffect(() => {
        function checkListLength() {
            if (lists.length == 0) {
                navigate("CreateList")
            }
        }
        checkListLength()
    }, [lists])


    return (
        <>
            <Header title="Minhas Listas" goBack={false} />
            <Container>
                {
                    lists.map((item, index) =>
                        <Card key={index}>
                            <ListCard key={index} list={item} onDelete={handleDeleteTask} />
                            {
                                index + 1 < lists.length &&
                                <Line />
                            }
                        </Card>
                    )
                }
                <Button onPress={handleNavigationCreateList}>
                    <ButtonText>
                        Criar Lista
                    </ButtonText>
                </Button>
            </Container>
        </>
    )
}