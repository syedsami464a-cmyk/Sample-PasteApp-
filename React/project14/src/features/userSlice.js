import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 1️⃣ Define async thunk
export const fetchUser = createAsyncThunk(
  'user/fetchUser',             // action type
  async (userId) => {           // payload creator
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json()           // this becomes action.payload
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default userSlice.reducer
