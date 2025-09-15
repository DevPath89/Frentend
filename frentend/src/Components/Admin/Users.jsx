import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ReactPaginate from "react-paginate";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://devpath-2.onrender.com/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const pageCount = Math.ceil(users.length / usersPerPage);
  const displayUsers = users.slice(
    currentPage * usersPerPage,
    (currentPage + 1) * usersPerPage
  );

  const handlePageClick = (data) => setCurrentPage(data.selected);

  // ✅ Delete User
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await fetch(`https://devpath-2.onrender.com/api/users/${id}`, {
          method: "DELETE",
        });
        setUsers(users.filter((u) => u._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  // ✅ Edit User (simple prompt example)
  const handleEdit = async (user) => {
    const newName = prompt("Enter new name:", user.name);
    if (newName && newName !== user.name) {
      try {
        const res = await fetch(`https://devpath-2.onrender.com/api/users/${user._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...user, name: newName }),
        });
        const updatedUser = await res.json();
        setUsers(users.map((u) => (u._id === updatedUser._id ? updatedUser : u)));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="users-page">
      <Sidebar />
      <div className="users-content">
        <h2>Registered Users</h2>
        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>UserID</th>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Passing Year</th>
                <th>Training Type</th>
                <th>Course</th>
                <th>Mobile</th>
                <th>Actions</th> {/* 👈 New Column */}
              </tr>
            </thead>
            <tbody>
              {displayUsers.map((user, index) => (
                <tr key={user._id || index}>
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.emailID}</td>
                  <td>{user.collegeName}</td>
                  <td>{user.passingYear}</td>
                  <td>{user.trainingType}</td>
                  <td>{user.course}</td>
                  <td>{user.mobileNo}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(user)}
                      style={{ marginRight: "8px" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      style={{ color: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Users;
