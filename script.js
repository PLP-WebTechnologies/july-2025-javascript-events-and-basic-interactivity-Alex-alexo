// ===== PART 1: JavaScript Event Handling =====

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const toggleText = document.querySelector('.toggle-text');
    
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggleText.textContent = 'Dark Mode';
        } else {
            toggleText.textContent = 'Light Mode';
        }
    });
    
    // ===== PART 2: Interactive Elements =====
    
    // Counter game functionality
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        counterValue.textContent = count;
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        counterValue.textContent = count;
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        counterValue.textContent = count;
    });
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            // Close all other open FAQs
            document.querySelectorAll('.faq-answer').forEach(function(item) {
                if (item !== answer && item.classList.contains('open')) {
                    item.classList.remove('open');
                    item.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('open');
            toggle.textContent = answer.classList.contains('open') ? '-' : '+';
        });
    });
    
    // Tabbed interface functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.tab-pane').forEach(function(pane) {
                pane.classList.remove('active');
            });
            
            // Add active class to current button and pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // ===== PART 3: Form Validation =====
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const successMessage = document.getElementById('form-success');
    
    // Real-time validation
    nameInput.addEventListener('input', function() {
        validateName();
    });
    
    emailInput.addEventListener('input', function() {
        validateEmail();
    });
    
    passwordInput.addEventListener('input', function() {
        validatePassword();
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isEmailValid && isPasswordValid) {
            successMessage.style.display = 'block';
            
            // Reset form after 2 seconds
            setTimeout(function() {
                form.reset();
                successMessage.style.display = 'none';
            }, 2000);
        }
    });
    
    // Validation functions
    function validateName() {
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        
        if (!nameRegex.test(nameInput.value)) {
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }
    
    function validatePassword() {
        // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }
});
