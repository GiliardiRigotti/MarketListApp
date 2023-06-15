import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";
import Header from "../../components/Header";
import { Button, ButtonText, Card, Container, Line } from "./styled";
import { ListCard } from "../../components/ListCard";
import { Item } from "../../models/Item";
import { ItemCard } from "../../components/ItemCard";
import { Realm } from "@realm/react";



export default function ListItems({ route }) {
    const { useQuery, useRealm } = ListRealmContext;
    const list = route.params.list
    const realm = useRealm();
    const result = useQuery(Item);
    const { navigate } = useNavigation()

    const items = useMemo(() => result.filter(item => item.listId.equals(list._id)), [result]);

    console.log(items)

    const handleDeleteTask = useCallback(
        (item: Item & Realm.Object): void => {
            realm.write(() => {
                realm.delete(item);
            });
        },
        [realm],
    );

    const handleAddItemList = () => {
        navigate("AddItem", { list })
    }

    useEffect(() => {
        function checkListLength() {
            if (items.length < 1) {
                navigate("AddItem", { list })
            }
        }
        checkListLength()
    }, [items])


    return (
        <>
            <Header title={list.title} />
            <Container>
                {
                    items.map((item, index) =>
                        <Card key={index}>
                            <ItemCard key={index} item={item} onDelete={handleDeleteTask} />
                            {
                                index + 1 < items.length &&
                                <Line />
                            }
                        </Card>
                    )
                }
                <Button onPress={handleAddItemList}>
                    <ButtonText>
                        Adicionar Item
                    </ButtonText>
                </Button>
            </Container>
        </>
    )
}