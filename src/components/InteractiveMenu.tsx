import React, { useState, useMemo } from 'react';
import { Coffee, CupSoda, UtensilsCrossed, Croissant, CakeSlice, Search, Sparkles, MessageCircle } from 'lucide-react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS, CAFE_INFO } from '../data/cafeData';

const CATEGORIES: { key: MenuCategory; label: string; icon: React.ReactNode; description: string }[] = [
  {
    key: 'Coffee',
    label: 'Specialty Coffee',
    icon: <Coffee className="w-3.5 h-3.5" />,
    description: 'Espresso-based classics, single-origin V60 hand brews, and signature chilled extractions.',
  },
  {
    key: 'Non-Coffee',
    label: 'Matcha & Botanicals',
    icon: <CupSoda className="w-3.5 h-3.5" />,
    description: 'Ceremonial Uji matcha, single-estate Borneo cacao, and sparkling botanical infusions.',
  },
  {
    key: 'Breakfast',
    label: 'Morning Bakes & Eggs',
    icon: <Croissant className="w-3.5 h-3.5" />,
    description: 'Available from 8:00 AM. House brioche, organic pasture eggs, artisan sourdough, and granola.',
  },
  {
    key: 'Brunch',
    label: 'Slow Brunch',
    icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
    description: 'Hearty plates, house sourdough toasts, seasonal bowls, and Sarawakian culinary fusions.',
  },
  {
    key: 'Desserts',
    label: 'Artisan Pastry',
    icon: <CakeSlice className="w-3.5 h-3.5" />,
    description: 'Fresh daily bakes, Sarawak Gula Apong basque cheesecake, French canelés, and seasonal tarts.',
  },
];

export const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Coffee');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const activeCategoryMeta = useMemo(() => {
    return CATEGORIES.find((c) => c.key === activeCategory) || CATEGORIES[0];
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !selectedTag || item.tags?.includes(selectedTag);

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  // Extract all unique tags in current category
  const availableTags = useMemo(() => {
    const categoryItems = MENU_ITEMS.filter((i) => i.category === activeCategory);
    const tags = new Set<string>();
    categoryItems.forEach((i) => i.tags?.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [activeCategory]);

  return (
    <section
      id="menu"
      className="w-full py-32 md:py-44 bg-[#FDFCF9] text-[#2C1E16] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-6 bg-[#BF6347]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#BF6347] font-bold block">
              Menu & Offerings
            </span>
            <div className="h-[1px] w-6 bg-[#BF6347]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#2C1E16] mb-4">
            The Daily Menu
          </h2>
          <p className="text-[#2C1E16]/75 text-base md:text-lg font-light leading-relaxed">
            Thoughtfully prepared with honest ingredients, roasted beans, and slow fermentation.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2 sm:gap-3 no-scrollbar border-b border-[#2C1E16]/8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  id={`menu-cat-btn-${cat.key.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setSelectedTag(null);
                  }}
                  className={`flex items-center space-x-2 px-5 sm:px-6 py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-all duration-300 rounded-xs focus:outline-none relative cursor-pointer ${
                    isActive
                      ? 'bg-[#1E130D] text-[#FDFCF9] shadow-sm'
                      : 'bg-[#F7F5F0] text-[#2C1E16]/70 hover:text-[#2C1E16] hover:bg-[#EAE8E2]'
                  }`}
                >
                  <span className={isActive ? 'text-[#D97E63]' : 'text-[#5A5E4B]'}>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description & Filter Toolbar */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-sm sm:text-base text-[#5A5E4B] font-serif italic">
              {activeCategoryMeta.description}
            </p>

            {/* Quick Search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-3.5 h-3.5 text-[#5A5E4B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search ${activeCategoryMeta.label}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-[#F7F5F0] border border-[#2C1E16]/12 rounded-xs text-[#2C1E16] placeholder-[#5A5E4B]/60 focus:outline-none focus:border-[#BF6347] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5A5E4B] hover:text-[#2C1E16]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Tag filters */}
          {availableTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#5A5E4B] mr-2">Filter:</span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-xs border transition-colors cursor-pointer ${
                  selectedTag === null
                    ? 'border-[#BF6347] bg-[#BF6347] text-white'
                    : 'border-[#2C1E16]/12 bg-[#F7F5F0] text-[#2C1E16]/70 hover:border-[#BF6347]/50'
                }`}
              >
                All
              </button>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-xs border transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'border-[#BF6347] bg-[#BF6347] text-white'
                      : 'border-[#2C1E16]/12 bg-[#F7F5F0] text-[#2C1E16]/70 hover:border-[#BF6347]/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Menu Items List - Clean Editorial Layout */}
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center bg-[#F7F5F0] border border-dashed border-[#2C1E16]/15 rounded-xs p-8">
              <p className="text-[#2C1E16]/70 text-sm">No items found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                }}
                className="mt-3 text-[10px] uppercase tracking-widest text-[#BF6347] font-bold underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  id={`menu-item-${item.id}`}
                  className="group pb-8 border-b border-[#2C1E16]/8 flex flex-col justify-between transition-colors hover:border-[#BF6347]/40"
                >
                  <div>
                    {/* Item Name, Badge, and Price Header */}
                    <div className="flex items-baseline justify-between gap-4 mb-2.5">
                      <div className="flex items-center space-x-2.5 flex-wrap">
                        <h4 className="font-serif text-2xl sm:text-3xl text-[#2C1E16] font-normal group-hover:text-[#BF6347] transition-colors">
                          {item.name}
                        </h4>
                        {item.isPopular && (
                          <span className="inline-flex items-center space-x-1 text-[9px] uppercase tracking-widest text-[#BF6347] bg-[#BF6347]/10 px-2 py-0.5 rounded-xs font-bold">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>House Favorite</span>
                          </span>
                        )}
                      </div>

                      {/* Price in Malaysian Ringgit */}
                      <div className="flex items-baseline space-x-1 shrink-0">
                        <span className="text-[10px] text-[#5A5E4B] font-bold uppercase tracking-wider">RM</span>
                        <span className="font-serif text-2xl sm:text-3xl text-[#2C1E16] font-normal">
                          {item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#2C1E16]/75 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Temperature / Tags Footer */}
                  <div className="flex flex-wrap items-center gap-2">
                    {item.temperature && (
                      <span className="text-[9px] uppercase tracking-widest text-[#5A5E4B] font-mono bg-[#EAE8E2] px-2.5 py-0.5 rounded-xs font-semibold">
                        {item.temperature}
                      </span>
                    )}
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] text-[#5A5E4B] border border-[#2C1E16]/10 px-2 py-0.5 rounded-xs font-medium uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Menu Footer Note */}
        <div className="mt-20 pt-8 border-t border-[#2C1E16]/8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5A5E4B] gap-4">
          <p>
            * All prices in Malaysian Ringgit (MYR). Fresh organic oat & soy milk alternatives available (+RM3).
          </p>
          <a
            href={CAFE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[#2C1E16] hover:text-[#BF6347] font-bold text-[10px] tracking-widest uppercase transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#BF6347]" />
            <span>Ask dietary questions via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

