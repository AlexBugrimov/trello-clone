import * as React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./components/Column";
import {AddNewItem} from "./components/AddNewItem";
import {useAppState} from "./AppStateContext";

export default () => {
    const {state} = useAppState()

    return (
        <AppContainer>
            {state.lists.map((list, i) => (
                <Column key={list.id} text={list.text} index={i}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}/>
        </AppContainer>
    );
}
