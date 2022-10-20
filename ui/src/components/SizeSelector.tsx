import { For } from "solid-js";

const SizeSelector = ({ setSize }: { setSize: (size: number) => void }) => {
  const sizes = [3, 4, 5, 6, 7];

  return (
    <div>
      <For each={sizes}>
        {(size) => (
          <div
            style={{
              width: "100px",
              height: "50px",
              "background-color": "salmon",
              "font-size": "18px",
              cursor: "pointer",
              margin: "3px",
              display: "flex",
              "align-items": "center",
              "text-align": "center",
              "vertical-align": "middle",
              "border-radius": "5px",
            }}
            onClick={() => setSize(size)}
          >
            <div
              style={{
                margin: "auto",
              }}
            >
              {size}x{size} ({size * size})
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default SizeSelector;
