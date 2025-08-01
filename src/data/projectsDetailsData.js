// src/data/projectsDetailsData.js

export const projectsDetailsData = [
  {
    slug: "bianca-beauty",
    name: "Bianca Beauty",
    intro: "Bianca Beauty is a modern, visually elegant web application designed for a fictional beauty brand. It showcases beauty products in a clean and minimalistic layout, allowing users to browse through featured items, view detailed product information, and navigate the site with ease.",
    oneLiner: "E-COMMERCE, WEB APPLICATION.",
    mainImage: "/images/bianca-beauty/bb1.png",
    image2: "/images/bianca-beauty/bb2.png",
    image3: "/images/bianca-beauty/bb3.png",
    laptopView: "/images/bianca-beauty/bb4.png",
    mobileView: "/images/bianca-beauty/bb6.png",
    about: "Created to emulate a real-world beauty brand, this application features a clean interface, soft visuals, and smooth navigation. It includes a homepage, product listings, and a basic cart layout, all fully responsive. Though fictional, it serves as a polished showcase of modern frontend development.",
    challenges: "During development, I encountered challenges with managing state across components and ensuring smooth navigation without page reloads. Designing a responsive layout that maintained visual consistency on different screen sizes also required careful planning. Additionally, implementing clean and maintainable CSS for a polished look took time to refine.",
    solution: "To manage state effectively, I used React’s built-in hooks to keep the data flow organized and consistent. For smooth navigation, I implemented React Router to enable seamless page transitions without reloads. Responsive design was achieved using flexible CSS layouts and media queries to adapt to various screen sizes. Finally, I refined the styling by modularizing CSS and following best practices to maintain clean and scalable code.",
    tools: ["React", "React Router", "Tailwind CSS"],
    futureUpdates: "I plan to implement user authentication to offer a more personalized experience and improve the cart with payment integration. I’m also focused on enhancing accessibility and adding subtle animations to make the interface feel more engaging and intuitive.",
    liveLink: "https://bianca-beauty.vercel.app/"
  },

  {
    slug: "quickgig",
    name: "QuickGig",
    intro: "A last-minute gig marketplace for booking event-based services like DJs, MCs, and more.",
    oneLiner: "Book or offer last-minute gigs in minutes.",
    mainImage: "/images/quickgig/main.jpg",
    image2: "/images/quickgig/secondary1.jpg",
    image3: "/images/quickgig/secondary2.jpg",
    laptopView: "/images/quickgig/laptop.jpg",
    mobileView: "/images/quickgig/mobile.jpg",
    about: "QuickGig allows users to browse or post urgent gigs without needing an account. Whether it's a DJ, caterer, or repairman — the process is fast, clear, and hassle-free.",
    challenges: "Creating a smooth experience without user login was tricky. I had to manage data flow using localStorage and manual validation.",
    solution: "I built a posting and browsing system that updates dynamically using local state and filters. This kept the experience seamless and responsive.",
    tools: ["React", "React Router", "Tailwind CSS"],
    futureUpdates: "I'll be adding account creation, direct messaging, and payment integration.",
    liveLink: "https://quickgig.netlify.app"
  },

  {
    slug: "fashion-motors",
    name: "Fashion Motors",
    intro: "A last-minute gig marketplace for booking event-based services like DJs, MCs, and more.",
    oneLiner: "Book or offer last-minute gigs in minutes.",
    mainImage: "/images/quickgig/main.jpg",
    image2: "/images/quickgig/secondary1.jpg",
    image3: "/images/quickgig/secondary2.jpg",
    laptopView: "/images/quickgig/laptop.jpg",
    mobileView: "/images/quickgig/mobile.jpg",
    about: "QuickGig allows users to browse or post urgent gigs without needing an account. Whether it's a DJ, caterer, or repairman — the process is fast, clear, and hassle-free.",
    challenges: "Creating a smooth experience without user login was tricky. I had to manage data flow using localStorage and manual validation.",
    solution: "I built a posting and browsing system that updates dynamically using local state and filters. This kept the experience seamless and responsive.",
    tools: ["React", "React Router", "Tailwind CSS"],
    futureUpdates: "I'll be adding account creation, direct messaging, and payment integration.",
    liveLink: "https://quickgig.netlify.app"
  },

];
