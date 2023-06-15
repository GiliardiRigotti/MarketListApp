import { Realm } from "@realm/react";
import { Card, Label } from "./styled";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/colors";
import { Pressable } from "react-native";
import { Item } from "../../models/Item";

interface itemProps {
    item: Item & Realm.Object;
    onDelete: (item: Item & Realm.Object) => void;
};

export function ItemCard({ item, onDelete }: itemProps) {
    return (
        <Card>
            <Label>
                {item.name}
            </Label>
            <Pressable onPress={() => onDelete(item)}>
                <Icon name="trash-can-outline" size={20} color={color.yellow} />
            </Pressable>

        </Card>
    )
}