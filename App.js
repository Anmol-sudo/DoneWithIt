import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon"

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My title"
        subTitle="My subtitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
