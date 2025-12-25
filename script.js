document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing');

    // Get all elements
    const editBtn = document.getElementById('editBtn');
    const signupModal = document.getElementById('signupModal');
    const closeModal = document.getElementById('closeModal');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const switchToSignup = document.getElementById('switchToSignup');

    console.log('Elements found:');
    console.log('- editBtn:', !!editBtn);
    console.log('- signupModal:', !!signupModal);
    console.log('- loginModal:', !!loginModal);

    // ===== SIGN UP MODAL =====
    if (editBtn && signupModal) {
        console.log('Adding click handler to editBtn');
        editBtn.addEventListener('click', function(e) {
            console.log('EDIT BUTTON CLICKED!');
            e.preventDefault();
            signupModal.style.setProperty('display', 'flex', 'important');
            console.log('signupModal display:', signupModal.style.display);
        });
    }

    if (closeModal && signupModal) {
        closeModal.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.setProperty('display', 'none', 'important');
        });
    }

    if (switchToLogin && signupModal && loginModal) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.setProperty('display', 'none', 'important');
            loginModal.style.setProperty('display', 'flex', 'important');
        });
    }

    // ===== LOG IN MODAL =====
    if (switchToSignup && loginModal && signupModal) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.setProperty('display', 'none', 'important');
            signupModal.style.setProperty('display', 'flex', 'important');
        });
    }

    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.setProperty('display', 'none', 'important');
        });
    }

    // Close modal when clicking background
    if (signupModal) {
        signupModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.setProperty('display', 'none', 'important');
            }
        });
    }

    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.setProperty('display', 'none', 'important');
            }
        });
    }

    // ===== NAVIGATION =====
    const homeLink = document.querySelector('a.nav-home');
    const resumeLink = document.querySelector('a.nav-resume');
    const projectsLink = document.querySelector('a.nav-projects');
    const contactLink = document.querySelector('a.nav-contact');
    const homeSection = document.getElementById('homeSection');
    const resumeSection = document.getElementById('resumeSection');
    const projectsSection = document.getElementById('projectsSection');
    const contactSection = document.getElementById('contactSection');

    function hideAllSections() {
        homeSection.style.display = 'none';
        resumeSection.style.display = 'none';
        projectsSection.style.display = 'none';
        contactSection.style.display = 'none';
    }

    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            homeSection.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            resumeSection.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    if (projectsLink) {
        projectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            projectsSection.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            hideAllSections();
            contactSection.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    // ===== MOBILE MENU =====
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    // Projects and Contact links
    const oldProjectsLink = document.querySelector('a[href="#projects"]');

    if (oldProjectsLink) {
        oldProjectsLink.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }

    // ===== BANNER SCROLL =====
    const banner = document.getElementById('topBanner');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (window.innerWidth <= 768 && banner) {
            if (scrollTop > lastScrollTop) {
                banner.style.display = 'none';
            } else {
                banner.style.display = 'flex';
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    console.log('✓ All event listeners attached successfully');
});
