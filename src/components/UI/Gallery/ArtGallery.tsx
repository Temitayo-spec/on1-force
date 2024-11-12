'use client';
import { useState, useEffect } from 'react';
import ArtworkGrid from './ArtworkGrid';

import Image from 'next/image';
import refresh_icon from '@/svgs/refresh.svg';
import NFTFilterSidebar from './Sidebar';

const IntegratedGallery: React.FC<{ initialArtworks: Artwork[] }> = ({
  initialArtworks,
}) => {
  const [artworks] = useState<Artwork[]>(initialArtworks);
  const [filteredArtworks, setFilteredArtworks] =
    useState<Artwork[]>(initialArtworks);
  const [searchTerm, setSearchTerm] = useState('');
  const [tokenSearch, setTokenSearch] = useState('');
  const [walletSearch, setWalletSearch] = useState('');
  const [frameEnabled, setFrameEnabled] = useState(false);
  const [expandedSections, setExpandedSections] = useState(['background']);
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    type: '',
    background: '',
    face: '',
  });

  const backgrounds = artworks
    ? Object.entries(
        artworks.reduce((acc: Record<string, number>, artwork) => {
          acc[artwork.background] = (acc[artwork.background] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, count]) => ({
        name,
        count,
      }))
    : [];

  const faces = artworks
    ? Object.entries(
        artworks.reduce((acc: Record<string, number>, artwork) => {
          acc[artwork.face] = (acc[artwork.face] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, count]) => ({
        name,
        count,
      }))
    : [];

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleBackgroundSelect = (background: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      background: prev.background === background ? '' : background,
    }));
  };

  const handleFaceSelect = (face: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      face: prev.face === face ? '' : face,
    }));
  };

  useEffect(() => {
    if (!artworks) return;

    let results = artworks;

    if (tokenSearch) {
      results = results.filter((artwork) =>
        artwork.id.toString().includes(tokenSearch)
      );
    }

    if (selectedFilters.background) {
      results = results.filter(
        (artwork) => artwork.background === selectedFilters.background
      );
    }

    if (selectedFilters.face) {
      results = results.filter(
        (artwork) => artwork.face === selectedFilters.face
      );
    }

    if (searchTerm) {
      results = results.filter((artwork) =>
        artwork.background.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredArtworks(results);
  }, [searchTerm, selectedFilters, tokenSearch, walletSearch, artworks]);

  const filterCount =
    Object.values(selectedFilters).filter(Boolean).length +
    (tokenSearch ? 1 : 0) +
    (walletSearch ? 1 : 0);

  return (
    <div className="flex items-start gap-4 w-[90%] max-w-screen-xl mx-auto">
      <NFTFilterSidebar
        frameEnabled={frameEnabled}
        setFrameEnabled={setFrameEnabled}
        tokenSearch={tokenSearch}
        setTokenSearch={setTokenSearch}
        walletSearch={walletSearch}
        setWalletSearch={setWalletSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilters={selectedFilters}
        backgrounds={backgrounds}
        faces={faces}
        onBackgroundSelect={handleBackgroundSelect}
        onFaceSelect={handleFaceSelect}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
      />

      <div
        className="space-y-4 max-h-[90vh] overflow-y-auto"
        data-lenis-prevent
      >
        <div className="flex items-center gap-2 text-xl">
          <span className="flex items-center gap-2">
            {filteredArtworks.length}{' '}
            <Image
              src={refresh_icon}
              alt="refresh icon"
              className="cursor-pointer"
            />
          </span>
          <span>|</span>
          <span>Filter {filterCount}</span>
        </div>
        <ArtworkGrid artworks={filteredArtworks} />
      </div>
    </div>
  );
};

export default IntegratedGallery;
