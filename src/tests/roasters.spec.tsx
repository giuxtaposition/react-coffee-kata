import {render, waitFor, screen} from "@testing-library/react";
import Roasters from "../views/Roasters";

const roastersData = {
    roasters: [
        {name: "Brasile", type: "Dark Roast"},
        {name: "Colombia", type: "Light Roast"}
    ]
};

describe("Roasters", () => {
    it("shows no roasters", async () => {
        // Arrange / Given
        const fetchRoasters = async () => {
            const roasters = null;
            return {roasters};
        };
        const roasters = render(<Roasters fetchRoasters={fetchRoasters}/>);

        // Act / When
        let roasterList;
        await waitFor(() => {
            roasterList = roasters.queryByTestId("roasters");
        });

        // Assert / Then
        expect(roasterList).toBeNull();
    });

    it("shows a list of coffee roasters", async () => {
        const fetchRoasters = async () => roastersData;

        render(<Roasters fetchRoasters={fetchRoasters}/>);

        await waitFor(() => {
            expect(screen.getByText("Brasile")).toBeVisible();
            expect(screen.getByText("Colombia")).toBeVisible();
        });
    });

    it("clears the list of coffee roasters", async () => {
        const fetchRoasters = async () => roastersData;

        const roasters = render(<Roasters fetchRoasters={fetchRoasters}/>);

        await waitFor(() => {
            const clearBtn = roasters.queryByTestId("clear-btn") as HTMLButtonElement;
            clearBtn.click();

            expect(screen.queryByText("Brasile")).not.toBeInTheDocument();
            expect(screen.queryByText("Colombia")).not.toBeInTheDocument();
        });
    });
});
