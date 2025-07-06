import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import PostCard from "./Components/PostCard";
import { useState } from "react";
import CreateBlog from "./Components/CreateBlog";
const App = () => {
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
            <PostCard />
          </main>
        ) : (
          <main className="flex-1 p-6">
            <CreateBlog />
          </main>
        )}
      </div>

      {/* Footer - Fixed at bottom */}
      <Footer />
    </div>
  );
};

export default App;
