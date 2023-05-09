import { Text } from "@chakra-ui/react";
import useHooks from "../hooks/useHooks";

const GameGrid = () => {
  const { games, error } = useHooks();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
