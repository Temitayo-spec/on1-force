import Image from 'next/image';

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div className="group cursor-pointer">
      <div className="max-w-[11.8125rem] overflow-hidden rounded-lg">
        <Image
          src={artwork.imageUrl}
          alt={`Artwork ${artwork.id}`}
          className="w-full  h-auto object-contain transition-transform ease-in-out group-hover:scale-105"
          quality={100}
        />
      </div>
      <div className="text-white mt-2">#{artwork.id}</div>
    </div>
  );
};

export default ArtworkCard;
