import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {}
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log(state, action)
    }
  }
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer