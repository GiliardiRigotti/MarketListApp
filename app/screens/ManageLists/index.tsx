import { useCallback, useMemo } from "react";
import { ListRealmContext } from "../../models";
import { List } from "../../models/List";
import Header from "../../components/Header";
import { Container } from "./styled";
import { ListCard } from "../../components/ListCard";

const { useQuery, useRealm } = ListRealmContext;
export default function ManageLists() {
    const realm = useRealm();
    const result = useQuery(List);

    const lists = useMemo(() => result.sorted('createdAt'), [result]);


    const handleDeleteTask = useCallback(
        (list: List & Realm.Object): void => {
            realm.write(() => {
                realm.delete(list);
            });
        },
        [realm],
    );


    return (
        <>
            <Header title="Listas" />
            <Container>
                {
                    lists.map((item, index) => <ListCard key={index} list={item} onDelete={handleDeleteTask} />)
                }
            </Container>
        </>
    )
}