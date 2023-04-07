interface OpenCardProps {
  data: { index: number; url: string } | null;
  onCrossClick: () => void;
}

function OpenCard({ data, onCrossClick }: OpenCardProps) {
  const handleCrossClick = () => {
    onCrossClick();
  };
  return (
    <div className="overlay">
      <div className="open-card">
        <div className="cross" onClick={handleCrossClick}>
          <img src="/cross.png" alt="close" className="close-icon" />
        </div>
        {data && data.index} {data && data.url}
      </div>
    </div>
  );
}

export default OpenCard;
