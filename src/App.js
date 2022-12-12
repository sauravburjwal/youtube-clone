import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Box } from '@mui/material';
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
  ErrorPage,
} from './components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Feed
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTearm" element={<SearchFeed />} />
          <Route
            path="*"
            element={
              <ErrorPage
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
