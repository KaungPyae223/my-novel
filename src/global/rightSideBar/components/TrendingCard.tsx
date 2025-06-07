const TrendingCard = ({ title, author }: { title: string; author: string }) => {
  return (
    <div>
      <p className="font-medium font-poppins">{title}</p>
      <p className="text-sm text-gray-800 pt-0.5">
        by <span className="text-gray-500">{author}</span>
      </p>
    </div>
  );
};

export default TrendingCard;
