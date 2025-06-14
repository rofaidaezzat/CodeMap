import Input from "@/Ui/Input";
import React, { useState, useEffect } from "react";
import "./Search.css";
import { useGetTracksQuery } from "@/app/services/GetTracks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickedIdAction } from "@/app/features/clickedIdSlice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Array<{_id: string, title: string}>>([]);
  const { data: tracks } = useGetTracksQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm && tracks) {
      const filteredTracks = tracks.filter(track => 
        track.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredTracks);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, tracks]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (track: {_id: string, title: string}) => {
    dispatch(clickedIdAction(track._id));
    navigate(`/Tracks/InfoOfFrontend`);
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  return (
    <div className="container-search">
      <div className="search-container">
        <Input 
          className="input" 
          type="text" 
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          placeholder="Search tracks..."
        />
        <svg viewBox="0 0 24 24" className="search__icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((track) => (
            <div
              key={track._id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(track)}
            >
              {track.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
