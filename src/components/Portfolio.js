import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./Home";

const Portfolio = () => {
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);
  const { mode } = themeContext;

  return (
    <div style={{ ...styles.container, backgroundColor: mode === "dark" ? "#33335d" : "" }}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Me</h1>
        <div style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </div>
        <button style={styles.button} onClick={() => navigate("/")}>
          ⬅ Go Back Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },
  card: {
    padding: "32px",
    borderRadius: "12px",
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    marginBottom: "16px",
    fontSize: 32,
    fontWeight: "600"
  },
  text: {
    marginBottom: "12px",
    lineHeight: "1.6",
    fontSize: 20,
    fontWeight: "600"
  },
  button: {
    marginTop: "20px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Portfolio;
