export default function SectionHeader({ title, right }) {
  return (
    <div className="sectionHeader">
      <div className="sectionTitle">{title}</div>
      <div>{right}</div>
    </div>
  );
}
