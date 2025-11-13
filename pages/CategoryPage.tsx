import React, { useState, useMemo } from 'react';
import { Product, Category, View } from '../types';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  category: Category;
  products: Product[];
  navigateTo: (view: View) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, products, navigateTo }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);

  const brands = useMemo(() => [...new Set(products.map(p => p.brand))], [products]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return brandMatch && priceMatch;
    });
  }, [products, selectedBrands, priceRange]);

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{category.name}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Browse our selection of the latest and greatest {category.name.toLowerCase()}. Found {filteredProducts.length} items.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <aside className="lg:w-1/4">
          <div className="sticky top-24">
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Filters</h2>
                {/* Brand Filter */}
                <div>
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Brand</h3>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center">
                        <input
                          id={`brand-${brand}`}
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandChange(brand)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-gray-600 dark:text-gray-300">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                   <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Price Range</h3>
                   <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                     <span>GH₵{priceRange[0]}</span>
                     <span>GH₵{priceRange[1] === 50000 ? '50000+' : priceRange[1]}</span>
                   </div>
                   <input
                      type="range"
                      min="0"
                      max="50000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                   />
                </div>

             </div>
          </div>
        </aside>
        
        {/* Product Grid */}
        <main className="lg:w-3/4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 gap-x-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => navigateTo({ page: 'product', product })} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">No Products Found</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;