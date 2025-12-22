import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserDetails,
  updateAvatarImage,
  updateCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// secured routes :- only authorized user can access
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh_token").post(refreshAccessToken);
router.route("/change_password").post(verifyJWT, changeCurrentPassword);
router.route("/current_user").get(verifyJWT, getCurrentUser);
router.route("/update_user").post(verifyJWT, updateUserDetails);
router
  .route("/update_avatar")
  .post(verifyJWT, upload.single("avatar"), updateAvatarImage);
router
  .route("/update_coverImage")
  .post(verifyJWT, upload.single("coverImage"), updateCoverImage);

export default router;
