import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  return (
    <div className="relative">
      <label className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full px-4 py-3 pr-10 bg-cream border border-border text-charcoal text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light pointer-events-none" />
      </div>
    </div>
  );
}

interface PriceRangeFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function PriceRangeFilter({ min, max, value, onChange }: PriceRangeFilterProps) {
  return (
    <div>
      <label className="block text-xs tracking-wide uppercase text-muted-foreground mb-2">
        Price Range
      </label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
          className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-gold"
        />
        <span className="text-sm text-charcoal whitespace-nowrap min-w-[80px] text-right">
          Up to ${value[1].toLocaleString()}
        </span>
      </div>
    </div>
  );
}

interface ProductFiltersProps {
  categories: string[];
  materials: string[];
  vibes: string[];
  selectedCategory: string;
  selectedMaterial: string;
  selectedVibe: string;
  priceRange: [number, number];
  maxPrice: number;
  onCategoryChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
  onVibeChange: (value: string) => void;
  onPriceChange: (value: [number, number]) => void;
}

export function ProductFilters({
  categories,
  materials,
  vibes,
  selectedCategory,
  selectedMaterial,
  selectedVibe,
  priceRange,
  maxPrice,
  onCategoryChange,
  onMaterialChange,
  onVibeChange,
  onPriceChange,
}: ProductFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cream-dark p-6 lg:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FilterDropdown
          label="Category"
          options={categories}
          value={selectedCategory}
          onChange={onCategoryChange}
        />
        <FilterDropdown
          label="Material"
          options={materials}
          value={selectedMaterial}
          onChange={onMaterialChange}
        />
        <FilterDropdown
          label="Vibe"
          options={vibes}
          value={selectedVibe}
          onChange={onVibeChange}
        />
        <PriceRangeFilter
          min={0}
          max={maxPrice}
          value={priceRange}
          onChange={onPriceChange}
        />
      </div>
    </motion.div>
  );
}
