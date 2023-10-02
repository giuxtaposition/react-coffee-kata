import {useEffect, useState} from "react";

interface RoastersProps {
    fetchRoasters: () => Promise<{
        roasters: string[] | null;
    }>;
}

const Roasters = ({fetchRoasters}: RoastersProps) => {
    const [roasters, setRoasters] = useState<string[] | null>(null);

    useEffect(() => {
        (async () => {
            const {roasters} = await fetchRoasters();
            setRoasters(roasters);
        })();
    }, [fetchRoasters]);

    return <RoasterList roasters={roasters}/>;
};

interface RoasterListProps {
    roasters: string[] | null;
}

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
            <button onClick={handleClear} data-testid="clear-btn">Clear</button>
            {roasterList && roasterList.length > 0 && (
                <div data-testid="roasters">
                    {roasterList.map((roaster) => (
                        <span key={roaster}>{roaster}</span>
                    ))}
                </div>
            )}
        </>
    );
}

export default Roasters;
