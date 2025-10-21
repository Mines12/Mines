// Đợi tài liệu tải xong
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".styled-image");

  // Tạo phần tử overlay (hiển thị ảnh phóng to)
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.style.display = "none";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.8)";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.cursor = "zoom-out";

  // Tạo ảnh lớn trong overlay
  const fullImg = document.createElement("img");
  fullImg.style.maxWidth = "90%";
  fullImg.style.maxHeight = "90%";
  fullImg.style.borderRadius = "10px";
  overlay.appendChild(fullImg);

  document.body.appendChild(overlay);

  // Khi nhấn vào ảnh trong thư viện
  images.forEach((img) => {
    img.addEventListener("click", () => {
      fullImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  // Khi nhấn ra ngoài để tắt overlay
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});
