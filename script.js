/* NAVIGATION + FOOTER */
    
(function setuppage() {

    const currentPage = document.body.dataset.page || 'home'; //Use data-page attribute to determine the current page.

    // Header
    const topNav = document.getElementById('topNav');
    if (topNav) {
    
        // Logo button
        const logoBtn = document.createElement('button');
        logoBtn.className = 'logo-container';
        logoBtn.id = 'logoHomeBtn';
        logoBtn.title = 'Go to Home';
        
        logoBtn.innerHTML = `
            <img src="PowerIcon.png" alt="Power Bolt Logo" class="logo-img">
        `;
        
        // Clickable logo button to go to home page.
        logoBtn.addEventListener('click', function () {
        window.location.href = 'index.html';
        });

        // Navigation container
        const navLinks = document.createElement('nav');
        navLinks.className = 'nav-links';
        
        const navItems = [
            {
                page: 'home',
                label: 'Home',
                icon: 'fa-home',
                href: 'index.html'
            },
            {
                page: 'televisions',
                label: 'Televisions',
                icon: 'fa-tv',
                href: 'television.html'
            },
            {
                page: 'about',
                label: 'About Us',
                icon: 'fa-users',
                href: 'About Us.html'
            }
        ];

        // Loop through the navigation items.
        navItems.forEach(function (item) {
            const btn = document.createElement('button');
            btn.className = 'nav-btn';
            btn.dataset.page = item.page;

            if (item.page === currentPage) {
                btn.classList.add('active');
            }

            // Set the inner HTML of the button to include the icon and button.
            btn.innerHTML = `<i class="fas ${item.icon}"></i> ${item.label}`;
            
            btn.addEventListener('click', function () {
                window.location.href = item.href;
            });
            
            // Put the button into the navigation container.
            navLinks.appendChild(btn);
        });
            
        // Add the logo button and navigation container to the header.
        topNav.appendChild(logoBtn);
        topNav.appendChild(navLinks);
    }

    // Footer
    const footer = document.getElementById('siteFooter'); // Find siteFooter element in the HTML.
    if (footer) {
        const year = new Date().getFullYear();
    
        footer.innerHTML = `
            <p>© ${year} <strong>Yu Rou YAP</strong></p>
            <p class="genai-note">
                <i class="fas fa-robot"></i>
                GenAI acknowledgement: GitHub Copilot assisted with coding and content structure.
            </p>
        `;
    }

})();