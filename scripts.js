// --- Data ---
const personalInfo = {
  name: "Ayush Kumar Singh",
  role: "AI/ML Engineer & Full Stack Developer",
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "ayush022105@gmail.com",
  phone: "+91-8960271288",
  github: "https://github.com/Ayush0221",
  linkedin: "https://www.linkedin.com/in/ayush-singh-52938a28b/",
  about: "I am an aspiring technology enthusiast with a strong interest in creating impactful digital solutions that address real-world challenges. I believe in the power of continuous learning, innovation, and collaboration to drive positive change. With a deep sense of social responsibility, I aim to use technology for awareness, inclusion, and community development."
};

const skills = [
  { category: "Languages", items: ["Python", "C++", "C", "HTML", "CSS", "JavaScript"], icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="10" x2="14" y1="4" y2="20"/></svg>' },
  { category: "Frameworks/Libs", items: ["PyTorch", "NumPy", "OpenCV", "Flask", "Socket.IO", "React", "Tailwind"], icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 14 3-3 3 3"/><path d="M22 17H2"/><path d="M6 17V3"/><path d="M18 17V3"/><path d="M2 17a4 4 0 0 1 4 4"/><path d="M18 17a4 4 0 0 0 4 4"/><path d="M17 19h.5a3.5 3.5 0 0 0 0-7h-.5a3.5 3.5 0 0 0-3.5 3.5V19"/><path d="M7 19h-.5a3.5 3.5 0 0 1 0-7h.5a3.5 3.5 0 0 1 3.5 3.5V19"/></svg>' },
  { category: "Core Concepts", items: ["OOPs", "DBMS", "Operating Systems", "Data Structures"], icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="15" y2="20"/></svg>' },
  { category: "Tools & DB", items: ["VS Code", "GitHub", "Firebase", "Supabase"], icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' }
];

const projects = [
  {
    title: "Rehab Model App",
    category: "AI/ML",
    tech: ["MediaPipe", "PyTorch", "OpenCV", "Flask", "Socket.IO"],
    description: "A solution to assist in the structured process of rehabilitation for individuals recovering from injuries. Utilizes Computer Vision to track movements for guided exercises and movement therapy.",
    color: "linear-gradient(to right, #3b82f6, #06b6d4)",
    featured: true
  },
  {
    title: "AI Chatbot",
    category: "AI/ML",
    tech: ["Python", "NLP", "Google Gemini LLM"],
    description: "An AI assistant capable of Speech-to-Text voice commands. Designed to understand natural language, maintain conversational flow, and generate human-like context-aware answers.",
    color: "linear-gradient(to right, #9333ea, #ec4899)",
    featured: true
  },
  {
    title: "Lost and Found Tracker",
    category: "Web Dev",
    tech: ["HTML/CSS/JS", "Firebase", "Supabase"],
    description: "A campus-based web application allowing students and staff to report, search, and recover lost items. Features secure login and real-time data storage.",
    color: "linear-gradient(to right, #fb923c, #ef4444)",
    featured: false
  }
];

const achievements = [
  {
    title: "Research Publication",
    detail: "Smart AI-Enabled Accident Detection System",
    conf: "ICDAM 2025, London Metropolitan University",
    date: "June 2025",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#facc15;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>'
  },
  {
    title: "Patent Grant",
    detail: "Solar-Powered Smart Irrigation Device",
    conf: "India Design No. 452566-001",
    date: "Mar 2025",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#60a5fa;"><path d="m15 22-5-5 5-5"/><path d="M22 11h-7"/><path d="M2 17h7"/><path d="M12 2v5"/><path d="M11 9H4"/></svg>'
  },
  {
    title: "Top 5 Finalist",
    detail: "Inter-Department Modeling Competition",
    conf: "Chandigarh University",
    date: "2025",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#4ade80;"><path d="m15 22-5-5 5-5"/><path d="M22 11h-7"/><path d="M2 17h7"/><path d="M12 2v5"/><path d="M11 9H4"/></svg>'
  }
];

// --- State + small UI helpers
let activeFilter = 'All';
const typingText = "Building Intelligent Solutions";
let typingIndex = 0;

// Smooth scroll helper
function scrollToId(id){
  const element = document.getElementById(id);
  if(!element) return;
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });

  const mobileMenu = document.getElementById('mobile-menu');
  if(mobileMenu && mobileMenu.classList.contains('open')) toggleMenu();
}

// Theme toggle: toggles .light-mode on body
function toggleTheme(){
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-icon-moon').style.display = isLight ? 'none' : 'block';
  document.getElementById('theme-icon-sun').style.display = isLight ? 'block' : 'none';
}

// Navbar scroll behaviour
function handleScroll(){
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 20) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
}

// Mobile menu toggle
function toggleMenu(){
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');
  openIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
  menu.setAttribute('aria-hidden', !isOpen);
}

// Typewriter effect
function typeWriter(){
  const textElement = document.getElementById('typewriter-text');
  if(!textElement) return;
  if(typingIndex < typingText.length){
    textElement.innerHTML += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeWriter, 60);
  }
}

// Parallax for hero blobs
function handleParallax(e){
  const heroSection = document.getElementById('home');
  const blob1 = document.getElementById('blob-1');
  const blob2 = document.getElementById('blob-2');
  if(!heroSection || !blob1 || !blob2) return;
  const rect = heroSection.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  const factor = 0.05;
  blob1.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  blob2.style.transform = `translate(${x * factor * -1}px, ${y * factor * -1}px)`;
}

// --- PROJECT 3D TILT ANIMATION LOGIC ---
function handleProjectCardMouseMove(e){
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  
  // Calculate position relative to the center of the card
  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);
  
  // Define maximum rotation angles and lift (sensitivity)
  const maxRot = 5; 
  const maxLift = 6;
  
  // Calculate tilt: TILT AWAY from the cursor (Y-axis tilt is controlled by X-movement, X-axis tilt by Y-movement)
  const rotX = (y / rect.height) * maxRot * -1; // Tilt X-axis (up/down)
  const rotY = (x / rect.width) * maxRot;      // Tilt Y-axis (left/right)
  
  // Calculate lift: Lift the card slightly
  const liftZ = maxLift; 
  
  card.style.transition = 'none'; // Disable transition during mouse movement for smooth tracking
  card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${liftZ}px)`;
}

function handleProjectCardMouseLeave(e){
  const card = e.currentTarget;
  // Re-enable smooth transition and reset the card to flat
  card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease, border-color 0.3s ease'; 
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)'; 
}
// --- END PROJECT 3D TILT ANIMATION LOGIC ---


// Render functions
function renderSkills(){
  const skillsGrid = document.getElementById('skills-grid');
  if(!skillsGrid) return;
  skillsGrid.style.gridTemplateColumns = 'repeat(1, 1fr)';
  if(window.matchMedia('(min-width:768px)').matches) skillsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  if(window.matchMedia('(min-width:1024px)').matches) skillsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
  skillsGrid.innerHTML = skills.map(group => `
    <div class="skill-group">
      <div class="skill-header">
        <div class="skill-icon-bg">${group.icon}</div>
        <h3>${group.category}</h3>
      </div>
      <div class="skill-badges">
        ${group.items.map(item => `<span class="skill-badge">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects(){
  const projectGrid = document.getElementById('project-grid');
  if(!projectGrid) return;
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  
  projectGrid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-card-header" style="background: ${p.color};"></div>
      <div class="project-content">
        <span class="project-category">${p.category}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.description}</p>
        <div class="project-tech-list">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // ATTACH NEW EVENT LISTENERS FOR 3D TILT
  document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', handleProjectCardMouseMove);
      card.addEventListener('mouseleave', handleProjectCardMouseLeave);
  });
}

function renderAchievements(){
  const container = document.getElementById('timeline-container');
  if(!container) return;
  const isDesktop = window.matchMedia('(min-width:768px)').matches;
  container.innerHTML = achievements.map((item, index) => {
    let contentClass = 'timeline-item-content';
    let delay = (index * 0.2); // Staggering delay
    if(isDesktop && index % 2 !== 0){
      contentClass += ' float-left';
    }
    return `
      <div class="timeline-item">
        <div class="timeline-dot">${item.icon}</div>
        <div class="timeline-line"></div>
        <div class="achievement-card ${contentClass}" style="--animation-delay: ${delay}s;">
          <span>${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <p>${item.conf}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Initial setup
window.addEventListener('load', () => {
  renderSkills();
  renderProjects();
  renderAchievements();
  typeWriter();
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('mousemove', handleParallax);

  const themeToggle = document.getElementById('theme-toggle');
  if(themeToggle) themeToggle.addEventListener('click', toggleTheme);

  document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-filter');
      renderProjects();
    });
  });

  window.addEventListener('resize', () => {
    renderSkills();
    renderAchievements();
  });

  // initial icon states
  document.getElementById('menu-icon-open').style.display = 'block';
  document.getElementById('menu-icon-close').style.display = 'none';
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-icon-moon').style.display = isLight ? 'none' : 'block';
  document.getElementById('theme-icon-sun').style.display = isLight ? 'block' : 'none';
});