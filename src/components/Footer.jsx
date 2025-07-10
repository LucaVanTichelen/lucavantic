const Footer = () => (
  <footer className="w-full py-4 text-center text-gray-500 text-sm bg-gray-50 mt-8">
    <div>
      © {new Date().getFullYear()} lucavantic —
      <a href="https://github.com/LucaVanTichelen" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">GitHub</a>
      <a href="https://www.linkedin.com/in/lucavantichelen/" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 hover:underline">LinkedIn</a>
    </div>
  </footer>
);

export default Footer; 