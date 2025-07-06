import React from "react";
import "./PostCard.css";

const PostCard = () => {
  const blogPosts = [
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
  ];
  return (
    <div className="container-fluid">
      <div className="row g-4">
        {blogPosts.map((blog, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden hover-card">
              <div className="card-header bg-gradient bg-primary text-white border-0 d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="bg-white rounded-circle p-2 me-2">
                    <i className="bi bi-person-fill text-primary"></i>
                  </div>
                  <h6 className="mb-0 fw-bold">{blog.authorName}</h6>
                </div>
                <button
                  type="button"
                  className="btn btn-light btn-sm position-relative rounded-pill px-3"
                  key={idx}
                >
                  <i className="bi bi-heart-fill text-danger me-1"></i>
                  Likes
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger shadow">
                    {blog.likes}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold text-dark mb-3">
                  {blog.title}
                </h5>
                <p className="card-text text-muted lh-base">{blog.about}</p>
              </div>
              <div className="card-footer bg-light border-0 p-3">
                <div className="d-flex flex-wrap gap-2">
                  {blog.hashtags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-normal"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
