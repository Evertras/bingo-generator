// Go up to 6 for now...
const sizes: { [key: number]: number } = {
  1: 1,
  4: 2,
  8: 3,
  9: 3,
  16: 4,
  24: 5,
  25: 5,
  36: 6,
};

const BingoCard = ({ pictures }: { pictures: string[] }) => {
  if (!Object.hasOwn(sizes, pictures.length)) {
    return <div class="error">Size of {pictures.length} not valid</div>;
  }

  const side = sizes[pictures.length];
  const rows: string[][] = new Array(side);

  for (let i = 0; i < side; i++) {
    rows.push(pictures.slice(i * side, (i + 1) * side));
  }

  console.log(pictures);
  console.log(rows);

  return (
    <div>
      Bingo
      <table>
        <For each={rows}>
          {(row) => (
            <tr>
              <For each={row}>{(pic) => <td>{pic}</td>}</For>
            </tr>
          )}
        </For>
      </table>
    </div>
  );
};

export default BingoCard;
