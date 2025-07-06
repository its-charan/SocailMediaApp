import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import PostCard from "./Components/PostCard";
import { useState } from "react";
import CreateBlog from "./Components/CreateBlog";
const App = () => {

  const [blogPosts,setBlogPost] = useState([
    {
      title: "Mastering React in 30 Days",
      about:
        "Learn how to build modern web apps using React with hands-on projects and real-world examples.",
      hashtags: ["React", "JavaScript", "WebDevelopment"],
      likes: 120,
      authorName: "Charan",
    },
    {
      title: "10 Productivity Hacks for Developers",
      about:
        "Simple tips and tools to help developers stay focused, write clean code, and manage time effectively.",
      hashtags: ["Productivity", "Coding", "LifeHacks"],
      likes: 87,
      authorName: "Aarav",
    },
    {
      title: "Understanding Tailwind CSS",
      about:
        "A complete beginner’s guide to using Tailwind CSS for designing beautiful and responsive UIs.",
      hashtags: ["Tailwind", "CSS", "Frontend"],
      likes: 64,
      authorName: "Megha",
    },
    {
      title: "Demystifying APIs: A Beginner’s Guide",
      about:
        "Learn what APIs are, how they work, and how to use them in your web projects with simple examples.",
      hashtags: ["API", "Backend", "WebDev"],
      likes: 42,
      authorName: "Rohan",
    },
    {
      title: "Getting Started with FastAPI",
      about:
        "Build lightning-fast APIs in Python using FastAPI, with step-by-step examples and best practices.",
      hashtags: ["FastAPI", "Python", "Backend"],
      likes: 93,
      authorName: "Charan",
    },
  ]);

  const updateBlog = (newBlog)=>{
    setBlogPost([newBlog,...blogPosts])
  }
  const [activeItem, setActiveItem] = useState("home");

  const handleActivateBtn = (name) => {
    setActiveItem(name);
    // console.log("okay");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header - Fixed at top */}
      <Header />
      <div className="flex flex-1">
        <Sidebar
          handleActivateBtn={handleActivateBtn}
          activeItem={activeItem}
        />
        {activeItem === "home" ? (
          <main className="flex-1 p-6">
            <PostCard blogPosts={blogPosts}/>
          </main>
        ) : (
          <main className="flex-1 p-6">
            <CreateBlog updateBlog={updateBlog} />
          </main>
        )}
      </div>

      {/* Footer - Fixed at bottom */}
      <Footer />
    </div>
  );
};

export default App;
