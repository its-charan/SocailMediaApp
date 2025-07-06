import React from "react";
import "./PostCard.css";

const PostCard = ({blogPosts}) => {
  
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
