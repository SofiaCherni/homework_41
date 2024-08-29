import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsState {
  albums: Album[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AlbumsState = {
  albums: [],
  status: 'idle',
  error: null,
};

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  return response.json() as Promise<Album[]>;
});

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default albumsSlice;
