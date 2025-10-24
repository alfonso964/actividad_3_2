export default function TooltipButton({ texto, tooltip }) {
  return (
    <div className="tooltip" data-tip={tooltip}>
      <button className="btn btn-primary">{texto}</button>
    </div>
  );
}
