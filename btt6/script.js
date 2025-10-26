function initGallery() {
  console.log("Gallery initialized.");

  const display = document.getElementById("display");
  const displayImg = document.getElementById("display-img");
  const displayText = document.getElementById("display-text");
  const images = document.querySelectorAll("#gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");


    images[i].addEventListener("mouseover", function() {
      showImage(this);
    });
    images[i].addEventListener("mouseleave", function() {
      resetDisplay();
    });


    images[i].addEventListener("focus", function() {
      showImage(this);
    });

  
    images[i].addEventListener("blur", function() {
      resetDisplay();
    });
  }

  function showImage(img) {
    displayImg.src = img.src;
    displayImg.alt = img.alt;
    displayImg.style.display = "block";
    displayText.textContent = img.alt;
    console.log("Hiển thị:", img.alt);
  }

  // Trở về trạng thái mặc định
  function resetDisplay() {
    displayImg.style.display = "none";
    displayText.textContent = "Hover or Focus an Image to Display It";
    console.log("Ẩn ảnh");
  }
}
