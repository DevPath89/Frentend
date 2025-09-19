import React, { useEffect, useState } from "react";

function Lectures() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    // ✅ Backend से lectures लाना
    fetch("https://devpath-2.onrender.com/api/lectures") // 👉 अपने backend API का URL डालना
      .then((res) => res.json())
      .then((data) => {
        setLectures(data);
      })
      .catch((err) => {
        console.error("Error fetching lectures:", err);
      });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📚 Lectures</h2>

      {lectures.length === 0 ? (
        <p className="text-center">No lectures available yet.</p>
      ) : (
        <div className="row">
          {lectures.map((lec) => (
            <div key={lec._id} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{lec.title}</h5>
                  <p className="card-text">{lec.description}</p>

                  {lec.videoUrl ? (
                    <video
                      src={lec.videoUrl}
                      controls
                      className="w-100 rounded"
                      style={{ maxHeight: "200px" }}
                    />
                  ) : (
                    <p className="text-muted">No video available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Lectures;
