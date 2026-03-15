import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Search tasks...' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        value={query}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
      />
      {query && (
        <button className="clear-btn" onClick={() => handleChange('')}>
          Clear
        </button>
      )}
    </div>
  );
}
