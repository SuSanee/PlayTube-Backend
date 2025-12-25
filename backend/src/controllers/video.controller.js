import { asyncHandler } from "../utils/asyncHandler";
import { Video } from "../models/video.models";
import { ApiError } from "../utils/ApiError";
import { removeFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary";
import { ApiResponse } from "../utils/ApiResponse";
import { User } from "../models/user.models";

const uploadVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and description are required");
  }

  const videoLocalPath = req.files?.videoFile[0]?.path;
  const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
  if (!videoLocalPath || !thumbnailLocalPath) {
    throw new ApiError(400, "Both Video and Thumbnail are required");
  }

  const videoFile = await uploadOnCloudinary(videoLocalPath);
  const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

  if (!videoFile || !thumbnail) {
    throw new ApiError(400, "Error on uploading video on cloudinary");
  }

  const video = await Video.create({
    videoFile: videoFile.url,
    videoPublicId: videoFile.public_id,
    thumbnail: thumbnail.url,
    thumbnailPublicId: thumbnail.public_id,
    title,
    description,
    duration: videoFile.duration,
    owner: req.user._id,
    isPublished: false,
  });

  if (!video) {
    throw new ApiError(500, "Something went wrong while uploading video");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, video, "Video uploaded successfully"));
});

const updateVideoDetails = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title?.trim() && !description?.trim()) {
    throw new ApiError(400, "Atleast one field is required to update");
  }

  const updateFields = {};

  if (title?.trim()) {
    updateFields.title = title?.trim();
  }

  if (description?.trim()) {
    updateFields.description = description?.trim();
  }

  const videoId = req.params._id;

  const video = await Video.findByIdAndUpdate(
    videoId,
    {
      $set: updateFields,
    },
    { new: true }
  );

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, video, "Video details updated successfully"));
});

const updateThumbnail = asyncHandler(async (req, res) => {
  const thumbnailLocalPath = req.file?.path;

  if (!thumbnailLocalPath) {
    throw new ApiError(400, "Thumbnail is required");
  }

  const video = await Video.findById(req.params._id);

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  if (video.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to update this video");
  }

  const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

  if (!thumbnail) {
    throw new ApiError(400, "Error while uploading thumbnail on cloudinary");
  }

  const oldThumbnailPublicId = video.thumbnailPublicId;

  video.thumbnail = thumbnail.url;
  video.thumbnailPublicId = thumbnail.public_id;

  await video.save({ validateBeforeSave: false });

  if (oldThumbnailPublicId) {
    await removeFromCloudinary(oldThumbnailPublicId);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, video, "Thumbnail updated successfully"));
});

const deleteVideo = asyncHandler(async (req, res) => {
  const videoId = req.params._id;

  const video = await Video.findById(videoId);

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  if (video.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to delete this video");
  }

  if (video.videoPublicId) {
    await removeFromCloudinary(video.videoPublicId);
  }

  if (video.thumbnailPublicId) {
    await removeFromCloudinary(video.thumbnailPublicId);
  }

  await Video.findByIdAndDelete(videoId);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Video deleted successfully"));
});

const getChannelVideos = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username) {
    throw new ApiError(400, "Username is required");
  }

  const user = await User.findOne({ username: username.toLowerCase() });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const videos = await Video.find({ owner: user._id, isPublished: true });

  return res
    .status(200)
    .json(new ApiResponse(200, videos, "Channel videos fetched successfully"));
});

export {
  uploadVideo,
  updateVideoDetails,
  updateThumbnail,
  getChannelVideos,
  deleteVideo,
};
