export default function IconTile({ icon, label, onClick }) {
  return (
    <div className="iconTile" onClick={onClick} role="button" tabIndex={0}>
      <div className="iconBox">{icon}</div>
      <div style={{ marginTop: 8, fontWeight: 600 }}>{label}</div>
    </div>
  );
}
