import CommunityCard from "@/features/Community/components/CommunityPage/Community/CommunityCard";
import CommunitySearch from "../Community/CommunitySearch";

const CommunityContainer = () => {
  return (
    <div className="mt-6 space-y-6">
      <CommunitySearch />
      <div className="grid grid-cols-3 gap-5">
        <CommunityCard isCreated={false} />
        <CommunityCard isCreated={false} />
        <CommunityCard isCreated={false} />
      </div>
    </div>
  );
};

export default CommunityContainer;
