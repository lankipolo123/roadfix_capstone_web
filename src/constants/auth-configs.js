export const AUTH_FIELDS = {
    login: [
        { name: 'email', type: 'email', label: 'Email', required: true, placeholder: 'Enter your email' },
        { name: 'password', type: 'password', label: 'Password', required: true, placeholder: 'Enter your password' }
    ],
    signup: [
        { name: 'firstName', type: 'text', label: 'First Name', required: true, placeholder: 'Enter your first name' },
        { name: 'lastName', type: 'text', label: 'Last Name', required: true, placeholder: 'Enter your last name' },
        { name: 'email', type: 'email', label: 'Email', required: true, placeholder: 'Enter your email' },
        { name: 'password', type: 'password', label: 'Password', required: true, placeholder: 'Enter your password' },
        { name: 'confirmPassword', type: 'password', label: 'Confirm Password', required: true, placeholder: 'Confirm your password' }
    ]
};

export const AUTH_CONFIG = {
    login: {
        title: 'Welcome Back',
        subtitle: 'Sign in to your account',
        submitText: 'Sign In',
        showRememberMe: true,
        showForgotPassword: true,
        showGoogleSignin: true
    },
    signup: {
        title: 'Create Account',
        subtitle: 'Sign up for a new account',
        submitText: 'Sign Up',
        showRememberMe: false,
        showForgotPassword: false,
        showGoogleSignin: true
    }
};