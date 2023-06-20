import { Realm } from "@realm/react";
import { Card, Label } from "./styled";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { color } from "../../constants/colors";
import { Pressable } from "react-native";
import { Item } from "../../models/Item";

interface itemProps {
    item: Item & Realm.Object;
    onEdit: (item: Item & Realm.Object) => void;
    onCheck: (item: Item & Realm.Object) => void;
};

export function ItemCard({ item, onCheck, onEdit }: itemProps) {
    return (
        <Card>
            <Pressable onPress={() => onCheck(item)}>
                {
                    item.inCart ?
                        <Icon name="checkbox-marked" size={20} color={color.yellow} />
                        :
                        <Icon name="checkbox-blank-outline" size={20} color={color.gray} />
                }
            </Pressable>
            <Label>
                {item.name}
            </Label>
            <Pressable onPress={() => onEdit(item)}>
                <Icon name="pencil" size={20} color={color.yellow} />
            </Pressable>

        </Card>
    )
}