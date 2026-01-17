export default function IconGrid({ items = [], columns = 3 }) {
  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  };
  return (
    <div style={gridStyle}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            width: `${100 / columns}%`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {it.component}
        </div>
      ))}
    </div>
  );
}
