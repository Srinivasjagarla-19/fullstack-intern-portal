function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'show';
    setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            localStorage.setItem('internName', email.split('@')[0] || 'Intern');
            showToast('Login Successful!');
            setTimeout(() => { window.location.href = 'dashboard.html'; }, 1000);
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            localStorage.setItem('internName', name);
            showToast('Signup Successful!');
            setTimeout(() => { window.location.href = 'dashboard.html'; }, 1000);
        });
    }

    if (window.location.pathname.endsWith('dashboard.html')) {
        const internName = localStorage.getItem('internName') || 'Intern';
        document.getElementById('internName').textContent = internName;

        fetch('/api/dashboard')
            .then(response => response.json())
            .then(data => {
                document.getElementById('referralCode').textContent = data.referral_code;
                document.getElementById('donations').textContent = `₹${data.donations_raised}`;
            })
            .catch(error => {
                console.error('Error fetching dashboard data:', error);
                document.getElementById('referralCode').textContent = 'intern2025';
                document.getElementById('donations').textContent = '$0';
            });

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('internName');
                window.location.href = 'index.html';
            });
        }
    }

        document.querySelectorAll('.toggle-password').forEach(item => {
        item.addEventListener('click', event => {
            const passwordInput = event.target.previousElementSibling;
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                event.target.textContent = '😑';
            } else {
                passwordInput.type = 'password';
                event.target.textContent = '👁️';
            }
        });
    });

    if (window.location.pathname.endsWith('leaderboard.html')) {
        fetch('/api/leaderboard')
            .then(response => response.json())
            .then(data => {
                const list = document.getElementById('leaderboard-list');
                data.forEach((intern, index) => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${index + 1}. ${intern.name}</strong> - ₹${intern.donations_raised}`;
                    list.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching leaderboard data:', error));
    }
});
