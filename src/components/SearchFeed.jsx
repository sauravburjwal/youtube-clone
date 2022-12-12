import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTearm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTearm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTearm]);

  return (
    <Box display="flex" p="2">
      <Box sx={{ color: 'white', mr: { sm: '100px' } }} />
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={5}
          sx={{ color: 'white' }}
        >
          Search Result for:{' '}
          <span style={{ color: '#F31503' }}>{searchTearm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
