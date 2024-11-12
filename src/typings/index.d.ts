interface Artwork {
  id: number;
  imageUrl: StaticImageData;
  type: string;
  background: string;
  face: string;
}

interface Artwork {
  id: number;
  imageUrl: StaticImageData;
  type: string;
  background: string;
  face: string;
}

interface FilterState {
  type: string;
  background: string;
  face: string;
}

interface Artwork {
  id: number;
  imageUrl: StaticImageData;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

interface FilterState {
  type: string;
  background: string;
  face: string;
}

interface BackgroundOption {
  name: string;
  count: number;
}

interface FaceOption {
  name: string;
  count: number;
}

interface NFTFilterSidebarProps {
  frameEnabled: boolean;
  setFrameEnabled: (enabled: boolean) => void;
  tokenSearch: string;
  setTokenSearch: (search: string) => void;
  walletSearch: string;
  setWalletSearch: (search: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedFilters: FilterState;
  backgrounds: BackgroundOption[];
  faces: FaceOption[];
  onBackgroundSelect: (background: string) => void;
  onFaceSelect: (face: string) => void;
  expandedSections: string[];
  toggleSection: (section: string) => void;
}

interface ScrambleTextProps {
  targetText: string;
  className?: string;
  duration?: number;
}
