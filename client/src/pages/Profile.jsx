import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="Profile"
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="bg-slate-700 p-3 uppercase text-white rounded-lg disabled:opacity-95 hover:opacity-95">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
