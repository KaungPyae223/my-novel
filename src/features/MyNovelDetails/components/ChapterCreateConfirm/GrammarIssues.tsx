import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TriangleAlert } from "lucide-react";
import React, { useEffect, useState } from "react";
import useStoreChapter from "@/store/useChapterStore";
import { api } from "@/services/api";
import Loading from "@/features/Components/Loading/Loading";

const GrammarIssues = () => {
  const { chapterData, contentGrammarFix } = useStoreChapter();

  const [data, setData] = useState<any>(null);
  const [newContent, setNewContent] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.post("/grammar-check", {
        content: chapterData.content,
      });
      setData(response.data);
    };
    fetchData();
  }, []);

  const applyFix = (
    id: number,
    bad: string,
    better: string,
    content: string
  ) => {
    setData((prevData: any) => ({
      ...prevData,
      errors: prevData.errors.filter((issue: any) => issue.id !== id),
    }));
    const fixContent = content.replace(bad, better);
    contentGrammarFix(fixContent);
  };

  const applyAllFixes = () => {
    let fixContent = chapterData.content;
    data.errors.forEach((issue: any) => {
      fixContent = fixContent.replace(issue.bad, issue.better[0]);
    });
    contentGrammarFix(fixContent);
    setData((prevData: any) => ({
      ...prevData,
      errors: [],
    }));
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="w-full mt-6 mx-auto p-6 bg-white shadow-xs rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-yellow-700 flex items-center gap-2">
          <TriangleAlert className="size-5" /> Vocabulary, Grammar & Spelling
          Issues
          <span className="ml-2 text-sm bg-yellow-100 text-yellow-700 font-medium px-2 py-0.5 rounded-full">
            {data.errors.length} Issues Found
          </span>
        </h2>
        <button
          onClick={applyAllFixes}
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md font-medium"
        >
          Fix All Issues
        </button>
      </div>

      <div className="space-y-4 max-h-[50vh] overflow-y-auto">
        {data.errors.length > 0 ? (
          data.errors.map((issue: any) => (
            <IssueCard
              issue={issue}
              content={chapterData.content}
              key={issue.id}
              applyFix={(
                id: number,
                bad: string,
                better: string,
                content: string
              ) => applyFix(id, bad, better, content)}
            />
          ))
        ) : (
          <div className="text-center py-10 text-green-700 bg-green-50 border border-green-200 rounded-lg shadow-sm">
            <div className="text-2xl font-semibold mb-2">
              🎉 No Issues Found!
            </div>
            <p className="text-sm text-green-800">
              Your content looks great. No grammar, vocabulary, or spelling
              issues were found.
            </p>
          </div>
        )}
      </div>
      <div className="mt-6 text-sm space-y-0.5 text-gray-800">
        <p>
          <span className="font-semibold me-1">Reading Ease:</span>{" "}
          {data.fleschKincaid.readingEase}
        </p>
        <p>
          <span className="font-semibold me-1">Grade Level:</span>{" "}
          {data.fleschKincaid.grade}
        </p>
        <p>
          <span className="font-semibold me-1">interpretation:</span>{" "}
          {data.fleschKincaid.interpretation}
        </p>
      </div>
    </div>
  );
};

const IssueCard = ({
  issue,
  applyFix,
  content,
}: {
  issue: any;
  applyFix: (id: number, bad: string, better: string, content: string) => void;
  content: string;
}) => {
  const offsetStart = Math.max(0, issue.offset - 15);
  const offsetEnd = Math.min(content.length, issue.offset + issue.length + 15);

  const issueRaw = content.slice(offsetStart, offsetEnd);
  const issueArray = issueRaw.split(" ");

  const issueContent = issueArray.slice(1, issueArray.length - 1).join(" ");

  return (
    <div
      key={issue.id}
      className="border-l-4 border-yellow-300 bg-yellow-50 p-4 rounded-md shadow-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2 text-sm">
          {issue.description.en}
          <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {issue.type}
          </span>
        </div>
        <Button
          onClick={() =>
            applyFix(issue.id, issue.bad, issue.better[0], content)
          }
          className="border border-green-400 bg-white text-green-600 hover:bg-green-50 px-3 py-1 rounded-md"
        >
          Apply Fix
        </Button>
      </div>

      <div className="text-sm text-gray-700 flex items-center gap-2 mb-1">
        Found:{" "}
        <span className="line-through text-red-600 px-2 py-1 rounded bg-red-100">
          {issue.bad}
        </span>{" "}
        <ArrowRightIcon className="size-4" /> Suggestion:{" "}
        <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded">
          {issue.better[0]}
        </span>
      </div>

      <div className="text-xs mt-3 text-gray-600 bg-gray-100 px-3 py-2 rounded-md">
        <span className="block text-gray-500 font-medium mb-1.5">Context:</span>
        <pre className="whitespace-pre-wrap text-sm">{issueContent}</pre>
      </div>
    </div>
  );
};

export default GrammarIssues;
