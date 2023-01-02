import {Stack,Box} from '@mui/material';
import React from 'react';
import {VideoCard,ChannelCard,Loader} from './';
const Video = ({ tmp }) => {
  if(!tmp?.length) return <Loader />;
  return (
   <Stack  direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {tmp.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
   </Stack>
  )
}

export default Video
