const images = [
    "https://img.freepik.com/free-photo/cute-group-animals_23-2150104536.jpg?t=st=1721019905~exp=1721023505~hmac=43b36d0106e1cfbeeb74a68add83b4b50a77801b54b850f1390762daf473ff69&w=740",
    "https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007409.jpg?t=st=1721020060~exp=1721023660~hmac=4f63d8c41b2bc5e2559f6797d4b0313f3462014812a00b5a315e1255098ada57&w=740",
    "https://img.freepik.com/free-photo/small-jack-russell-terrier-white_155003-14038.jpg?t=st=1721020088~exp=1721023688~hmac=825646205be5c54f6f231ecb93111887e9ee3fa2b9574f9c72cf2b24fc97dcf1&w=740"
  ];
  let currentIndex = 0;
  
  const imageElement = document.getElementById("image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    imageElement.src = images[currentIndex];
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    imageElement.src = images[currentIndex];
  });
  