import { useCallback, useEffect, useMemo } from "react";
import { ScrollView } from "react-native";
import { ListRealmContext } from "../../models";
import Header from "../../components/Header";
import { Card, Container, Line, Navbar, Title } from "./styled";
import { Item } from "../../models/Item";
import { ItemCard } from "../../components/ItemCard";
import { Realm } from "@realm/react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/colors";


//Tela de vizualização dos items de uma lista especifica
export default function ListItems({ route, navigation }) {
    const { useQuery, useRealm } = ListRealmContext;
    const list = route.params.list //Aqui indica de quais items sera exibido referenciando a lista
    const realm = useRealm();
    const result = useQuery(Item);

    //Verifica se houve a alteração na lista dos items e filtra os items da lista especificada
    const items = useMemo(() => result.filter(item => item.listId.equals(list._id)), [result]);

    //Redireciona para a tela de edição de item, passando a referencia dele nos parametros
    const handleEditItem = (item: Item & Realm.Object): void => {
        navigation.navigate("EditItem", { item })
    }

    //Muda o estado "check" do item
    const handleCheckItem = useCallback(
        (item: Item & Realm.Object): void => {
            realm.write(() => {
                item.inCart = !item.inCart
            });
        },
        [realm],
    );

    //Redireciona para a tela de adição de item, passando a referencia da lista nos parametros
    const handleAddItemList = () => {
        navigation.navigate("AddItem", { list })
    }

    //Faz a verificação de possui items na lista, caso não possuir, ele redireciona para a tela para adicionar item passando a lista como referencia nos parametros
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
                        <Icon name="plus-box" size={25} color={color.yellow} />
                    </TouchableOpacity>
                </Navbar>
                <ScrollView
                    style={{ width: "100%" }}
                >
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
                </ScrollView>
            </Container>
        </>
    )
}