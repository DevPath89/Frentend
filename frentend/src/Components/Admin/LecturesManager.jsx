import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar"; // ✅ import sidebar

function LecturesManager() {
  const [lectures, setLectures] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
  });
  const [videoFile, setVideoFile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch lectures
  const fetchLectures = async () => {
    try {
      const res = await fetch("https://devpath-2.onrender.com/api/lectures");
      const data = await res.json();
      setLectures(data);
    } catch (error) {
      console.error("Error fetching lectures:", error);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let uploadedVideoUrl = formData.videoUrl;

      if (videoFile) {
        const formDataObj = new FormData();
        formDataObj.append("video", videoFile);

        const resUpload = await fetch("https://devpath-2.onrender.com/api/upload", {
          method: "POST",
          body: formDataObj,
        });

        const uploadData = await resUpload.json();
        uploadedVideoUrl = uploadData.videoUrl;
      }

      const lectureData = {
        ...formData,
        videoUrl: uploadedVideoUrl,
      };

      if (editMode) {
        const res = await fetch(
          `https://devpath-2.onrender.com/api/lectures/${editId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lectureData),
          }
        );

        if (res.ok) {
          setEditMode(false);
          setEditId(null);
          setFormData({ title: "", description: "", videoUrl: "" });
          setVideoFile(null);
          fetchLectures();
        }
      } else {
        const res = await fetch("https://devpath-2.onrender.com/api/lectures", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lectureData),
        });

        if (res.ok) {
          setFormData({ title: "", description: "", videoUrl: "" });
          setVideoFile(null);
          fetchLectures();
        }
      }
    } catch (error) {
      console.error("Error saving lecture:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://devpath-2.onrender.com/api/lectures/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLectures(lectures.filter((lec) => lec._id !== id));
      }
    } catch (error) {
      console.error("Error deleting lecture:", error);
    }
  };

  const handleEdit = (lec) => {
    setEditMode(true);
    setEditId(lec._id);
    setFormData({
      title: lec.title,
      description: lec.description,
      videoUrl: lec.videoUrl || "",
    });
    setVideoFile(null);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px", marginLeft: "220px" }}>
        <h2 className="mb-4">🎓 Manage Lectures</h2>

        {/* Add / Edit Lecture Form */}
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editMode ? "Update Lecture" : "Add New Lecture"}</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Lecture Title"
                className="form-control mb-2"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Lecture Description"
                className="form-control mb-2"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="videoUrl"
                placeholder="Video URL (optional)"
                className="form-control mb-2"
                value={formData.videoUrl}
                onChange={handleChange}
              />
              <input
                type="file"
                accept="video/*"
                className="form-control mb-2"
                onChange={handleFileChange}
              />
              <button type="submit" className="btn btn-primary">
                {editMode ? "Update Lecture" : "Add Lecture"}
              </button>
              {editMode && (
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => {
                    setEditMode(false);
                    setEditId(null);
                    setFormData({ title: "", description: "", videoUrl: "" });
                    setVideoFile(null);
                  }}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Lecture List */}
        <h5>All Lectures</h5>
        {lectures.length === 0 ? (
          <p>No lectures added yet.</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Video</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lectures.map((lec) => (
                <tr key={lec._id}>
                  <td>{lec.title}</td>
                  <td>{lec.description}</td>
                  <td>
                    {lec.videoUrl ? (
                      <video src={lec.videoUrl} controls width="200" height="120" />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(lec)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(lec._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default LecturesManager;
