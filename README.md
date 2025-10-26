# **Kevin Colaco - Portfolio Website**

A modern, responsive portfolio website built with **Flutter**. It showcases my projects, skills, and experience as a developer. The app is compiled for the web and delivers a smooth, native-like experience across all devices.

[![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev/)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev/)
[![Web](https://img.shields.io/badge/Platform-Web-3F51B5?style=for-the-badge&logo=google-chrome&logoColor=white)](https://kevin-colaco.github.io/portfolio/#/)
## 🚀 Live Demo

**[Visit My Portfolio](https://kevin-colaco.github.io/portfolio/#/)**

---

## ✨ Features

*   **Fully Responsive Design:** Seamlessly adapts to desktop, tablet, and mobile screens.
*   **Modern UI/UX:** Clean, intuitive, and professional interface built with Flutter's widget library.
*   **Performance Optimized:** Leverages Flutter's high performance for smooth animations and fast loading.
*   **Cross-Platform:** While currently deployed for the web, the codebase can be compiled for iOS and Android.
*   **Project Showcase:** A dedicated section to highlight my key projects with descriptions, tech stacks, and links.
*   **Direct Contact:** Easy ways for recruiters and visitors to get in touch.

---

## 🛠️ Tech Stack

*   **Framework:** [Flutter](https://flutter.dev/) (v3.x)
*   **Language:** [Dart](https://dart.dev/)
*   **Deployment:** GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

To run this project locally, you need to have Flutter SDK installed on your machine.
*   [Install Flutter](https://docs.flutter.dev/get-started/install)

### Installation & Local Run

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Get dependencies**
    ```bash
    flutter pub get
    ```

3.  **Run the app for the web**
    ```bash
    flutter run -d chrome
    ```

### Building for Web Deployment

To generate the production-ready build files for hosting (e.g., on GitHub Pages):

```bash
flutter build web --release
```

The compiled files will be in the `build/web` directory. You can deploy this folder to any web server.

---

## 🔧 Deployment on GitHub Pages

This project is configured for easy deployment on GitHub Pages.

1.  After building with `flutter build web`, the `build/web` directory contains the static files.
2.  In your GitHub repository, go to **Settings > Pages**.
3.  Set the **Source** to "Deploy from a branch" and select the `gh-pages` branch (you may need to create it) or the `/docs` folder. A common method is to push the contents of `build/web` to the `gh-pages` branch.
    *   *Pro Tip: You can use the `gh-pages` npm package or GitHub Actions to automate this process after every push to `main`.*

---

## 📞 Contact

- **Email** - [kevincolaco.kc@gmail.com](mailto:kevincolaco.kc@gmail.com)
- **LinkedIn** - [linkedin.com/in/kevin-colaco-kc](https://linkedin.com/in/kevin-colaco-kc)
- **GitHub** - [github.com/kevin-colaco](https://github.com/kevin-colaco)

---

**⭐ Feel free to star this repository if you find it helpful!**
