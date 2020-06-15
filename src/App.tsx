import * as React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./components/Column";
import {Card} from "./components/Card";
import {AddNewItem} from "./components/AddNewItem";

export default () => {
  return (
      <AppContainer>
          <Column text="To Do">
              <Card text="Generate app scaffold" />
          </Column>
          <Column text="In Progress">
              <Card text="Learn Typescript" />
          </Column>
          <Column text="Done">
              <Card text="Begin to use static typing" />
          </Column>
          <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppContainer>
  );
}
