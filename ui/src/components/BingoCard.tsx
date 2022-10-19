// Go up to 6 for now...
const sizes: {
  [key: number]: {
    side: number;
    freeSquare: boolean;
  };
} = {
  4: { side: 2, freeSquare: false },
  8: { side: 3, freeSquare: true },
  9: { side: 3, freeSquare: false },
  16: { side: 4, freeSquare: false },
  24: { side: 5, freeSquare: true },
  25: { side: 5, freeSquare: false },
  36: { side: 6, freeSquare: false },
};

const BingoCard = ({ pictures }: { pictures: string[] }) => {
  if (!Object.hasOwn(sizes, pictures.length)) {
    return <div class="error">Size of {pictures.length} not valid</div>;
  }

  const { side } = sizes[pictures.length];
  const rows: string[][] = new Array(side);

  for (let i = 0; i < side; i++) {
    rows.push(pictures.slice(i * side, (i + 1) * side));
  }

  const boxSize = 130 / side + "mm";
  const imgSize = 118 / side + "mm";

  return (
    <div>
      Bingo
      <table
        style={{
          "border-collapse": "collapse",
        }}
      >
        <For each={rows}>
          {(row) => (
            <tr>
              <For each={row}>
                {(pic) => (
                  <td
                    style={{
                      height: boxSize,
                      width: boxSize,
                      "border-width": "2px",
                      "border-style": "solid",
                      "border-color": "black",
                      "text-align": "center",
                      "vertical-align": "middle",
                    }}
                  >
                    <div
                      style={{
                        width: imgSize,
                        height: imgSize,
                        margin: "0 auto",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          "object-fit": "contain",
                        }}
                        src={pic}
                      />
                    </div>
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </table>
    </div>
  );
};

export default BingoCard;
