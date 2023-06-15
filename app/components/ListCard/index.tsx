import { Realm } from "@realm/react";
import { List } from "../../models/List";
import { Card, Label } from "./styled";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ListProps {
    list: List & Realm.Object;
    onDelete: (list: List & Realm.Object) => void;
};

export function ListCard({ list, onDelete }: ListProps) {
    const { navigate } = useNavigation()

    function handleNavigation() {
        navigate("ListItems", { list })
    }
    return (
        <Card>
            <Pressable onPress={handleNavigation}>
                <Label>
                    {list.title}
                </Label>
            </Pressable>
            <Pressable onPress={() => onDelete(list)}>
                <Icon name="trash-can-outline" size={20} color={color.yellow} />
            </Pressable>

        </Card>
    )
}