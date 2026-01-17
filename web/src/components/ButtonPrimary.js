export default function ButtonPrimary({ label, onClick }) {
  return (
    <button className="btnPrimary" onClick={onClick}>
      {label}
    </button>
  );
}
