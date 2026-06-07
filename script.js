// ===============================
// Sanskriti Grover Portfolio JS
// ===============================

const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Header shadow on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
});

// Mobile navigation
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("open");
  });
});

// Reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Active nav highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// Training tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const trainingPanels = document.querySelectorAll(".training-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    trainingPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

// Project modal content
const projectContent = {
  "prompt-shield": {
    kicker: "AI Security Platform",
    title: "Prompt Shield",
    body: `
      <p><strong>Prompt Shield</strong> is a full-stack AI prompt security and prompt engineering platform that detects unsafe prompts and improves recoverable prompts using prompt engineering techniques.</p>
      <p>The system uses a trained RoBERTa classifier to score prompts across injection, PII exposure, harmful content, and contextual/social-engineering risk dimensions.</p>
      <ul>
        <li>Prompt injection and jailbreak detection</li>
        <li>PII and sensitive data exposure identification</li>
        <li>Harmful or unsafe content classification</li>
        <li>Contextual and social-engineering risk scoring</li>
        <li>Risk levels: SAFE, LOW, MEDIUM, HIGH, CRITICAL</li>
        <li>Recommended actions: allow, warn, or block</li>
        <li>Safer rewritten prompts where appropriate</li>
      </ul>
    `
  },
  "ai-pentest": {
    kicker: "AI + Pentesting Research",
    title: "AI-Driven VA/PT & OSINT Automation",
    body: `
      <p>This project explores AI-assisted cybersecurity workflows where a local LLM connects with Kali Linux tools through an MCP-based automation pipeline.</p>
      <p>The workflow allows the AI to choose a security tool, execute scans, read the output, and summarize findings for VA, PT, and OSINT tasks.</p>
      <ul>
        <li>Experimented with Qwen3:14B running locally</li>
        <li>Integrated AI workflow with Kali security tools</li>
        <li>Reduced dependence on expensive API-based models</li>
        <li>Explored local control over security automation workflows</li>
        <li>Research direction: AI-driven attack behavior inside cyber ranges</li>
      </ul>
    `
  },
  "vulnx": {
    kicker: "Automated Penetration Testing",
    title: "VulnX",
    body: `
      <p><strong>VulnX</strong> is a web-based Automated Penetration Testing Tool built using Python by integrating Metasploit to automate key security testing tasks.</p>
      <ul>
        <li>Reconnaissance automation</li>
        <li>Vulnerability scanning workflow</li>
        <li>Exploitation support through Metasploit integration</li>
        <li>Real-time scanning capability</li>
        <li>Vulnerability prioritization</li>
        <li>Scalable framework integration for cybersecurity assessments</li>
      </ul>
    `
  },
  "tabletop": {
    kicker: "Cyber Drill Platform",
    title: "AI Tabletop Exercise Platform",
    body: `
      <p>An AI-assisted tabletop exercise platform built using Node.js and Express, leveraging Claude for dynamic scenario injection and automated evaluation of participant submissions.</p>
      <ul>
        <li>Dynamic cyber crisis scenario injects</li>
        <li>Automated evaluation of user submissions</li>
        <li>Readiness gap analysis</li>
        <li>Intelligent assessment outputs</li>
        <li>Designed for cybersecurity preparedness and incident response exercises</li>
      </ul>
    `
  },
  "soc": {
    kicker: "SOC Engineering",
    title: "SOC Implementation",
    body: `
      <p>Implemented SOC setup with open-source threat intelligence and detection technologies to improve incident management, monitoring, and response capabilities.</p>
      <ul>
        <li>Advanced incident management tools including TheHive and Cortex</li>
        <li>Threat intelligence integration with MISP</li>
        <li>WAF and IDS/IPS components</li>
        <li>Enhanced detection and response capability</li>
        <li>Operational workflows for security monitoring and incident response</li>
      </ul>
    `
  },
  "tabby": {
    kicker: "Hardware / Embedded",
    title: "Tabby 2.0",
    body: `
      <p>Tabby 2.0 is a customized academic tablet built using Arduino Atmega microcontroller and Thin Film Transistor LCD.</p>
      <ul>
        <li>Used Adafruit_TFTLCD and Adafruit_GFX libraries</li>
        <li>Enabled writing interface with multiple subfolders</li>
        <li>Implemented SD card storage through SPI communication</li>
        <li>Studied file formats and selected BMP format for implementation</li>
      </ul>
    `
  }
};

const modal = document.getElementById("projectModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const projectKey = card.dataset.project;
    const content = projectContent[projectKey];

    if (!content) return;

    modalKicker.textContent = content.kicker;
    modalTitle.textContent = content.title;
    modalBody.innerHTML = content.body;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
