import React, { useState } from "react";
import axios from "axios";

function Exercise() {
  const [bodyPart, setBodyPart] = useState("");
  const [muscleType, setMuscleType] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const requestData = {
      bodypart: bodyPart,
      typeofmuscle: muscleType,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/exercise", requestData, {
        headers: { "Content-Type": "application/json" },
      });
      setResult(response.data);
    } catch (err) {
      console.error("Error occurred:", err.response || err.message);
      setError(
        err.response?.data?.error ||
          "An error occurred while fetching the prediction. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Exercise Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Body Part:</label>
          <input
            type="text"
            value={bodyPart}
            onChange={(e) => setBodyPart(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type of Muscle:</label>
          <input
            type="text"
            value={muscleType}
            onChange={(e) => setMuscleType(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Predict Exercise"}
        </button>
      </form>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {result && (
        <div>
          <h3>Prediction Results:</h3>
          <p>
            <strong>Workout:</strong> {result.Workout}
          </p>
          <p>
            <strong>Sets:</strong> {result.Sets.toFixed(1)}
          </p>
          <p>
            <strong>Reps:</strong> {result.Reps.toFixed(1)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Exercise;
