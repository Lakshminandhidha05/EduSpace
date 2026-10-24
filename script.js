// Mobile Menu
function showMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("menu").classList.remove("active");
}

// Details for courses, events, teachers and blogs
const details = {
    about: {
        category: "ABOUT EDUSPACE",
        title: "Learn, Grow and Succeed",
        description: "EduSpace helps learners build practical skills, gain confidence and explore new learning opportunities.",
        duration: "Our focus: Simple learning materials",
        level: "Approach: Practical and supportive learning"
    },

    web: {
        category: "DEVELOPMENT COURSE",
        title: "Web Development",
        description: "Learn HTML for page structure, CSS for styling and JavaScript for interactivity.",
        duration: "Example duration: 6 weeks",
        level: "Level: Beginner"
    },

    java: {
        category: "PROGRAMMING COURSE",
        title: "Java Programming",
        description: "Learn Java syntax, variables, conditions, loops, methods and object-oriented programming basics.",
        duration: "Example duration: 8 weeks",
        level: "Level: Beginner"
    },

    design: {
        category: "DESIGN COURSE",
        title: "UI/UX Design",
        description: "Explore user interface design, wireframes, prototypes, colour choices and user-friendly layouts.",
        duration: "Example duration: 4 weeks",
        level: "Level: Beginner"
    },

    workshop: {
        category: "UPCOMING EVENT",
        title: "Web Design Workshop",
        description: "Explore website layouts, colour combinations and basic design principles through practical activities.",
        duration: "Date: 15 November",
        level: "Activity: Hands-on workshop"
    },

    "programming-day": {
        category: "UPCOMING EVENT",
        title: "Programming Day",
        description: "Practise coding concepts through simple programming activities and beginner-friendly challenges.",
        duration: "Date: 22 November",
        level: "Activity: Coding practice"
    },

    meetup: {
        category: "UPCOMING EVENT",
        title: "Student Meet-up",
        description: "Meet fellow learners, exchange ideas and share learning experiences in a friendly environment.",
        duration: "Date: 30 November",
        level: "Activity: Student networking"
    },

    priya: {
        category: "OUR TEACHERS",
        title: "Priya Sharma",
        description: "Explore website structure, responsive styling and frontend development basics.",
        duration: "Speciality: Web Development",
        level: "Focus: HTML, CSS and JavaScript"
    },

    arun: {
        category: "OUR TEACHERS",
        title: "Arun Kumar",
        description: "Understand programming fundamentals and practise problem-solving step by step.",
        duration: "Speciality: Java Programming",
        level: "Focus: Object-Oriented Programming"
    },

    meera: {
        category: "OUR TEACHERS",
        title: "Meera Ravi",
        description: "Learn design principles and create clear, user-friendly digital experiences.",
        duration: "Speciality: UI/UX Design",
        level: "Focus: Wireframes and prototypes"
    },

    "study-tips": {
        category: "STUDY TIPS",
        title: "5 Ways to Make Learning Easier",
        description: "Set small goals, take short breaks, revise regularly, practise recalling what you learn and reduce distractions.",
        duration: "Tip: Create a simple daily study plan.",
        level: "Goal: Learn consistently"
    },

    "web-journey": {
        category: "TECHNOLOGY",
        title: "Start Your Web Development Journey",
        description: "Start with HTML, add styles using CSS and use JavaScript to make your website interactive.",
        duration: "Learning path: HTML → CSS → JavaScript",
        level: "Level: Beginner"
    },

    "career-growth": {
        category: "CAREER GROWTH",
        title: "Keep Growing Your Skills",
        description: "Practise consistently, build small projects and keep your work in a portfolio to demonstrate your abilities.",
        duration: "Tip: Complete one project at a time.",
        level: "Goal: Improve practical skills"
    }
};

// Open the reusable popup
function showDetails(key) {
    const item = details[key];

    if (!item) return;

    document.getElementById("popupCategory").innerText = item.category;
    document.getElementById("courseTitle").innerText = item.title;
    document.getElementById("courseDescription").innerText = item.description;
    document.getElementById("courseDuration").innerText = item.duration;
    document.getElementById("courseLevel").innerText = item.level;

    const popup = document.getElementById("coursePopup");
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");
}

// Keep the original showCourse function style
function showCourse(courseName) {
    const course = Object.keys(details).find(
        key => details[key].title === courseName
    );

    if (course) {
        showDetails(course);
    }
}

// Close popup
function closePopup() {
    const popup = document.getElementById("coursePopup");
    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");
}

// Close popup by clicking outside
document.getElementById("coursePopup").addEventListener("click", function(event) {
    if (event.target === this) {
        closePopup();
    }
});

// Close popup using Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup();
    }
});

// Student Reviews
const reviews = [
    {
        text: "The lessons are easy to follow, and I enjoy learning new skills through practical examples.",
        name: "Ananya R.",
        role: "Web Development Learner"
    },
    {
        text: "The simple explanations helped me understand programming and practise with more confidence.",
        name: "Rahul S.",
        role: "Java Programming Learner"
    },
    {
        text: "I enjoyed exploring colours, layouts and design ideas while learning to create better user experiences.",
        name: "Meena K.",
        role: "UI/UX Design Learner"
    }
];

let reviewIndex = 0;

function changeQuote(direction) {
    reviewIndex = (reviewIndex + direction + reviews.length) % reviews.length;

    document.getElementById("quoteText").innerText = reviews[reviewIndex].text;
    document.getElementById("quoteName").innerText = reviews[reviewIndex].name;
    document.getElementById("quoteRole").innerText = reviews[reviewIndex].role;
}

// Newsletter demo
function subscribe(event) {
    event.preventDefault();

    const message = document.getElementById("subscribeMessage");
    message.innerText = "Thank you for your interest in EduSpace!";

    event.target.reset();
}