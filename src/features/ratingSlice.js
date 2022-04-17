import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createRating } from "../api/ratingApi";

export const addRatingToDatabase = createAsyncThunk(
  "create",
  async (ratingData) => {
    const response = await createRating(ratingData);
    return response.data;
  }
);
const initialState = {
  selectedStarRatingIndex: -1,
  selectedTagsRating: {},
  commentText: "",
  isLoading: false,
  isCreateRatingSuccess: false,
  isRatingModalOpening: false,
};

const ratingSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    UPDATE_STAR_RATING_INDEX: (state, action) => {
      state.selectedStarRatingIndex = action.payload;
    },
    UPDATE_SELECTED_TAGS_RATING: (state, action) => {
      state.selectedTagsRating = action.payload;
    },
    UPDATE_TEXT_COMMENT:(state, action) => {
      state.commentText = action.payload;
    },
    CLEAR_RATING_DATA: (state) => {
      state.commentText = "";
      state.selectedTagsRating = {};
      state.selectedStarRatingIndex = -1;
    },
    OPEN_RATING_MODAL: (state) => {
      state.isRatingModalOpening = true;
    },
    CLOSE_RATING_MODAL: (state) => {
      state.isRatingModalOpening = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addRatingToDatabase.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addRatingToDatabase.fulfilled, (state) => {
      state.isLoading = false;
      state.isCreateRatingSuccess = true;
    });
    builder.addCase(addRatingToDatabase.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const isRatingModalOpeningSelector=state=>state.review.isRatingModalOpening
export const commnetTextSelector = (state) => state.review.commentText;
export const selectedStarRatingIndexSelector = (state) =>
  state.review.selectedStarRatingIndex;
export const selectedTagsRatingSelector = (state) =>
  state.review.selectedTagsRating;
export const isLoadingSelector = (state) => state.review.isLoading;
export const isCreateRatingSuccesSelector = (state) =>
  state.review.isCreateRatingSuccess;
export const {
  UPDATE_SELECTED_TAGS_RATING,
  UPDATE_STAR_RATING_INDEX,
  UPDATE_TEXT_COMMENT,
  CLEAR_RATING_DATA,
  OPEN_RATING_MODAL,
  CLOSE_RATING_MODAL
} = ratingSlice.actions;
export default ratingSlice.reducer;
