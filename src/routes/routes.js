// router.js
class SimpleRouter {
    constructor() {
        this.routes = {};
        this.currentRoute = '';

        window.addEventListener('popstate', () => {
            this.navigateToCurrentPath();
        });

        // Handle initial load
        this.navigateToCurrentPath();
    }

    addRoute(path, component) {
        this.routes[path] = component;
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.navigateToCurrentPath();
    }

    navigateToCurrentPath() {
        const path = window.location.pathname;
        const component = this.routes[path];

        if (component) {
            this.renderComponent(component);
        } else {
            // Handle 404 or redirect to default route
            this.navigate('/login');
        }
    }

    renderComponent(component) {
        const app = document.querySelector('#app');
        if (app) {
            app.innerHTML = `<${component}></${component}>`;
        }
    }
}

// Initialize router
const router = new SimpleRouter();

// Add routes
router.addRoute('/login', 'login-page');
router.addRoute('/signup', 'signup-page');

// Export for use in components
window.router = router;