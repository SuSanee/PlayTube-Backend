import coverImage from "../../assets/images/temp_cover_image.jpg";
import profileImage from "../../assets/images/jerryyy.jpg";

const ChannelProfile = () => {
  return (
    <>
      <div className="flex flex-col text-white w-full">
        <div className="flex flex-col">
          <img src={coverImage} className="h-50" />
          <div className="flex justify-between px-6 items-center">
            <div className="flex gap-4">
              <img
                src={profileImage}
                className="w-30 h-30 rounded-full -my-4 px-0"
              />
              <div className="flex flex-col py-6">
                <span className="text-xl font-medium">Yash Mittal</span>
                <span>@YashMittal</span>
                <div className="flex gap-5">
                  <span>600k Subscribers</span>
                  <span>220 Subscribed</span>
                </div>
              </div>
            </div>
            <button className="bg-(--theme-color) py-2 px-5 rounded-4xl">
              Subscribe
            </button>
          </div>
        </div>
        <div className="px-7 py-6 flex gap-7 flex-wrap">
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
          <div className="flex flex-col pb-3 gap-2">
            <img src={coverImage} className="w-72 h-50 rounded-lg" />
            <div className="flex flex-col gap-0.5">
              <span>React Rodemap</span>
              <span>chai aur code</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelProfile;
