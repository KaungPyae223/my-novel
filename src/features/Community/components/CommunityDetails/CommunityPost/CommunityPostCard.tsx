const CommunityPostCard = () => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 shadow-xs rounded-lg">
      <div className="flex flex-row items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
          alt=""
          className="size-10 rounded-full"
        />
        <p className="font-medium text-lg">Lourics Chan</p>
        <div className="border border-gray-300 rounded-full px-3 py-0.5 text-xs font-semibold items-center ">Member</div>
        <p className="text-sm text-gray-500">2h ago</p>
      </div>
      <p className=" text-gray-700  mt-5 text-justify line-clamp-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        earum! Minus, animi. Repudiandae non earum saepe rem ipsa modi magnam
        libero culpa assumenda soluta, maiores obcaecati tempora quo minima?
        Placeat nam numquam neque deleniti asperiores porro quae, modi ex
        voluptates quibusdam, obcaecati, quis quod saepe itaque corrupti
        distinctio amet illum.
      </p>
    </div>
  );
};

export default CommunityPostCard;
