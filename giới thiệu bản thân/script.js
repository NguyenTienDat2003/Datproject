// Thông tin cá nhân
const personalInfo = {
  name: "Nguyễn Tiến Đạt",
  role: "Frontend Developer",
  details: {
    "Ngày sinh": "06/11/2003",
    "Giới tính": "Nam",
    Email: "dn6099858@gmail.com",
    "Địa chỉ": "Hoàng Mai, Hà Nội",
    "Sở thích": "Code, UI/UX Design, Bóng đá",
  },
};

// Danh sách dự án
const projects = [
  {
    title: "Todo App với React",
    description: "Ứng dụng quản lý công việc đơn giản",
    url: "https://github.com/yourusername/todo-app",
  },
  {
    title: "Weather App",
    description: "Ứng dụng dự báo thời tiết dùng API",
    url: "https://github.com/yourusername/weather-app",
  },
];

// Render thông tin cá nhân
document.getElementById("name").textContent = personalInfo.name;
document.getElementById("role").textContent = personalInfo.role;

const infoList = document.getElementById("info-list");
for (const [key, value] of Object.entries(personalInfo.details)) {
  const li = document.createElement("li");
  li.textContent = `${key}: ${value}`;
  infoList.appendChild(li);
}

// Render dự án
const projectsList = document.getElementById("projects-list");
projects.forEach((project) => {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = project.url;
  a.target = "_blank";
  a.textContent = project.title;

  li.appendChild(a);
  li.append(` - ${project.description}`);

  projectsList.appendChild(li);
});
