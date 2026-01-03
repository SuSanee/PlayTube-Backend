import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../utility/apiRequest";

export const updateUserDetails = createAsyncThunk(
  "user/updateDetails",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiRequest("/api/users/update-details", {
        method: "PUT",
        body: JSON.stringify(data),
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      await apiRequest("/api/users/change-password", {
        method: "PUT",
        body: JSON.stringify(data),
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (avatarFile, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatarFile);

      const response = await apiRequest("/api/users/avatar", {
        method: "PUT",
        body: formData,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCoverImage = createAsyncThunk(
  "user/updateCoverImage",
  async (coverFile, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("coverImage", coverFile);

      const response = await apiRequest("/api/users/cover", {
        method: "PUT",
        body: formData,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserChannel = createAsyncThunk(
  "user/fetchChannel",
  async (username, { rejectWithValue }) => {
    try {
      const response = await apiRequest(`/api/users/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchWatchHistory = createAsyncThunk(
  "user/fetchWatchHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest("/api/users/watch-history");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    watchHistory: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },
    clearUserData: (state) => {
      state.profile = null;
      state.watchHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith("user/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("user/") && action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          if (action.payload) {
            state.profile = action.payload;
          }
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("user/") && action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearUserError, clearUserData } = userSlice.actions;
export default userSlice.reducer;
