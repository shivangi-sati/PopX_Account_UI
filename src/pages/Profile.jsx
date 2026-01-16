import profilePic from "../assets/profile.png";

export const Profile = ({ name, email }) => {
  const cameraIcon =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 2l1.83 2H14l1.83-2H19a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h4zm3 5a5 5 0 100 10 5 5 0 000-10z'/%3E%3C/svg%3E";

  return (
    <div className="bg-[#f7f8f9] min-h-screen">
      
      <div className="bg-white px-6 py-4 border-b border-white">
        <h1 className="text-lg font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          
          <div className="relative w-16 h-16">
            <img
              src={profilePic}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#6C25FF] rounded-full flex items-center justify-center border-2 border-white">
              <img src={cameraIcon} alt="camera" className="w-4 h-4" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-900 leading-tight">
              {name || "User Name"}
            </p>
            <p className="text-sm text-[#5e6266]">
              {email || "example@domain.com"}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#5e6266] leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam
        </p>

        <div className="border-t border-dashed border-gray-300 mb-8" />

        <div className="h-90" />
        <div className="border-t border-dashed border-gray-300" />
      </div>
    </div>
  );
}
