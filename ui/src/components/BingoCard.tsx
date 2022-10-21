import { Component, For } from "solid-js";
import { useCardDataRepository } from "../contexts/cardData";
import generateShuffledIndices from "../randomizer/shuffledIndices";
import emptyPng from "../assets/x.png";

const sizes: {
  [key: number]: {
    side: number;
    freeSquare: boolean;
  };
} = {
  4: { side: 2, freeSquare: false },
  //8: { side: 3, freeSquare: true },
  9: { side: 3, freeSquare: false },
  16: { side: 4, freeSquare: false },
  //24: { side: 5, freeSquare: true },
  25: { side: 5, freeSquare: false },
  36: { side: 6, freeSquare: false },
  //48: { side: 7, freeSquare: true },
  49: { side: 7, freeSquare: false },
};

const BingoCard: Component = () => {
  console.log("Card");
  const cardDataRepository = useCardDataRepository();

  if (!Object.hasOwn(sizes, cardDataRepository.getTotalSquares())) {
    return (
      <div class="error">
        Size of {cardDataRepository.getTotalSquares()} not valid
      </div>
    );
  }

  const imageData = cardDataRepository.getImageDataList();

  const { side, freeSquare } = sizes[cardDataRepository.getTotalSquares()];
  const getRows = () => {
    const rows = new Array(side);
    const indices = generateShuffledIndices(imageData.length);

    if (freeSquare) {
      const iFreeSquare = Math.floor(imageData.length / 2);
      const withFreeSquare = imageData.slice(0, iFreeSquare);
      withFreeSquare.push("https://api.lorem.space/image/car?w=200&h=200");
      withFreeSquare.push(...imageData.slice(iFreeSquare));

      // TODO: Fix this... reassigning imageData or trying to copy it just
      // breaks reactivity.
      //imageData = withFreeSquare;
    }

    for (let i = 0; i < side; i++) {
      const row: string[] = [];

      for (let j = i * side; j < (i + 1) * side; j++) {
        if (j >= imageData.length) {
          row.push(emptyPng);
        } else {
          row.push(imageData[indices[j]]);
        }
      }

      rows.push(row);
    }

    return rows;
  };

  const a4HeightMM = 297;
  // const a4WidthMM = 210;

  const imgPaddingMM = 3;
  // TODO: This 1.7 is totally arbitrary, printing scale is still weird...
  const boxSizeMM = a4HeightMM / 1.7 / side;
  const imgSizeMM = boxSizeMM - imgPaddingMM;
  const boxSizeStr = boxSizeMM + "mm";
  const imgSizeStr = imgSizeMM + "mm";

  console.log(boxSizeMM);

  return (
    <div>
      <table
        style={{
          "border-collapse": "collapse",
        }}
      >
        <For each={getRows()}>
          {(row) => (
            <tr>
              <For each={row}>
                {(pic: string) => (
                  <td
                    style={{
                      height: boxSizeStr,
                      width: boxSizeStr,
                      "border-width": "2px",
                      "border-style": "solid",
                      "border-color": "black",
                      "text-align": "center",
                      "vertical-align": "middle",
                    }}
                  >
                    <div
                      style={{
                        width: imgSizeStr,
                        height: imgSizeStr,
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
