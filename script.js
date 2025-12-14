// Handle Enter key in chat input
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Send suggestion from chips
function sendSuggestion(text) {
    document.getElementById('chatInput').value = text;
    sendMessage();
}

// Smart chatbot responses (FREE - no API needed!)
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Current role / job
    if (msg.includes('current') && (msg.includes('role') || msg.includes('job') || msg.includes('work') || msg.includes('position'))) {
        return "Vidushi is currently an Intermediate Software Engineer at Citibank, Canada, where she's been working since 2021. She focuses on building secure and scalable financial software solutions.";
    }
    
    // Skills / technical
    if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack') || msg.includes('language') || msg.includes('know')) {
        return "Vidushi's technical skills include Java, Python, JavaScript, React, Node.js, Spring Boot, SQL, PostgreSQL, cloud technologies, and she's currently transitioning into AI/ML engineering with experience in TensorFlow and scikit-learn.";
    }
    
    // Education / study
    if (msg.includes('educat') || msg.includes('study') || msg.includes('degree') || msg.includes('university') || msg.includes('school')) {
        return "Vidushi holds an MS in Digital Transformation & Innovation from the University of Ottawa (2019-2021) and a Bachelor's in Computer Science Engineering from the University of Jammu, India (2013-2017).";
    }
    
    // Experience / background / career
    if (msg.includes('experience') || msg.includes('background') || msg.includes('career') || msg.includes('worked') || msg.includes('previous')) {
        return "Vidushi has diverse experience including: Software Engineer at Citibank (2021-present), roles at Bowhead Health Inc. and Environment and Climate Change Canada (2020), Graduate Teaching Assistant at University of Ottawa, and Risk Analyst at Amazon India (2017-2018).";
    }
    
    // Projects
    if (msg.includes('project') || msg.includes('built') || msg.includes('developed') || msg.includes('portfolio')) {
        return "Vidushi has worked on various projects including enterprise banking solutions at Citibank, environmental data platforms for climate monitoring, healthcare management systems, ML prediction models, and risk analysis dashboards. Check out the Projects section above for more details!";
    }
    
    // AI / Machine Learning
    if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml') || msg.includes('artificial intelligence')) {
        return "Vidushi is actively transitioning into AI Engineering! She has experience with Python, TensorFlow, scikit-learn, and data science. She's passionate about building intelligent systems and applying ML to solve real-world problems.";
    }
    
    // Contact / email / reach / hire
    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('hire') || msg.includes('connect') || msg.includes('talk')) {
        return "You can reach Vidushi at vidzimohan@gmail.com. She's also active on LinkedIn (linkedin.com/in/vidushi3108) and GitHub (github.com/vidushiee). Feel free to send her an email to discuss opportunities!";
    }
    
    // Location
    if (msg.includes('location') || msg.includes('where') || msg.includes('based') || msg.includes('live')) {
        return "Vidushi is based in Ontario, Canada.";
    }
    
    // Citibank specific
    if (msg.includes('citibank') || msg.includes('citi') || msg.includes('bank')) {
        return "At Citibank, Vidushi works as an Intermediate Software Engineer developing enterprise-level financial software with a focus on security, scalability, and microservices architecture using Java and Spring.";
    }
    
    // Amazon
    if (msg.includes('amazon')) {
        return "Vidushi worked as a Risk Analyst at Amazon India from 2017-2018, where she developed risk assessment dashboards and fraud detection systems using Python, SQL, and Tableau.";
    }
    
    // Healthcare / Bowhead
    if (msg.includes('healthcare') || msg.includes('bowhead') || msg.includes('health')) {
        return "At Bowhead Health Inc., Vidushi worked as a Software Developer (May-Aug 2020) building digital health platforms using React, Node.js, and PostgreSQL to improve patient care coordination.";
    }
    
    // Environment Canada / Climate
    if (msg.includes('environment') || msg.includes('climate') || msg.includes('government')) {
        return "Vidushi worked as a Junior Software Developer at Environment and Climate Change Canada (Jan-Apr 2020), developing environmental monitoring systems for tracking climate data and generating policy insights.";
    }
    
    // Greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg === 'hi' || msg === 'hello') {
        return "Hello! I'm Vidushi's portfolio assistant. I can tell you about her experience, skills, education, projects, and how to contact her. What would you like to know?";
    }
    
    // Thanks
    if (msg.includes('thank') || msg.includes('thanks')) {
        return "You're welcome! Feel free to ask anything else about Vidushi's background, or reach out to her directly at vidzimohan@gmail.com.";
    }
    
    // Who is / tell me about
    if (msg.includes('who') || msg.includes('tell me about')) {
        return "Vidushi Mohan is a Software Engineer at Citibank with a strong background in full-stack development, financial systems, and a growing focus on AI/ML. She holds an MS in Digital Transformation & Innovation and has experience across banking, healthcare, government, and tech sectors.";
    }
    
    // Default response
    return "I can help you learn about Vidushi's experience, skills, education, projects, or how to contact her. Try asking about her current role, technical skills, background, or projects! You can also email her directly at vidzimohan@gmail.com.";
}

// Main chat function (FREE version)
function sendMessage() {
    const input = document.getElementById('chatInput');
    const messagesContainer = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = message;
    messagesContainer.appendChild(userMsg);
    input.value = '';

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Show typing indicator
    typingIndicator.classList.add('active');

    // Simulate thinking time (makes it feel more natural)
    setTimeout(() => {
        typingIndicator.classList.remove('active');
        
        // Get bot response
        const botResponse = getBotResponse(message);
        
        // Add bot response
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        botMsg.textContent = botResponse;
        messagesContainer.appendChild(botMsg);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000); // 1 second delay for natural feel
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Spy - Highlight active section in navbar
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport (with offset for navbar)
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Run on page load
window.addEventListener('load', updateActiveNavLink);