import FollowingAuthorCard from "../components/FollowingAuthorCard";

const FollowingPage = () => {
  return (
    <div className="py-9 px-6 mx-auto max-w-6xl">
      <p className="font-semibold text-3xl">Followings</p>
      <p className="text-gray-600 mt-3">
        Keep up with your favorite authors
      </p>
      <div className="mt-6 grid grid-cols-3 gap-5">
        <FollowingAuthorCard />
        <FollowingAuthorCard />
        <FollowingAuthorCard />
      </div>
    </div>
  );
};

export default FollowingPage;
