const validate = () => {
  const token = window.localStorage.getItem("token");
  if (!token) return false;
  return fetch("http://localhost:3001/validate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token })
  })
    .then(res => res.json())
    .then(res => res.validated);
};

export default validate;
