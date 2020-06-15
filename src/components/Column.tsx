import React, {PropsWithChildren} from "react"
import { ColumnContainer, ColumnTitle } from "../styles"
import {AddNewItem} from "./AddNewItem";
import {useAppState} from "../AppStateContext";
import {Card} from "./Card";

interface ColumnProps {
    text?: string,
    index: number
}

export const Column = ({
                           text,
                           index
                       }: React.PropsWithChildren<ColumnProps>) => {
    const {state} = useAppState()

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card key={task.id} text={task.text}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}