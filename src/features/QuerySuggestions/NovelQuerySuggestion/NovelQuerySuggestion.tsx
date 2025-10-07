import React from "react";
import NovelQuerySuggestionCard from "./NovelQuerySuggestionCard";

const NovelQuerySuggestion = () => {
  const datas = [
    {
      id: 1,
      title: "Occaecati dolore.",
      description: [
        'Laborum dolorem eaque sed <span class="highlight">ad</span>. Alias et labore quibusdam. Veritatis aliquid quibusdam quaerat fuga omnis vitae veniam. Eum sit tempora tempora omnis ex qui soluta. Voluptate necessitatibus accusamus beatae fuga porro. Distinctio illo maxime optio atque animi rerum. Et rerum commodi temporibus sunt.',
      ],
      image:
        "https://images.unsplash.com/photo-1756806983687-203048d56220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Harum odio inventore totam.",
      description: [
        'Incidunt natus aut dolor deleniti deserunt consequatur libero. Labore in recusandae similique aut occaecati omnis <span class="highlight">ad</span>. Cum debitis pariatur voluptatem et eveniet neque. Minima quae veniam qui fuga. Excepturi eligendi molestiae repellat iusto. Consequatur dolorem unde ut ratione et. Corporis aut aut nulla ullam.',
      ],
      image:
        "https://images.unsplash.com/photo-1756806983687-203048d56220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Eligendi dolores nihil voluptatibus.",
      description:
        "Necessitatibus ea praesentium et nostrum magnam possimus velit. Nihil repellat et id placeat tempora facilis libero. Repellendus nesciunt quia voluptatem. Sequi voluptatem recusandae ratione dignissimos optio. Dolore blanditiis accusamus maiores sunt laudantium labore qui.",
      image:
        "https://images.unsplash.com/photo-1756806983687-203048d56220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Et illo tempore facere.",
      description:
        "Atque aperiam repellendus nesciunt quam labore hic ut. Dolore est sapiente atque sit. Sequi animi aliquid magnam repudiandae ex quo. Hic cum repudiandae id corrupti aut. Consequatur esse suscipit est.",
      image:
        "https://images.unsplash.com/photo-1756806983687-203048d56220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Dignissimos dolor minus.",
      description:
        "Provident ut sint officiis esse et officia. Magni esse consequatur et ratione assumenda sequi. Quisquam eum laborum placeat amet at. Aut tempore voluptate non blanditiis. Quisquam laudantium esse vitae eum. Qui modi qui rerum doloremque omnis aperiam natus placeat. Est aut doloribus reiciendis similique quis earum quo aspernatur.",
      image:
        "https://images.unsplash.com/photo-1756806983687-203048d56220?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  if (datas.length === 0) return null;

  return (
    <div className="absolute w-full transform translate-y-1.5 border border-gray-300 shadow-md z-10 bg-white rounded-md">
      <p className="text-gray-400 text-sm p-2">suggestions</p>
      <div
        className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto p-2"
      >
        {datas.map((data: any) => (
          <NovelQuerySuggestionCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NovelQuerySuggestion;
