import { Clock } from "lucide-react";
import React from "react";

const NotificationCard = ({ newChapter }: { newChapter: boolean }) => {
  return (
    <div
      className={`${
        newChapter ? "bg-blue-100" : "bg-white"
      } gap-3 p-6  shadow-sm border border-gray-200 rounded-md`}
    >
      <div className="flex flex-row w-full justify-between items-center">
        <p className="text-xl font-medium">New Chapter Added</p>
        <div className="flex flex-row items-center gap-4 text-xs text-gray-600">
          {newChapter && (
            <div className="bg-blue-500 rounded-full text-white px-2 py-0.5 text-xs">
              New
            </div>
          )}
          <div className="flex flex-row items-center gap-1">
            <Clock className="size-3 text-gray-600" />
            <div>
              <p>2h ago</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-justify mt-4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quos
        laboriosam dolor officia, cumque laudantium totam dicta aliquid,
        nesciunt minima quae culpa necessitatibus accusamus! Aliquid alias
        corporis tempore ut, ipsam itaque officia consequatur beatae doloremque
        impedit debitis esse totam sunt repellat, cum dolorem optio voluptatibus
        saepe. Harum et animi adipisci enim quibusdam atque, natus earum
        consequatur similique. Tempore minus ad aliquam dicta illo, sapiente hic
        explicabo facere incidunt, quo blanditiis quia corrupti obcaecati
        provident eveniet officiis atque laudantium neque nostrum ipsum fuga!
        Porro corporis reiciendis quos explicabo repellat itaque eaque eos
        facilis animi a exercitationem sed perspiciatis distinctio, voluptas
        voluptate quam, blanditiis ratione obcaecati. Id, rerum ducimus magni
        debitis fuga et autem officia numquam eius iure praesentium, repellendus
        explicabo deserunt! Nam totam quia ea cum est. Ad earum vero molestiae
        eius hic quod reprehenderit accusamus, atque eveniet aperiam itaque
        harum sint optio architecto, ipsam cum error quos impedit. Dolor,
        tempore?
      </p>
    </div>
  );
};

export default NotificationCard;
