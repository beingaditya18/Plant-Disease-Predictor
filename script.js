const form = document.getElementById("predictForm");
const imageInput = document.getElementById("imageUpload");
const predictionText = document.getElementById("predictionText");
const resultSection = document.getElementById("resultSection");
const loader = document.getElementById("loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!imageInput.files.length) {
    alert("Please upload an image!");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageInput.files[0]);

  loader.style.display = "block";
  resultSection.classList.add("d-none");

  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Server responded with an error.");
    }

    const result = await response.json();
    predictionText.textContent = result.prediction || "No prediction received.";
    resultSection.classList.remove("d-none");
  } catch (error) {
    alert("❌ Error during prediction. Please try again.");
    console.error("Prediction Error:", error);
  } finally {
    loader.style.display = "none";
  }
});
