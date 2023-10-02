import { render, waitFor } from "@testing-library/react";
import Roasters from "../views/Roasters";

describe("Roasters", () => {
  it("shows no roasters", async () => {
    // Arrange / Given
    const fetchRoasters = async () => {
      const roasters = null;
      return { roasters };
    };
    const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);

    // Act / When
    let roasterList;
    await waitFor(() => {
      roasterList = roasters.queryByTestId("roasters");
    });

    // Assert / Then
    expect(roasterList).toBeNull();
  });

  it('shows text "Hello World"', async () => {
    const roastersData = { roasters: "Hello World" };
    const fetchRoasters = async () => roastersData;

    let roasterList;
    const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);
    await waitFor(() => {
      roasterList = roasters.queryByTestId("roasters");
      expect(roasterList).toHaveTextContent("Hello World");
    });
  });
});
