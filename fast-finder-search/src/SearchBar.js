import React, { useState } from 'react';
import { countriesData } from './countriesData';
import './SearchBar.css'; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);  
  };


  const filteredCountries = countriesData.filter((country) => 
    country.country.toLowerCase().includes(searchTerm.toLowerCase()) || country.capital.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="search-bar-container">
      <input className="search-input" type="text" placeholder="Search for a country or capital ..." value={searchTerm}  onChange={handleSearch}/>
    
      <ul className="countries-list">
        {filteredCountries.map((country, index) => (
          <li key={index} className="country-item">
            <div className="country-name">{country.country}</div>
            <div className="country-capital">{country.capital}</div>
            <div className="country-info">
              Population: {country.population.toLocaleString()}
              <br />
              Language: {Array.isArray(country.official_language) ? country.official_language.join(', ') : country.official_language}
              <br />
              Currency: {country.currency}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;