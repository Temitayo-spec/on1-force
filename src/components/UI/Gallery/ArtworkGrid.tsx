import ArtworkCard from './ArtworkCard';

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default ArtworkGrid;
