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
    
    // Helper function to pick random response
    const randomResponse = (responses) => {
        return responses[Math.floor(Math.random() * responses.length)];
    };
    
    // Current role / job
    if (msg.includes('current') && (msg.includes('role') || msg.includes('job') || msg.includes('work') || msg.includes('position'))) {
        return randomResponse([
            "Vidushi is currently an Intermediate Software Engineer at Citibank, Canada, where she's been working since 2021. She focuses on building secure and scalable financial software solutions.",
            "She's working as an Intermediate Software Engineer at Citibank in Canada since 2021, specializing in enterprise-level financial systems with a focus on security and scalability.",
            "Right now, Vidushi is with Citibank Canada as an Intermediate Software Engineer (since 2021), developing robust financial software solutions."
        ]);
    }
    
    // Skills / technical
    if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack') || msg.includes('language') || msg.includes('know')) {
        return randomResponse([
            "Vidushi's technical skills include Java, Python, JavaScript, React, Node.js, Spring Boot, SQL, PostgreSQL, cloud technologies, and she's currently transitioning into AI/ML engineering with experience in TensorFlow and scikit-learn.",
            "Her tech stack spans Java, Python, JavaScript, React, Node.js, Spring Boot, and databases like PostgreSQL. She's also diving deep into AI/ML with TensorFlow and scikit-learn!",
            "She works with a wide range of technologies: Java, Python, JavaScript (React, Node.js), Spring Boot, SQL, cloud platforms, and is expanding into AI/ML with TensorFlow and scikit-learn."
        ]);
    }
    
    // Education / study
    if (msg.includes('educat') || msg.includes('study') || msg.includes('degree') || msg.includes('university') || msg.includes('school')) {
        return randomResponse([
            "Vidushi holds an MS in Digital Transformation & Innovation from the University of Ottawa (2019-2021) and a Bachelor's in Computer Science Engineering from the University of Jammu, India (2013-2017).",
            "She has an MS in Digital Transformation & Innovation from University of Ottawa and a Computer Science Engineering degree from University of Jammu, India.",
            "Her educational background includes a Master's in Digital Transformation & Innovation (U of Ottawa, 2019-2021) and a Bachelor's in Computer Science Engineering (University of Jammu, India, 2013-2017)."
        ]);
    }
    
    // Experience / background / career
    if (msg.includes('experience') || msg.includes('background') || msg.includes('career') || msg.includes('worked') || msg.includes('previous')) {
        return randomResponse([
            "Vidushi has diverse experience including: Software Engineer at Citibank (2021-present), roles at Bowhead Health Inc. and Environment and Climate Change Canada (2020), Graduate Teaching Assistant at University of Ottawa, and Risk Analyst at Amazon India (2017-2018).",
            "Her career spans multiple sectors - currently at Citibank as a Software Engineer, previously at Bowhead Health, Environment Canada, University of Ottawa, and Amazon India. Quite a journey!",
            "She's worked across banking (Citibank), healthcare (Bowhead Health), government (Environment Canada), education (U of Ottawa), and tech (Amazon India). That's a really diverse background!"
        ]);
    }
    
    // Projects
    if (msg.includes('project') || msg.includes('built') || msg.includes('developed') || msg.includes('portfolio')) {
        return randomResponse([
            "Vidushi has worked on various projects including enterprise banking solutions at Citibank, environmental data platforms for climate monitoring, healthcare management systems, ML prediction models, and risk analysis dashboards. Check out the Projects section above for more details!",
            "Her project portfolio includes banking systems, climate data platforms, healthcare management tools, machine learning models, and risk analysis dashboards. Scroll up to the Projects section to see more!",
            "She's built everything from financial software to healthcare platforms to ML models. Take a look at the Projects section above to explore her work in detail!"
        ]);
    }
    
    // AI / Machine Learning
    if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml') || msg.includes('artificial intelligence')) {
        return randomResponse([
            "Vidushi is actively transitioning into AI Engineering! She has experience with Python, TensorFlow, scikit-learn, and data science. She's passionate about building intelligent systems and applying ML to solve real-world problems.",
            "AI/ML is her current focus! She's working with TensorFlow, scikit-learn, and Python to build intelligent systems. It's an exciting transition from traditional software engineering.",
            "She's making the move into AI Engineering with hands-on experience in TensorFlow, scikit-learn, and ML algorithms. Her goal is to build AI systems that solve real-world challenges."
        ]);
    }
    
    // Contact / email / reach / hire
    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('hire') || msg.includes('connect') || msg.includes('talk')) {
        return randomResponse([
            "You can reach Vidushi at vidzimohan@gmail.com. She's also active on LinkedIn (linkedin.com/in/vidushi3108) and GitHub (github.com/vidushiee). Feel free to send her an email to discuss opportunities!",
            "Best way to contact her is via email at vidzimohan@gmail.com. You can also connect on LinkedIn (/in/vidushi3108) or check out her GitHub (github.com/vidushiee).",
            "Drop her an email at vidzimohan@gmail.com! She's also on LinkedIn (vidushi3108) and GitHub (vidushiee) if you want to see more of her work first."
        ]);
    }
    
    // Location
    if (msg.includes('location') || msg.includes('where') || msg.includes('based') || msg.includes('live')) {
        return randomResponse([
            "Vidushi is based in Ontario, Canada.",
            "She's currently in Ontario, Canada.",
            "Ontario, Canada is where she's located!"
        ]);
    }
    
    // Citibank specific
    if (msg.includes('citibank') || msg.includes('citi') || msg.includes('bank')) {
        return randomResponse([
            "At Citibank, Vidushi works as an Intermediate Software Engineer developing enterprise-level financial software with a focus on security, scalability, and microservices architecture using Java and Spring.",
            "She's building enterprise financial systems at Citibank, focusing on secure, scalable solutions with Java, Spring, and microservices.",
            "Her role at Citibank involves developing robust banking software using Java, Spring Boot, and microservices - all with security and scalability as top priorities."
        ]);
    }
    
    // Amazon
    if (msg.includes('amazon')) {
        return randomResponse([
            "Vidushi worked as a Risk Analyst at Amazon India from 2017-2018, where she developed risk assessment dashboards and fraud detection systems using Python, SQL, and Tableau.",
            "At Amazon India (2017-2018), she was a Risk Analyst building fraud detection systems and risk dashboards with Python, SQL, and Tableau.",
            "Her Amazon experience was as a Risk Analyst in India, where she created analytics dashboards and fraud detection systems from 2017-2018."
        ]);
    }
    
    // Healthcare / Bowhead
    if (msg.includes('healthcare') || msg.includes('bowhead') || msg.includes('health')) {
        return randomResponse([
            "At Bowhead Health Inc., Vidushi worked as a Software Developer (May-Aug 2020) building digital health platforms using React, Node.js, and PostgreSQL to improve patient care coordination.",
            "She developed healthcare management systems at Bowhead Health using React, Node.js, and PostgreSQL - all focused on better patient care coordination.",
            "Her healthcare experience was at Bowhead Health Inc. where she built digital health platforms with React and Node.js in 2020."
        ]);
    }
    
    // Environment Canada / Climate
    if (msg.includes('environment') || msg.includes('climate') || msg.includes('government')) {
        return randomResponse([
            "Vidushi worked as a Junior Software Developer at Environment and Climate Change Canada (Jan-Apr 2020), developing environmental monitoring systems for tracking climate data and generating policy insights.",
            "At Environment and Climate Change Canada, she built systems to track climate data and support environmental policy decisions (early 2020).",
            "Her government work was with Environment Canada, where she developed climate monitoring platforms to help with environmental policy-making."
        ]);
    }
    
    // Greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg === 'hi' || msg === 'hello') {
        return randomResponse([
            "Hello! I'm Vidushi's portfolio assistant. I can tell you about her experience, skills, education, projects, and how to contact her. What would you like to know?",
            "Hi there! I'm here to help you learn about Vidushi's background. Ask me about her work experience, technical skills, education, or projects!",
            "Hey! I can answer questions about Vidushi's career, skills, education, and projects. What would you like to know?",
            "Hello! Feel free to ask me anything about Vidushi's experience, technical expertise, education, or how to get in touch with her!"
        ]);
    }
    
    // Thanks
    if (msg.includes('thank') || msg.includes('thanks')) {
        return randomResponse([
            "You're welcome! Feel free to ask anything else about Vidushi's background, or reach out to her directly at vidzimohan@gmail.com.",
            "Happy to help! If you have more questions, just ask. Or email Vidushi at vidzimohan@gmail.com.",
            "My pleasure! Let me know if you'd like to know anything else, or contact Vidushi directly at vidzimohan@gmail.com.",
            "Anytime! Feel free to reach out to Vidushi at vidzimohan@gmail.com if you'd like to chat further."
        ]);
    }
    
    // Who is / tell me about
    if (msg.includes('who') || msg.includes('tell me about')) {
        return randomResponse([
            "Vidushi Mohan is a Software Engineer at Citibank with a strong background in full-stack development, financial systems, and a growing focus on AI/ML. She holds an MS in Digital Transformation & Innovation and has experience across banking, healthcare, government, and tech sectors.",
            "Vidushi is a versatile Software Engineer currently at Citibank, with experience spanning banking, healthcare, government, and tech. She's got an MS in Digital Transformation & Innovation and is now diving into AI/ML.",
            "She's a Software Engineer at Citibank with diverse experience in financial systems, healthcare tech, and environmental software. With an MS in Digital Transformation, she's now transitioning into AI Engineering."
        ]);
    }
    
    // Default responses (also varied!)
    return randomResponse([
        "I can help you learn about Vidushi's experience, skills, education, projects, or how to contact her. Try asking about her current role, technical skills, background, or projects!",
        "I'm here to answer questions about Vidushi! Ask me about her work experience, technical expertise, education, projects, or how to get in touch.",
        "Feel free to ask about Vidushi's career journey, technical skills, education background, or projects. What interests you most?",
        "Not sure what you're asking, but I can tell you about Vidushi's experience, skills, education, or projects. What would you like to know? Or email her at vidzimohan@gmail.com!"
    ]);
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

// Timeline Animation - Fly in from sides
(function() {
  'use strict';
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    // More lenient viewport check - trigger earlier
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 150 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function callbackFunc() {
    var items = document.querySelectorAll(".timeline-item");
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  
  // Listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

// Timeline Animation (for Journey section)
(function() {
  'use strict';
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function callbackFunc() {
    var items = document.querySelectorAll(".timeline-item");
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  
  // Listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();