import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useMemo } from "react";
import { ListRealmContext } from "../../models";
import Header from "../../components/Header";
import { Button, ButtonText, Card, Container, Line, Navbar, Title } from "./styled";
import { Item } from "../../models/Item";
import { ItemCard } from "../../components/ItemCard";
import { Realm } from "@realm/react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/colors";



export default function ListItems({ route, navigation }) {
    const { useQuery, useRealm } = ListRealmContext;
    const list = route.params.list
    const realm = useRealm();
    const result = useQuery(Item);

    const items = useMemo(() => result.filter(item => item.listId.equals(list._id)), [result]);

    const handleEditItem = (item: Item & Realm.Object): void => {
        navigation.navigate("EditItem", { item })
    }

    const handleCheckItem = useCallback(
        (item: Item & Realm.Object): void => {
            realm.write(() => {
                item.inCart = !item.inCart
            });
        },
        [realm],
    );

    const handleAddItemList = () => {
        navigation.navigate("AddItem", { list })
    }

    useEffect(() => {
        function checkListLength() {
            if (items.length < 1) {
                navigation.navigate("AddItem", { list })
            }
        }
        checkListLength()
    }, [items])


    return (
        <>
            <Header title={list.title} />
            <Container>
                <Navbar>
                    <Title>
                        Adicionar item
                    </Title>
                    <TouchableOpacity onPress={handleAddItemList}>
                        <Icon name="plus-box" size={20} color={color.yellow} />
                    </TouchableOpacity>
                </Navbar>
                {
                    items.map((item, index) =>
                        <Card key={index}>
                            <ItemCard key={index} item={item} onCheck={handleCheckItem} onEdit={handleEditItem} />
                            {
                                index + 1 < items.length &&
                                <Line />
                            }
                        </Card>
                    )
                }
            </Container>
        </>
    )
}