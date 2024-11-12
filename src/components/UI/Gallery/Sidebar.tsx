import Image from 'next/image';
import CustomSwitch from '@/components/Common/CustomSwitch';
import search_icon from '@/svgs/search.svg';

const NFTFilterSidebar: React.FC<NFTFilterSidebarProps> = ({
  frameEnabled,
  setFrameEnabled,
  tokenSearch,
  setTokenSearch,
  walletSearch,
  setWalletSearch,
  searchTerm,
  setSearchTerm,
  selectedFilters,
  backgrounds,
  faces,
  onBackgroundSelect,
  onFaceSelect,
  expandedSections,
  toggleSection,
}) => {
  return (
    <div className="w-full max-w-md text-white max-h-[90vh] overflow-y-auto" data-lenis-prevent>
      <div className="flex items-center justify-between mb-4 bg-foreground py-3 px-4 rounded-lg">
        <span className="leading-[150%] font-medium">ON1 Frames</span>
        <CustomSwitch
          checked={frameEnabled}
          onCheckedChange={setFrameEnabled}
        />
      </div>

      <div className="space-y-3">
        <div className="relative">
          <Image
            src={search_icon}
            alt="search icon"
            className="absolute left-3 top-3 h-6 w-6"
          />
          <input
            type="text"
            placeholder="Token ID"
            className="w-full bg-foreground pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 text-base leading-[150%]"
            value={tokenSearch}
            onChange={(e) => setTokenSearch(e.target.value)}
          />
        </div>

        <div className="relative">
          <Image
            src={search_icon}
            alt="search icon"
            className="absolute left-3 top-3 h-6 w-6"
          />
          <input
            type="text"
            placeholder="Owner Wallet Address"
            className="w-full bg-foreground pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 text-base leading-[150%]"
            value={walletSearch}
            onChange={(e) => setWalletSearch(e.target.value)}
          />
        </div>

        <div className="bg-foreground py-3 px-4 rounded-lg">
          <button
            className="w-full flex justify-between items-center"
            onClick={() => toggleSection('background')}
          >
            <span className="font-medium leading-[150%]">Background</span>
            <span className="text-xl">
              {expandedSections.includes('background') ? '−' : '+'}
            </span>
          </button>

          {expandedSections.includes('background') && (
            <div className="mt-4 space-y-2">
              <div className="relative">
                <Image
                  src={search_icon}
                  alt="search icon"
                  className="absolute left-3 top-3 h-6 w-6"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-foreground pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700 text-base leading-[150%] border border-white/30"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="max-h-64 overflow-y-auto space-y-3">
                {backgrounds.map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border border-white/50 ${
                        selectedFilters.background === item.name
                          ? 'bg-force_peach'
                          : ''
                      }`}
                      onClick={() => onBackgroundSelect(item.name)}
                    />
                    <span className="flex-1 text-white/80 text-sm">
                      {item.name}
                    </span>
                    <span className="text-white/80">{item.count}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-foreground py-3 px-4 rounded-lg">
          <button
            className="w-full flex justify-between items-center"
            onClick={() => toggleSection('face')}
          >
            <span className="font-medium leading-[150%]">Face</span>
            <span className="text-xl">
              {expandedSections.includes('face') ? '−' : '+'}
            </span>
          </button>

          {expandedSections.includes('face') && (
            <div className="mt-4 space-y-2">
              <div className="max-h-64 overflow-y-auto space-y-3">
                {faces.map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border border-white/50 ${
                        selectedFilters.face === item.name
                          ? 'bg-force_peach'
                          : ''
                      }`}
                      onClick={() => onFaceSelect(item.name)}
                    />
                    <span className="flex-1 text-white/80 text-sm">
                      {item.name}
                    </span>
                    <span className="text-white/80">{item.count}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTFilterSidebar;
