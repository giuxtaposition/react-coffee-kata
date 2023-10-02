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

  return <RoasterList roasters={roasters} />;
};

interface RoasterListProps {
  roasters?: string[];
}

export function RoasterList({ roasters }: RoasterListProps) {
  return (
    <>
      {roasters && roasters.length > 0 && (
        <div data-testid="roasters">
          {roasters.map((roaster) => (
            <span key={roaster}>{roaster}</span>
          ))}
        </div>
      )}
    </>
  );
}

export default Roasters;
