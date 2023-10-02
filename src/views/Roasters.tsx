import {useEffect, useState} from "react";

interface RoastersProps {
    fetchRoasters: () => Promise<RoasterListProps>;
}

interface RoasterListProps {
    roasters: Roaster[] | null;
}

interface Roaster {
    name: string;
    type: string;
}

const Roasters = ({fetchRoasters}: RoastersProps) => {
    const [roasters, setRoasters] = useState<Roaster[] | null>(null);

    useEffect(() => {
        (async () => {
            const {roasters} = await fetchRoasters();
            setRoasters(roasters);
        })();
    }, [fetchRoasters]);

    return <RoasterList roasters={roasters}/>;
};

export function RoasterList({roasters}: RoasterListProps) {
    const [roasterList, setRoasterList] = useState(roasters);

    useEffect(() => {
        setRoasterList(roasters);
    }, [roasters]);

    const handleClear = () => {
        setRoasterList([]);
    };

    return (
        <>
            <button data-testid="clear-btn" onClick={handleClear}>Clear</button>
            {roasterList && roasterList.length > 0 && (
                <div data-testid="roasters">
                    {roasterList.map((roaster) => (
                        <span key={roaster.name}>{roaster.name}</span>
                    ))}
                </div>
            )}
        </>
    );
}

export default Roasters;
