import { useEffect, useState } from "react";

interface RoastersProps {
  fetchRoasters: () => Promise<any>;
}

const Roasters = ({ fetchRoasters }: RoastersProps) => {
  const [roasters, setRoasters] = useState();

  useEffect(() => {
    (async () => {
      const { roasters } = await fetchRoasters();
      setRoasters(roasters);
    })();
  }, []);

  return <RoasterList roasters={roasters}>{roasters}</RoasterList>;
};

interface RoasterListProps {
  roasters: any;
}

export function RoasterList({ roasters }: RoasterListProps) {
  return (
    <>
      {roasters && roasters.length > 0 && (
        <span data-testid="roasters">{roasters}</span>
      )}
    </>
  );
}

export default Roasters;
