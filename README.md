# Personal Website

This is my personal website built with Hugo, a fast and modern static site generator. The site features a clean, responsive design powered by Tailwind CSS and uses CareerCanvas theme.

## 🚀 Features

- Built with Hugo static site generator
- Uses CareerCanvas theme
- Styled with Tailwind CSS
- Responsive design with dark mode support
- Typography plugin for better content formatting
- Custom layouts and templates
- Image galleries for project showcases
- Interactive skills and experience sections

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- [Node.js](https://nodejs.org/) (for npm packages)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🏗️ Installation

1. Clone the repository:
```bash
git clone --recurse-submodules https://github.com/thefajarmalik/thefajarmalik.git
cd thefajarmalik
```

2. Install npm dependencies:
```bash
npm install
```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

This command runs `hugo server -D`, which starts a local server and includes draft content (content with `draft: true` in the front matter). This is useful for previewing unpublished or in-progress content during development.

The site will be available at `http://localhost:1313`

## 🏗️ Building

To build the site for production, you need to:

1. Build the CSS with Tailwind:
```bash
npm run build:css-main
```

2. Build the site with Hugo:
```bash
npm run build
```

Or you can do both in one command:
```bash
npm run build:css-main && npm run build
```

The built site will be in the `public/` directory.

Note: The CSS build step is necessary because the site uses Tailwind CSS, which needs to be processed to generate the final CSS file with only the used styles.

## 📁 Project Structure

- `assets/` - Contains source files for CSS, JavaScript, and other assets
- `content/` - Contains the content of your site
- `static/` - Contains static files like images
- `themes/careercanvas/` - Contains the CareerCanvas theme
- `config.toml` - Main configuration file
- `tailwind.config.js` - Tailwind CSS configuration

## 🛠️ Technologies Used

- [Hugo](https://gohugo.io/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Typography plugin for Tailwind CSS
- [CareerCanvas](https://github.com/felipecordero/careercanvas) - Custom Hugo theme

## 👨‍💻 About the Theme

The CareerCanvas theme is designed specifically for technical and engineering portfolios. It features:
- Modern, responsive design
- Dark mode support
- Interactive components
- Image galleries
- Multilingual support
- Optimized for technical content

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.