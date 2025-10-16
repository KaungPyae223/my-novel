"use client";
import React from "react";
import ChapterContainer from "../components/container/ChapterContainer";
import NovelContainer from "../components/container/NovelContainer";
import PostsContainer from "../components/container/PostsContainer";
import RightSideBar from "@/features/Home/components/rightSideBar/RightSideBar";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useHomePage } from "../hooks/useHomePage";


const HomePage = () => {
  const { activeTab, handleTabChange, containerRef, open, scrollToTop, tabs, animateVariants } = useHomePage();

  return (
    <div className="flex flex-row">
      <div
        style={{ height: "calc(100vh - 4rem)" }}
        ref={containerRef}
        className="overflow-y-auto scrollbar-hide p-4 py-6 max-w-2xl w-full mx-auto"
      >
        <div className="grid grid-cols-3 text-sm gap-3 p-1.5 bg-gray-100 rounded-md">
          {tabs.map((tab: { label: string; value: string }) => (
            <div
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`rounded-md  text-center py-1.5 ${
                activeTab === tab.value
                  ? "bg-white font-medium shadow"
                  : "text-gray-600 cursor-pointer"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="fixed top-20 right-[50%] translate-x-1/2">
          <motion.div
            variants={animateVariants}
            animate={open ? "visible" : "hidden"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" z-50 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-300 shadow-lg hover:bg-white cursor-pointer p-3 px-5 group"
            onClick={() => scrollToTop()}
          >
            <ArrowUp className="w-5 h-5 text-gray-600 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              Scroll to top
            </span>
          </motion.div>
        </div>

        <div className="mt-6">
          {activeTab === "Novels" && <NovelContainer />}
          {activeTab === "Chapters" && <ChapterContainer />}
          {activeTab === "Posts" && <PostsContainer />}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default HomePage;
