document.addEventListener('DOMContentLoaded', () => {
    // Fetch 
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        fetch('db.json')
            .then(response => response.json())
            .then(data => {
                data.projects.forEach(project => {
                    const projectDiv = document.createElement('div');
                    projectDiv.className = 'project';
                    projectDiv.innerHTML = `
                        <img src="${project.image}" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    `;
                    projectsContainer.appendChild(projectDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching the projects:', error);
                projectsContainer.innerHTML = '<p>Failed to load projects.</p>';
            });
    }

    // noor's Contact form 
    const contactForm = document.getElementById('contact-form');
    const contactPopup = document.getElementById('contact-popup');
    if (contactForm && contactPopup) {
        const closeContactPopup = contactPopup.querySelector('.close-btn');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            contactPopup.style.display = 'block';
        });

    //     closeContactPopup.addEventListener('click', () => {
    //         contactPopup.style.display = 'none';
    //     });

    //     window.addEventListener('click', (event) => {
    //         if (event.target == contactPopup) {
    //             contactPopup.style.display = 'none';
    //         }
    //     });
    // }
    //noor;s Donation 
    const donationForm = document.getElementById('donation-form');
    const donationPopup = document.getElementById('donation-popup');
    if (donationForm && donationPopup) {
        const paymentMethod = document.getElementById('payment-method');
        const accountInfo = document.getElementById('account-info');
        const closeDonationPopup = donationPopup.querySelector('.close-btn');

        paymentMethod.addEventListener('change', () => {
            if (paymentMethod.value) {
                accountInfo.style.display = 'block';
            } else {
                accountInfo.style.display = 'none';
            }
        });

        donationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            donationPopup.style.display = 'block';
        });
        closeDonationPopup.addEventListener('click', () => {
            donationPopup.style.display = 'none';
        });
        window.addEventListener('click', (event) => {
            if (event.target == donationPopup) {
                donationPopup.style.display = 'none';
            }
        });
    }
    //noor's Toggle menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('showing');
        menuToggle.classList.toggle('showing');
    });
});