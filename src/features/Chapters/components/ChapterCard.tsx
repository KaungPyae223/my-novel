import {
  Heart,
  Languages,
  Pause,
  Play,
  Share2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChapterCard = () => {
  const [fontSize, setFontSize] = React.useState<number>(16);

  const handleZoomIn = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };

  const handleZoomOut = () => {
    if (fontSize > 16) {
      setFontSize((prevFontSize) => prevFontSize - 1);
    }
  };

  const playVoice = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        " Go for the Tekos or Rohit Medium tutorials—both show how to call ElevenLabs via Next.js API routes and play back high-quality speech.If you'd like, I can summarize the code, help pick one based on your needs (e.g., TypeScript, simple UI control), or even outline a custom blog post yourself. Want me to do that?"
      );
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
    setIsPlaying("pause");
  };

  const stopVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying("play");
  };

  const [isPlaying, setIsPlaying] = React.useState<"play" | "pause" | "resume">(
    "play"
  );

  const pauseVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();
    }
    setIsPlaying("resume");
  };

  const resumeVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.resume();
    }
    setIsPlaying("pause");
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-xl">Chapter 1: The Discovery</p>
          <p className="text-sm text-gray-500 mt-1.5">Chapter 1 of 21</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs mb-0.5 text-gray-800">Font Size</p>
            <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              <ZoomOut
                className="size-4 cursor-pointer"
                onClick={handleZoomOut}
              />
              <div className="border-l border-gray-300 h-4"></div>
              <p className="text-sm pointer-events-none">{fontSize}</p>
              <div className="border-l border-gray-300 h-4"></div>
              <ZoomIn
                className="size-4 cursor-pointer"
                onClick={handleZoomIn}
              />
            </div>
          </div>

          <div>
            <p className="text-xs mb-0.5 text-gray-800">Voice</p>
            <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              {isPlaying === "pause" ? (
                <Pause onClick={pauseVoice} className="size-4 cursor-pointer" />
              ) : isPlaying === "resume" ? (
                <Play onClick={resumeVoice} className="size-4 cursor-pointer" />
              ) : (
                <Play onClick={playVoice} className="size-4 cursor-pointer" />
              )}
              <div className="border-l border-gray-300 h-4"></div>
              <X onClick={stopVoice} className="size-4 cursor-pointer" />
            </div>
          </div>
          <div>
            <p className="text-xs mb-0.5 text-gray-800">Translation</p>
            <Select defaultValue="">
              <SelectTrigger className="w-[180px] h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="original">Original Language</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="burmese">Burmese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-xs mb-0.5 text-gray-800">{"General"}</p>
            <div className="flex h-8 items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              <Heart className="size-4 cursor-pointer" />
              <div className="border-l border-gray-300 h-4"></div>
              <Share2 className="size-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div
        style={{ fontSize: `${fontSize}px` }}
        className="text-justify text-gray-800 mt-6 leading-relaxed"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam rem,
        necessitatibus molestiae architecto aspernatur a, obcaecati, corporis
        inventore saepe debitis delectus minus? Itaque dicta sint expedita, et
        perferendis debitis, quae corrupti sed unde distinctio odio sequi rerum
        quam labore tempora? Deserunt, optio beatae nemo accusantium dolorum
        natus iste perspiciatis. Temporibus ipsam, amet quis earum praesentium,
        suscipit sed tempora accusantium nesciunt dignissimos sequi, officiis
        labore hic debitis! Obcaecati, animi atque veniam neque, repellat
        possimus exercitationem, necessitatibus minus nobis esse laboriosam ea!
        Distinctio dolor expedita itaque similique, fugit, repudiandae alias
        unde corrupti consequatur ab nemo magnam. Cum illo accusamus quisquam et
        dolor dicta enim, in nobis eos fugit asperiores laborum quasi.
        Asperiores quae eos sequi eveniet tenetur recusandae, veritatis quasi
        accusantium amet et laudantium incidunt id soluta, ut mollitia suscipit
        nostrum maxime, perspiciatis odio fuga illum rerum debitis? Doloribus
        temporibus, fugit laboriosam voluptas necessitatibus quidem odit
        consequatur, assumenda sequi nisi odio, mollitia omnis dignissimos!
        Voluptatem error praesentium, nostrum vitae deserunt odio debitis a
        obcaecati cum iusto eius, natus necessitatibus sequi est. Hic fugiat
        expedita, inventore maiores doloribus voluptatibus similique possimus
        nemo ea maxime in at error! Magnam, obcaecati? Ratione, consequatur
        vitae molestiae enim maiores tempore saepe porro quisquam labore,
        corrupti explicabo. Explicabo, alias magnam. Ut praesentium sed facere
        quis et aut eius saepe consequuntur perferendis, odio dignissimos ipsa
        asperiores, ratione voluptatibus. Velit, sit. Perspiciatis voluptatibus
        quia repudiandae consequuntur, tempora est itaque enim qui eligendi. Hic
        amet reprehenderit doloremque dolorem voluptatibus eaque quas aliquid
        nemo quae, eveniet alias laborum suscipit libero perspiciatis odit
        quaerat saepe deserunt quos, aliquam consequatur praesentium tempore?
        Facere rerum architecto temporibus voluptates! Quas sequi voluptate
        maiores quo repellat fugit dicta id aut alias eligendi culpa temporibus
        sunt quod, voluptatem sapiente quam eveniet est tenetur ad adipisci
        tempore voluptates! Illum architecto quis repellendus, laudantium sunt
        doloribus modi dolores inventore nulla, ea dolorem aut velit et, qui
        deleniti! Neque sapiente, placeat quod libero dolores quas autem
        consequatur quidem fugiat facere fuga reiciendis quia ab ea. In, dolores
        tempora cumque inventore fugit fuga architecto dolor, illo et officia
        enim non! Nihil blanditiis totam repellendus quidem aut magni eligendi
        pariatur, culpa atque necessitatibus perspiciatis ipsa rem laudantium,
        voluptatibus ipsum veritatis in recusandae voluptates iure quia placeat
        minus fuga. Adipisci possimus repellendus vero sunt quibusdam a nesciunt
        ea eos debitis omnis, hic impedit ab quae eaque ut quam voluptate
        veritatis fugit praesentium. Officiis laborum dicta, molestiae adipisci
        aperiam culpa nihil sunt ipsa est cupiditate aut facilis quis accusamus
        perspiciatis! Unde, corporis placeat, corrupti molestias dolorem qui
        ipsum explicabo sapiente ullam veritatis dolorum perspiciatis in minus?
        Aperiam accusamus dolorum labore blanditiis vel odit earum corrupti
        debitis? Molestias minus nisi corrupti, ad accusamus modi iure,
        inventore harum in rerum quidem! Ad nam quam autem deleniti? Ratione
        minus vitae nostrum asperiores omnis explicabo sunt accusamus quae
        magnam nulla alias repellat nesciunt veritatis amet voluptas quidem
        eveniet, totam et, aliquam animi magni voluptatem ipsa ducimus suscipit?
        Repudiandae consequuntur aspernatur labore cupiditate, recusandae
        pariatur molestiae omnis libero reiciendis illo ullam dolor aliquam sit
        ad tempora modi tempore sapiente distinctio.
      </div>
    </div>
  );
};

export default ChapterCard;
