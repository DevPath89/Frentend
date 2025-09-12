// src/Components/Admin/OurTeamManager.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function OurTeamManager() {
  const [team, setTeam] = useState([]);
  const [formData, setFormData] = useState({ name: "", position: "", image: null });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/ourteam/all");
      const data = await res.json();
      setTeam(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleAddOrEdit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.position || (!formData.image && !editingId)) {
      return alert("All fields are required");
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("position", formData.position);
    if (formData.image) form.append("image", formData.image);

    try {
      if (editingId) {
        await fetch(`http://localhost:5000/api/ourteam/${editingId}`, {
          method: "PUT",
          body: form,
        });
        alert("Team member updated successfully");
      } else {
        await fetch("http://localhost:5000/api/ourteam/add", {
          method: "POST",
          body: form,
        });
        alert("Team member added successfully");
      }
      setFormData({ name: "", position: "", image: null });
      setEditingId(null);
      fetchTeamMembers();
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this member?")) return;
    try {
      await fetch(`http://localhost:5000/api/ourteam/${id}`, { method: "DELETE" });
      fetchTeamMembers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (member) => {
    setEditingId(member._id);
    setFormData({ name: member.name, position: member.position, image: null });
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 p-4" style={{ marginLeft: "220px" }}>
        <h2 className="mb-4">Our Team Management</h2>

        {/* Add / Edit Form */}
        <form
          onSubmit={handleAddOrEdit}
          className="row g-3 align-items-end mb-5 p-3 border rounded shadow-sm bg-light"
        >
          <div className="col-md">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md">
            <label className="form-label">Position</label>
            <input
              type="text"
              name="position"
              placeholder="Enter position"
              value={formData.position}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md">
            <label className="form-label">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-auto d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Update Member" : "Add Member"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setEditingId(null);
                  setFormData({ name: "", position: "", image: null });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Team Members Grid */}
        <div className="row">
          {team.map((member) => (
            <div key={member._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100 text-center">
                <img
                  src={`http://localhost:5000/uploads/${member.image}`}
                  alt={member.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.position}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEditClick(member)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(member._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeamManager;
