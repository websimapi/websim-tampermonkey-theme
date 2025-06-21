// main.js
// Extracted from index.html <script> block
// All functions and logic moved here for better structure

let activeFeatures = {
    autoHide: false,
    compact: false,
    focus: false,
    autoHideCards: false,
    floating: false
};

function highlightElement(elementType) {
    document.querySelectorAll('.element').forEach(el => el.style.background = '');
    event.target.closest('.element').style.background = 'rgba(102, 126, 234, 0.2)';
    updateCssForElement(elementType);
}

function updateCssForElement(elementType) {
    const cssTextarea = document.getElementById('css-code');
    const examples = {
        'nav': `/* Navigation Sidebar Styling */
nav.w-16 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    border-right: 2px solid rgba(255,255,255,0.1) !important;
}

nav.w-16 button {
    transition: all 0.3s ease !important;
}

nav.w-16 button:hover {
    transform: scale(1.1) !important;
    background: rgba(255,255,255,0.1) !important;
}`,
        'logo': `/* Logo Styling */
nav.w-16 img[alt="WebSim Logo"] {
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)) !important;
    transition: transform 0.3s ease !important;
}

nav.w-16 img[alt="WebSim Logo"]:hover {
    transform: rotate(360deg) scale(1.1) !important;
}`,
        'projects-panel': `/* Projects Panel Styling */
/* Make sidebar wider */
nav.w-16 {
    width: 80px !important;
}

/* Adjust projects panel */
div[style*="width:400px"] {
    width: 450px !important;
}

/* Compact project cards */
.bg-gray-50.hover\\:bg-gray-100 {
    margin-bottom: 8px !important;
    border-radius: 12px !important;
}

/* Grid layout for project cards */
.flex.flex-col.gap-2 {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 15px !important;
}`,
        'project-card': `/* Project Cards Styling */
.bg-gray-50.hover\\:bg-gray-100 {
    background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%) !important;
    border: 1px solid rgba(102, 126, 234, 0.2) !important;
    transition: all 0.3s ease !important;
    transform: translateY(0) !important;
}

.bg-gray-50.hover\\:bg-gray-100:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 100%) !important;
}`,
        'search': `/* Search Bar Styling */
input[placeholder="Search projects"] {
    background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%) !important;
    border: 2px solid rgba(102, 126, 234, 0.3) !important;
    border-radius: 15px !important;
    transition: all 0.3s ease !important;
}

input[placeholder="Search projects"]:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
    transform: scale(1.02) !important;
}`
        // Add more examples here...
    };
    
    if (examples[elementType]) {
        cssTextarea.value = examples[elementType];
    }
}

function updateCustomizationOptions() {
    const type = document.getElementById('customization-type').value;
    const cssTextarea = document.getElementById('css-code');
    const advancedControls = document.getElementById('advanced-controls');
    
    // Show advanced controls for certain customization types
    if (type === 'layout' || type === 'hiding' || type === 'animations') {
        advancedControls.style.display = 'block';
    } else {
        advancedControls.style.display = 'none';
    }
    
    const templates = {
        'colors': `/* Color Scheme Customization */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
}

/* Apply to navigation */
nav.w-16 {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%) !important;
}

/* Apply to project cards */
.bg-gray-50 {
    background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%) !important;
    border-left: 3px solid var(--accent-color) !important;
}`,
        'layout': `/* Layout Modifications */
/* Make sidebar wider */
nav.w-16 {
    width: 80px !important;
}

/* Adjust projects panel */
div[style*="width:400px"] {
    width: 450px !important;
}

/* Compact project cards */
.bg-gray-50.hover\\:bg-gray-100 {
    margin-bottom: 8px !important;
    border-radius: 12px !important;
}

/* Grid layout for project cards */
.flex.flex-col.gap-2 {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 15px !important;
}`,
        'animations': `/* Animation Effects */
@keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Animate navigation */
nav.w-16 {
    animation: slideIn 0.5s ease-out !important;
}

/* Animate project cards */
.bg-gray-50.hover\\:bg-gray-100 {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.bg-gray-50.hover\\:bg-gray-100:hover {
    animation: pulse 0.6s ease-in-out !important;
}

/* Animate buttons */
nav.w-16 button {
    transition: all 0.3s ease !important;
}

nav.w-16 button:hover {
    transform: scale(1.1) rotate(5deg) !important;
}`,
        'hiding': `/* Hide Elements */
/* Hide notifications badge */
.rt-Badge {
    display: none !important;
}

/* Hide project settings buttons */
button[aria-label*="settings"] {
    display: none !important;
}

/* Hide specific tabs */
button[id*="trigger-liked"] {
    display: none !important;
}

/* Hide project stats */
.flex.items-center.gap-2 {
    display: none !important;
}

/* Simplify project cards */
.relative > .absolute {
    display: none !important;
}`,
        'custom-css': `/* Custom CSS Template */
/* Add your custom styles here */

/* Example: Glassmorphism effect */
.glassmorphism {
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 15px !important;
}

/* Apply to navigation */
nav.w-16 {
    @extend .glassmorphism;
}

/* Apply to projects panel */
div[style*="width:400px"] {
    @extend .glassmorphism;
}

/* Custom hover effects */
.custom-hover:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
    transition: all 0.3s ease !important;
}`
        // Add more examples here...
    };
    
    if (templates[type]) {
        cssTextarea.value = templates[type];
    }
}

function generateScript() {
    const themeName = document.getElementById('theme-name').value;
    const targetElement = document.getElementById('target-element').value;
    const customizationType = document.getElementById('customization-type').value;
    const cssCode = document.getElementById('css-code').value;
    
    // Get active features
    const featuresEnabled = Object.keys(activeFeatures).filter(key => activeFeatures[key]);
    const featuresDescription = featuresEnabled.length > 0 ? ` with advanced features: ${featuresEnabled.join(', ')}` : '';
    
    const script = `// ==UserScript==
// @name         ${themeName}
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Custom WebSim theme with ${customizationType} modifications for ${targetElement}${featuresDescription}
// @author       WebSim Theming Assistant
// @match        https://websim.com/*
// @match        https://*.websim.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('🎨 ${themeName} - Loading...');
    
    // Advanced features state
    const features = ${JSON.stringify(activeFeatures, null, 8)};
    
    // Create and inject custom styles
    function injectStyles() {
        // Remove any existing custom theme
        const existingStyle = document.getElementById('websim-custom-theme');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        // Create new style element
        const style = document.createElement('style');
        style.id = 'websim-custom-theme';
        style.type = 'text/css';
        
        // CSS styles
        style.innerHTML = \`
${cssCode}

/* Additional theme enhancements */
* {
    transition: all 0.2s ease !important;
}

/* Smooth animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Apply fade-in to new elements */
.fade-in {
    animation: fadeIn 0.3s ease-out !important;
}

/* Advanced feature helpers */
.websim-theme-trigger {
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 100vh;
    background: transparent;
    z-index: 9999;
    pointer-events: ${activeFeatures.autoHide ? 'auto' : 'none'};
}
        \`;
        
        // Inject into document
        (document.head || document.documentElement).appendChild(style);
        console.log('✅ ${themeName} - Styles injected successfully!');
        
        // Setup advanced features
        setupAdvancedFeatures();
    }
    
    // Setup advanced interactive features
    function setupAdvancedFeatures() {
        if (features.autoHide) {
            setupAutoHideNavigation();
        }
        
        if (features.autoHideCards) {
            setupAutoHideCards();
        }
        
        if (features.floating) {
            setupFloatingElements();
        }
    }
    
    function setupAutoHideNavigation() {
        // Add hover trigger for auto-hide navigation
        if (!document.querySelector('.websim-theme-trigger')) {
            const trigger = document.createElement('div');
            trigger.className = 'websim-theme-trigger';
            document.body.appendChild(trigger);
            
            trigger.addEventListener('mouseenter', () => {
                const nav = document.querySelector('nav.w-16');
                if (nav) nav.style.transform = 'translateX(0)';
            });
            
            trigger.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    const nav = document.querySelector('nav.w-16');
                    if (nav && !nav.matches(':hover')) {
                        nav.style.transform = 'translateX(-48px)';
                    }
                }, 100);
            });
        }
    }
    
    function setupAutoHideCards() {
        let isScrolling = false;
        let scrollTimeout;
        
        window.addEventListener('scroll', () => {
            const cards = document.querySelectorAll('.bg-gray-50.hover\\\\:bg-gray-100');
            
            if (!isScrolling) {
                isScrolling = true;
                cards.forEach(card => {
                    card.style.opacity = '0.3';
                    card.style.transform = 'scale(0.95)';
                });
            }
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                cards.forEach(card => {
                    card.style.opacity = '0.7';
                    card.style.transform = 'scale(0.98)';
                });
            }, 150);
        });
    }
    
    function setupFloatingElements() {
        // Adjust body margins for floating layout
        document.body.style.marginLeft = '100px';
        document.body.style.marginRight = '440px';
        document.body.style.transition = 'margin 0.3s ease';
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectStyles);
    } else {
        injectStyles();
    }
    
    // Re-inject styles when navigating (for SPA)
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(injectStyles, 100);
        }
    }).observe(document, {subtree: true, childList: true});
    
    // Add helper functions for dynamic theming
    window.WebSimTheme = {
        toggle: function() {
            const style = document.getElementById('websim-custom-theme');
            style.disabled = !style.disabled;
        },
        
        updateColor: function(property, color) {
            document.documentElement.style.setProperty(property, color);
        },
        
        reset: function() {
            const style = document.getElementById('websim-custom-theme');
            if (style) style.remove();
            
            // Reset body margins
            document.body.style.marginLeft = '';
            document.body.style.marginRight = '';
            
            // Remove trigger elements
            const trigger = document.querySelector('.websim-theme-trigger');
            if (trigger) trigger.remove();
        },
        
        toggleFeature: function(feature) {
            features[feature] = !features[feature];
            injectStyles();
        },
        
        getFeatures: function() {
            return features;
        }
    };
    
    console.log('🚀 ${themeName} - Fully loaded! Use WebSimTheme.toggle() to toggle theme.');
})();`;

            // Show the generated script
            document.getElementById('script-content').textContent = script;
            document.getElementById('generated-script').style.display = 'block';
            
            // Scroll to the generated script
            document.getElementById('generated-script').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
}

function toggleFeature(feature, element) {
    activeFeatures[feature] = !activeFeatures[feature];
    element.classList.toggle('active');
    updateCssWithFeatures();
}

function updateCssWithFeatures() {
    let additionalCss = '\n\n/* Advanced Features */\n';
            
    if (activeFeatures.autoHide) {
        additionalCss += `
/* Auto-Hide Navigation */
nav.w-16 {
    transform: translateX(-48px) !important;
    transition: transform 0.3s ease !important;
}

nav.w-16:hover,
nav.w-16:focus-within {
    transform: translateX(0) !important;
}

/* Add hover trigger area */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 100vh;
    background: transparent;
    z-index: 9999;
    pointer-events: auto;
}

body:hover nav.w-16 {
    transform: translateX(0) !important;
}
`;
    }

    if (activeFeatures.compact) {
        additionalCss += `
/* Compact Layout */
div[style*="width:400px"] {
    width: 300px !important;
}

.bg-gray-50.hover\\:bg-gray-100 {
    padding: 8px !important;
    margin-bottom: 4px !important;
    border-radius: 8px !important;
}

.bg-gray-50.hover\\:bg-gray-100 h1 {
    font-size: 0.9rem !important;
    line-height: 1.2 !important;
}
`;
    }

    if (activeFeatures.focus) {
        additionalCss += `
/* Focus Mode */
.rt-Badge,
button[aria-label*="settings"],
.absolute.top-2.right-2 {
    opacity: 0 !important;
    pointer-events: none !important;
    transition: opacity 0.3s ease !important;
}

/* Show on parent hover */
.relative:hover .rt-Badge,
.relative:hover button[aria-label*="settings"],
.relative:hover .absolute.top-2.right-2 {
    opacity: 1 !important;
    pointer-events: auto !important;
}

/* Reduce visual clutter */
.flex.items-center.gap-2 {
    opacity: 0.6 !important;
    transition: opacity 0.3s ease !important;
}

.relative:hover .flex.items-center.gap-2 {
    opacity: 1 !important;
}
`;
    }

    if (activeFeatures.autoHideCards) {
        additionalCss += `
/* Auto-Hide Project Cards */
.bg-gray-50.hover\\:bg-gray-100 {
    opacity: 0.7 !important;
    transform: scale(0.98) !important;
    transition: all 0.3s ease !important;
}

.bg-gray-50.hover\\:bg-gray-100:hover {
    opacity: 1 !important;
    transform: scale(1) !important;
}

/* Hide cards completely when scrolling fast */
.flex.flex-col.gap-2 {
    transition: opacity 0.3s ease !important;
}
`;
    }

    if (activeFeatures.floating) {
        additionalCss += `
/* Floating Elements */
nav.w-16 {
    position: fixed !important;
    left: 20px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    height: auto !important;
    border-radius: 15px !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
    z-index: 1000 !important;
}

div[style*="width:400px"] {
    position: fixed !important;
    right: 20px !important;
    top: 20px !important;
    height: calc(100vh - 40px) !important;
    border-radius: 15px !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
    z-index: 999 !important;
}

/* Adjust main content margin */
body {
    margin-left: 100px !important;
    margin-right: 440px !important;
    transition: margin 0.3s ease !important;
}
`;
    }

    const currentCss = document.getElementById('css-code').value;
    const baseCss = currentCss.split('/* Advanced Features */')[0];
    document.getElementById('css-code').value = baseCss + additionalCss;
}

function applyTheme(themeType) {
    // Reset advanced features
    Object.keys(activeFeatures).forEach(key => {
        activeFeatures[key] = false;
        const toggle = document.getElementById(key + 'Toggle');
        if (toggle) toggle.classList.remove('active');
    });

    const themes = {
        'dark': {
            name: 'WebSim Dark Theme',
            css: `/* Dark Theme for WebSim */
:root {
    --dark-bg: #0f0f0f;
    --dark-surface: #1a1a1a;
    --dark-border: #333;
    --dark-text: #e0e0e0;
    --dark-accent: #667eea;
}

/* Global dark theme */
body {
    background: var(--dark-bg) !important;
    color: var(--dark-text) !important;
}

/* Navigation dark theme */
nav.w-16 {
    background: var(--dark-surface) !important;
    border-right: 1px solid var(--dark-border) !important;
}

nav.w-16 button {
    color: var(--dark-text) !important;
}

nav.w-16 button:hover {
    background: rgba(102, 126, 234, 0.2) !important;
}

/* Projects panel dark theme */
div[style*="width:400px"] {
    background: var(--dark-surface) !important;
    border-left: 1px solid var(--dark-border) !important;
}

/* Project cards dark theme */
.bg-gray-50,
.bg-gray-100 {
    background: var(--dark-surface) !important;
    border: 1px solid var(--dark-border) !important;
    color: var(--dark-text) !important;
    margin-bottom: 1px !important;
}

.bn-gray-50:hover,
.bg-gray-100:hover {
    background: #262626 !important;
    border-color: var(--dark-accent) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
    transform: translateY(-3px) !important;
}

/* Text colors */
.text-gray-700,
.text-gray-600,
.text-gray-800 {
    color: var(--dark-text) !important;
}

/* Input dark theme */
input[placeholder="Search projects"] {
    background: var(--dark-surface) !important;
    border: 1px solid var(--dark-border) !important;
    color: var(--dark-text) !important;
    border-radius: 6px !important;
}

input[placeholder="Search projects"]:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
    transform: scale(1.02) !important;
}`
        },
        'neon': {
            name: 'WebSim Neon Cyber Theme',
            css: `/* Neon Cyber Theme for WebSim */
:root {
    --neon-bg: #0a0a0a;
    --neon-surface: #1a1a2e;
    --neon-cyan: #00ffff;
    --neon-pink: #ff00ff;
    --neon-green: #00ff00;
    --neon-yellow: #ffff00;
}

@keyframes neonGlow {
    0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
    50% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
}

@keyframes neonPulse {
    0%, 100% { box-shadow: 0 0 5px var(--neon-cyan), 0 0 10px var(--neon-cyan), 0 0 15px var(--neon-cyan); }
    50% { box-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan), 0 0 30px var(--neon-cyan); }
}

/* Global neon theme */
body {
    background: var(--neon-bg) !important;
    color: var(--neon-cyan) !important;
}

/* Navigation neon theme */
nav.w-16 {
    background: var(--neon-surface) !important;
    border-right: 2px solid var(--neon-cyan) !important;
    animation: neonPulse 2s infinite !important;
}

nav.w-16 button {
    color: var(--neon-green) !important;
    border-radius: 8px !important;
    transition: all 0.3s ease !important;
}

nav.w-16 button:hover {
    background: rgba(0, 255, 255, 0.1) !important;
    box-shadow: 0 0 15px var(--neon-cyan) !important;
    color: var(--neon-cyan) !important;
    animation: neonGlow 1s infinite !important;
}

/* Projects panel neon theme */
div[style*="width:400px"] {
    background: rgba(26, 26, 46, 0.8) !important;
    border-left: 2px solid var(--neon-pink) !important;
    backdrop-filter: blur(10px) !important;
}

/* Project cards neon theme */
.bg-gray-50,
.bg-gray-100 {
    background: rgba(26, 26, 46, 0.6) !important;
    border: 1px solid var(--neon-green) !important;
    color: var(--neon-cyan) !important;
    border-radius: 10px !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: rgba(26, 26, 46, 0.9) !important;
    border-color: var(--neon-pink) !important;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.3) !important;
    transform: translateY(-3px) !important;
}

/* Neon text effects */
h1, h2, h3 {
    color: var(--neon-cyan) !important;
    animation: neonGlow 2s infinite !important;
}

/* Input neon theme */
input[placeholder="Search projects"] {
    background: rgba(26, 26, 46, 0.8) !important;
    border: 2px solid var(--neon-green) !important;
    color: var(--neon-cyan) !important;
    border-radius: 15px !important;
}

input[placeholder="Search projects"]:focus {
    border-color: var(--neon-pink) !important;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.5) !important;
}`
        },
        'minimal': {
            name: 'WebSim Minimal Clean Theme',
            css: `/* Minimal Clean Theme for WebSim */
:root {
    --minimal-white: #ffffff;
    --minimal-gray: #f8f9fa;
    --minimal-border: #e9ecef;
    --minimal-text: #495057;
    --minimal-accent: #6c757d;
}

/* Global minimal theme */
body {
    background: var(--minimal-white) !important;
    color: var(--minimal-text) !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
}

/* Navigation minimal theme */
nav.w-16 {
    background: var(--minimal-white) !important;
    border-right: 1px solid var(--minimal-border) !important;
    box-shadow: 0 0 10px rgba(0,0,0,0.05) !important;
}

nav.w-16 button {
    color: var(--minimal-accent) !important;
    border-radius: 6px !important;
    border: none !important;
    background: transparent !important;
}

nav.w-16 button:hover {
    background: var(--minimal-gray) !important;
    color: var(--minimal-text) !important;
}

/* Projects panel minimal theme */
div[style*="width:400px"] {
    background: var(--minimal-white) !important;
    border-left: 1px solid var(--minimal-border) !important;
}

/* Project cards minimal theme */
.bg-gray-50,
.bg-gray-100 {
    background: var(--minimal-white) !important;
    border: 1px solid var(--minimal-border) !important;
    border-radius: 8px !important;
    color: var(--minimal-text) !important;
    margin-bottom: 1px !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: var(--minimal-gray) !important;
    border-color: var(--minimal-accent) !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}

/* Remove unnecessary visual elements */
.rt-Badge,
button[aria-label*="settings"] {
    opacity: 0.7 !important;
}

/* Clean typography */
h1, h2, h3 {
    color: var(--minimal-text) !important;
    font-weight: 500 !important;
}

/* Input minimal theme */
input[placeholder="Search projects"] {
    background: var(--minimal-gray) !important;
    border: 1px solid var(--minimal-border) !important;
    color: var(--minimal-text) !important;
    border-radius: 6px !important;
}

input[placeholder="Search projects"]:focus {
    border-color: var(--minimal-accent) !important;
    box-shadow: 0 0 0 2px rgba(108, 117, 125, 0.1) !important;
}`
        },
        'retro': {
            name: 'WebSim Retro Wave Theme',
            css: `/* Retro Wave Theme for WebSim */
:root {
    --retro-bg: #1a1a2e;
    --retro-surface: #16213e;
    --retro-pink: #ff6b6b;
    --retro-yellow: #feca57;
    --retro-purple: #ff9ff3;
    --retro-blue: #54a0ff;
}

@keyframes retroGlow {
    0%, 100% { 
        text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor;
        transform: scale(1);
    }
    50% { 
        text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor;
        transform: scale(1.02);
    }
}

@keyframes retroScan {
    0% { background-position: 0 0; }
    100% { background-position: 0 20px; }
}

/* Global retro theme */
body {
    background: linear-gradient(135deg, var(--retro-bg) 0%, var(--retro-surface) 100%) !important;
    color: var(--retro-pink) !important;
    position: relative !important;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 107, 107, 0.03) 50%, transparent 100%);
    background-size: 20px 20px;
    animation: retroScan 2s linear infinite;
    pointer-events: none;
    z-index: 1;
}

/* Navigation retro theme */
nav.w-16 {
    background: linear-gradient(135deg, var(--retro-surface) 0%, var(--retro-bg) 100%) !important;
    border-right: 2px solid var(--retro-pink) !important;
    box-shadow: 0 0 20px rgba(255, 107, 107, 0.3) !important;
    z-index: 2 !important;
    position: relative !important;
}

nav.w-16 button {
    color: var(--retro-yellow) !important;
    border-radius: 8px !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
}

nav.w-16 button:hover {
    background: rgba(255, 107, 107, 0.2) !important;
    color: var(--retro-pink) !important;
    animation: retroGlow 1s infinite !important;
    box-shadow: 0 0 15px var(--retro-pink) !important;
}

/* Projects panel retro theme */
div[style*="width:400px"] {
    background: rgba(22, 33, 62, 0.9) !important;
    border-left: 2px solid var(--retro-purple) !important;
    backdrop-filter: blur(10px) !important;
    z-index: 2 !important;
    position: relative !important;
}

/* Project cards retro theme */
.bg-gray-50,
.bg-gray-100 {
    background: linear-gradient(135deg, rgba(22, 33, 62, 0.8) 0%, rgba(26, 26, 46, 0.8) 100%) !important;
    border: 1px solid var(--retro-blue) !important;
    color: var(--retro-yellow) !important;
    border-radius: 12px !important;
    position: relative !important;
    overflow: hidden !important;
}

.bg-gray-50::before,
.bg-gray-100::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.1), transparent);
    transition: left 0.5s ease;
}

.bg-gray-50:hover::before,
.bg-gray-100:hover::before {
    left: 100%;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(255, 159, 243, 0.2) 100%) !important;
    border-color: var(--retro-pink) !important;
    color: var(--retro-pink) !important;
    transform: translateY(-5px) scale(1.02) !important;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3) !important;
}

/* Retro text effects */
h1, h2, h3 {
    color: var(--retro-pink) !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    letter-spacing: 2px !important;
    animation: retroGlow 3s infinite !important;
}

/* Input retro theme */
input[placeholder="Search projects"] {
    background: rgba(22, 33, 62, 0.8) !important;
    border: 2px solid var(--retro-yellow) !important;
    color: var(--retro-pink) !important;
    border-radius: 20px !important;
    font-weight: bold !important;
}

input[placeholder="Search projects"]:focus {
    border-color: var(--retro-pink) !important;
    box-shadow: 0 0 20px rgba(255, 107, 107, 0.5) !important;
    animation: retroGlow 1s infinite !important;
}`
        },
        'glassmorphism': {
            name: 'WebSim Glassmorphism Theme',
            css: `/* Glassmorphism Theme for WebSim */
:root {
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-blur: blur(10px);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Global glassmorphism theme */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    position: relative !important;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="3" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="10" r="1" fill="rgba(255,255,255,0.08)"/></svg>') !important;
    pointer-events: none !important;
    z-index: 0 !important;
}

/* Navigation glassmorphism */
nav.w-16 {
    background: var(--glass-bg) !important;
    backdrop-filter: var(--glass-blur) !important;
    border: 1px solid var(--glass-border) !important;
    box-shadow: var(--glass-shadow) !important;
    border-radius: 20px !important;
    z-index: 10 !important;
    position: relative !important;
}

div[style*="width:400px"] {
    background: var(--glass-bg) !important;
    backdrop-filter: var(--glass-blur) !important;
    border: 1px solid var(--glass-border) !important;
    box-shadow: var(--glass-shadow) !important;
    border-radius: 20px !important;
    z-index: 5 !important;
    position: relative !important;
}

.bg-gray-50,
.bg-gray-100 {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 15px !important;
    color: white !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1) !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: rgba(255, 255, 255, 0.25) !important;
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

input[placeholder="Search projects"] {
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(5px) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    border-radius: 12px !important;
    color: white !important;
}

input[placeholder="Search projects"]::placeholder {
    color: rgba(255, 255, 255, 0.7) !important;
}

h1, h2, h3 {
    color: white !important;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
}`
        },
        'material': {
            name: 'WebSim Material Design Theme',
            css: `/* Material Design Theme for WebSim */
:root {
    --material-primary: #1976d2;
    --material-primary-dark: #1565c0;
    --material-secondary: #03a9f4;
    --material-surface: #ffffff;
    --material-background: #fafafa;
    --material-elevation-1: 0 2px 4px rgba(0,0,0,0.14);
    --material-elevation-2: 0 4px 8px rgba(0,0,0,0.14);
    --material-elevation-3: 0 8px 16px rgba(0,0,0,0.14);
}

/* Global material theme */
body {
    background: var(--material-background) !important;
    color: #212121 !important;
    font-family: 'Roboto', sans-serif !important;
}

/* Navigation material */
nav.w-16 {
    background: var(--material-primary) !important;
    box-shadow: var(--material-elevation-2) !important;
    border-radius: 0 !important;
    border: none !important;
}

nav.w-16 button {
    color: white !important;
    border-radius: 50% !important;
    width: 48px !important;
    height: 48px !important;
    background: transparent !important;
    transition: background 0.2s cubic-bezier(0.4, 0.0, 0.2, 1) !important;
}

nav.w-16 button:hover {
    background: rgba(255, 255, 255, 0.1) !important;
}

nav.w-16 button:active {
    background: rgba(255, 255, 255, 0.2) !important;
}

/* Projects panel material */
div[style*="width:400px"] {
    background: var(--material-surface) !important;
    box-shadow: var(--material-elevation-1) !important;
    border: none !important;
    border-radius: 0 !important;
}

/* Project cards material */
.bg-gray-50,
.bg-gray-100 {
    background: var(--material-surface) !important;
    box-shadow: var(--material-elevation-1) !important;
    border: none !important;
    border-radius: 8px !important;
    margin: 8px 0 !important;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0.0, 0.2, 1) !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    box-shadow: var(--material-elevation-3) !important;
    transform: translateY(-2px) !important;
    background: var(--material-surface) !important;
}

/* Material buttons */
button {
    border-radius: 4px !important;
    text-transform: uppercase !important;
    font-weight: 500 !important;
    letter-spacing: 0.5px !important;
}

/* Input material */
input[placeholder="Search projects"] {
    background: var(--material-surface) !important;
    border: none !important;
    border-bottom: 2px solid #e0e0e0 !important;
    border-radius: 4px 4px 0 0 !important;
    padding: 12px 16px !important;
    transition: border-bottom-color 0.2s cubic-bezier(0.4, 0.0, 0.2, 1) !important;
}

input[placeholder="Search projects"]:focus {
    border-bottom-color: var(--material-primary) !important;
    box-shadow: none !important;
}

/* Typography */
h1, h2, h3 {
    font-weight: 400 !important;
    color: #212121 !important;
}

/* Tabs material style */
[role="tablist"] {
    background: transparent !important;
    border-bottom: 1px solid #e0e0e0 !important;
}

[role="tab"] {
    border-radius: 0 !important;
    border-bottom: 2px solid transparent !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
}

[role="tab"][data-state="active"] {
    border-bottom-color: var(--material-primary) !important;
    color: var(--material-primary) !important;
}`
        },
        'highContrast': {
            name: 'WebSim High Contrast Accessibility Theme',
            css: `/* High Contrast Accessibility Theme for WebSim */
:root {
    --hc-bg: #000000;
    --hc-surface: #000000;
    --hc-text: #ffffff;
    --hc-accent: #ffff00;
    --hc-success: #00ff00;
    --hc-warning: #ff8800;
    --hc-error: #ff0000;
    --hc-border: #ffffff;
}

/* Global high contrast theme */
body {
    background: var(--hc-bg) !important;
    color: var(--hc-text) !important;
    font-weight: bold !important;
}

/* Navigation high contrast */
nav.w-16 {
    background: var(--hc-surface) !important;
    border: 3px solid var(--hc-accent) !important;
    border-radius: 0 !important;
}

nav.w-16 button {
    color: var(--hc-text) !important;
    border: 2px solid var(--hc-border) !important;
    border-radius: 0 !important;
    background: var(--hc-surface) !important;
    font-weight: bold !important;
}

nav.w-16 button:hover,
nav.w-16 button:focus {
    background: var(--hc-accent) !important;
    color: var(--hc-bg) !important;
    border-color: var(--hc-accent) !important;
}

/* Projects panel high contrast */
div[style*="width:400px"] {
    background: var(--hc-surface) !important;
    border: 2px solid var(--hc-border) !important;
    border-radius: 0 !important;
}

/* Project cards high contrast */
.bg-gray-50,
.bg-gray-100 {
    background: var(--hc-surface) !important;
    border: 2px solid var(--hc-success) !important;
    border-radius: 0 !important;
    color: var(--hc-text) !important;
    margin: 4px 0 !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: var(--hc-accent) !important;
    color: var(--hc-bg) !important;
    border-color: var(--hc-accent) !important;
}

/* High contrast focus indicators */
button:focus,
input:focus,
a:focus {
    outline: 3px solid var(--hc-accent) !important;
    outline-offset: 2px !important;
}

/* Input high contrast */
input[placeholder="Search projects"] {
    background: var(--hc-surface) !important;
    border: 2px solid var(--hc-border) !important;
    border-radius: 0 !important;
    color: var(--hc-text) !important;
    font-weight: bold !important;
}

input[placeholder="Search projects"]::placeholder {
    color: var(--hc-accent) !important;
    font-weight: bold !important;
}

/* Typography high contrast */
h1, h2, h3 {
    color: var(--hc-accent) !important;
    font-weight: bold !important;
    text-shadow: 1px 1px 0 var(--hc-bg) !important;
}

/* Links high contrast */
a {
    color: var(--hc-success) !important;
    text-decoration: underline !important;
    font-weight: bold !important;
}

a:hover {
    color: var(--hc-accent) !important;
    background: var(--hc-bg) !important;
}

/* Remove subtle elements that are hard to see */
.text-gray-400,
.text-gray-500,
.text-gray-600 {
    color: var(--hc-text) !important;
    font-weight: bold !important;
}

/* High contrast icons */
svg {
    filter: contrast(200%) brightness(150%) !important;
}`
        },
        'vintage': {
            name: 'WebSim Vintage Paper Theme',
            css: `/* Vintage Paper Theme for WebSim */
:root {
    --vintage-paper: #f4f1e8;
    --vintage-ink: #2c1810;
    --vintage-brown: #8b4513;
    --vintage-gold: #daa520;
    --vintage-sepia: #704214;
}

@keyframes vintageFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.95; }
}

/* Global vintage theme */
body {
    background: var(--vintage-paper) !important;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.05) 1px, transparent 1px) !important;
    color: var(--vintage-ink) !important;
    font-family: 'Times New Roman', serif !important;
    position: relative !important;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(139,69,19,0.1)"/><circle cx="80" cy="60" r="0.5" fill="rgba(139,69,19,0.08)"/><circle cx="40" cy="80" r="0.8" fill="rgba(139,69,19,0.06)"/></svg>') !important;
    pointer-events: none !important;
    z-index: 0 !important;
    animation: vintageFlicker 3s infinite !important;
}

/* Navigation vintage */
nav.w-16 {
    background: linear-gradient(135deg, var(--vintage-brown) 0%, var(--vintage-sepia) 100%) !important;
    border: 3px solid var(--vintage-gold) !important;
    border-radius: 0 !important;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.3), 0 0 20px rgba(139, 69, 19, 0.5) !important;
    position: relative !important;
    z-index: 10 !important;
}

nav.w-16::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="none" stroke="rgba(218,165,32,0.3)" stroke-width="0.5"/></svg>') !important;
    pointer-events: none !important;
}

nav.w-16 button {
    color: var(--vintage-gold) !important;
    background: rgba(218, 165, 32, 0.1) !important;
    border: 2px solid var(--vintage-gold) !important;
    border-radius: 0 !important;
    font-weight: bold !important;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important;
}

nav.w-16 button:hover {
    background: var(--vintage-gold) !important;
    color: var(--vintage-brown) !important;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3) !important;
}

/* Projects panel vintage */
div[style*="width:400px"] {
    background: var(--vintage-paper) !important;
    border: 2px solid var(--vintage-brown) !important;
    border-radius: 0 !important;
    box-shadow: 5px 5px 15px rgba(139, 69, 19, 0.3) !important;
    position: relative !important;
    z-index: 5 !important;
}

div[style*="width:400px"]::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid var(--vintage-brown) !important;
    pointer-events: none !important;
}

/* Project cards vintage */
.bg-gray-50,
.bg-gray-100 {
    background: linear-gradient(135deg, var(--vintage-paper) 0%, #f0ead6 100%) !important;
    border: 1px solid var(--vintage-brown) !important;
    border-radius: 0 !important;
    color: var(--vintage-ink) !important;
    box-shadow: 2px 2px 8px rgba(139, 69, 19, 0.2) !important;
    position: relative !important;
}

.bg-gray-50::after,
.bg-gray-100::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--vintage-gold) !important;
    border-radius: 0 !important;
    opacity: 0 !important;
    transition: opacity 0.3s ease !important;
    pointer-events: none !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: linear-gradient(135deg, #f0ead6 0%, var(--vintage-gold) 100%) !important;
    color: var(--vintage-brown) !important;
    transform: translateX(3px) translateY(-3px) !important;
    box-shadow: 5px 5px 15px rgba(139, 69, 19, 0.4) !important;
}

.bg-gray-50:hover::after,
.bg-gray-100:hover::after {
    opacity: 1 !important;
}

/* Input vintage */
input[placeholder="Search projects"] {
    background: var(--vintage-paper) !important;
    border: 2px solid var(--vintage-brown) !important;
    border-radius: 0 !important;
    color: var(--vintage-ink) !important;
    font-family: 'Times New Roman', serif !important;
    box-shadow: inset 2px 2px 5px rgba(139, 69, 19, 0.2) !important;
}

/* Typography vintage */
h1, h2, h3 {
    color: var(--vintage-brown) !important;
    font-family: 'Times New Roman', serif !important;
    font-weight: bold !important;
    text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.3) !important;
    letter-spacing: 1px !important;
}

/* Vintage scroll effects */
::-webkit-scrollbar {
    width: 12px !important;
}

::-webkit-scrollbar-track {
    background: var(--vintage-paper) !important;
    border: 1px solid var(--vintage-brown) !important;
}

::-webkit-scrollbar-thumb {
    background: var(--vintage-brown) !important;
    border-radius: 0 !important;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--vintage-gold) !important;
}`
        },
        'autoHideNav': {
            name: 'WebSim Auto-Hide Navigation Theme',
            css: `/* Auto-Hide Navigation Theme */
/* Base styling */
body {
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%) !important;
    color: #ecf0f1 !important;
}

/* Auto-hiding navigation */
nav.w-16 {
    transform: translateX(-48px) !important;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) !important;
    background: rgba(44, 62, 80, 0.95) !important;
    backdrop-filter: blur(10px) !important;
    border-radius: 0 15px 15px 0 !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    z-index: 1000 !important;
}

nav.w-16:hover,
nav.w-16:focus-within {
    transform: translateX(0) !important;
}

/* Hover trigger area */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 100vh;
    background: transparent;
    z-index: 999;
    pointer-events: auto;
}

/* Enhanced project panel */
div[style*="width:400px"] {
    background: rgba(52, 152, 219, 0.1) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 20px !important;
}

/* Project cards */
.bg-gray-50,
.bg-gray-100 {
    background: rgba(236, 240, 241, 0.1) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    color: #ecf0f1 !important;
    transition: all 0.3s ease !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    background: rgba(52, 152, 219, 0.2) !important;
    transform: translateX(10px) !important;
}`
        },
        'compactMode': {
            name: 'WebSim Compact Layout Theme',
            css: `/* Compact Layout Theme */
/* Global compact styling */
body {
    background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%) !important;
    color: #ecf0f1 !important;
}

/* Compact navigation */
nav.w-16 {
    width: 48px !important;
    background: #2c3e50 !important;
    border-radius: 0 25px 25px 0 !important;
}

nav.w-16 button {
    width: 36px !important;
    height: 36px !important;
    margin: 2px !important;
    border-radius: 8px !important;
}

/* Compact projects panel */
div[style*="width:400px"] {
    width: 300px !important;
    background: rgba(52, 73, 94, 0.95) !important;
}

/* Compact project cards */
.bg-gray-50,
.bg-gray-100 {
    background: rgba(44, 62, 80, 0.8) !important;
    padding: 8px !important;
    margin-bottom: 4px !important;
    border-radius: 8px !important;
    color: #ecf0f1 !important;
}

/* Compact thumbnails */
.flex.w-32.h-24 {
    width: 80px !important;
    height: 60px !important;
}

/* Compact text */
.bg-gray-50 h1,
.bg-gray-100 h1 {
    font-size: 0.85rem !important;
    line-height: 1.2 !important;
}

/* Grid layout for cards */
.flex.flex-col.gap-2 {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
    padding: 8px !important;
}

/* Compact search */
input[placeholder="Search projects"] {
    height: 32px !important;
    padding: 6px 12px !important;
    font-size: 0.85rem !important;
    background: rgba(44, 62, 80, 0.8) !important;
    color: #ecf0f1 !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
}`
        },
        'focusMode': {
            name: 'WebSim Focus Mode Theme',
            css: `/* Focus Mode Theme */
/* Clean, distraction-free styling */
body {
    background: #fafafa !important;
    color: #212121 !important;
}

/* Minimal navigation */
nav.w-16 {
    background: #ffffff !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
    border-radius: 15px !important;
}

/* Hide distracting elements by default */
.rt-Badge,
button[aria-label*="settings"],
.absolute.top-2.right-2,
.flex.items-center.gap-2 {
    opacity: 0 !important;
    pointer-events: none !important;
    transition: opacity 0.3s ease !important;
}

/* Show on parent hover */
.relative:hover .rt-Badge,
.relative:hover button[aria-label*="settings"],
.relative:hover .absolute.top-2.right-2,
.relative:hover .flex.items-center.gap-2 {
    opacity: 1 !important;
    pointer-events: auto !important;
}

/* Clean project cards */
.bg-gray-50,
.bg-gray-100 {
    background: #ffffff !important;
    border: 1px solid #e0e0e0 !important;
    border-radius: 12px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
    transition: all 0.3s ease !important;
}

.bg-gray-50:hover,
.bg-gray-100:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

/* Focused search */
input[placeholder="Search projects"] {
    background: #ffffff !important;
    border: 2px solid #e0e0e0 !important;
    border-radius: 25px !important;
    padding: 12px 20px !important;
    transition: all 0.3s ease !important;
}

input[placeholder="Search projects"]:focus {
    border-color: #007bff !important;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.1) !important;
    outline: none !important;
}

/* Clean typography */
h1, h2, h3 {
    color: #212121 !important;
    font-weight: 500 !important;
}

/* Subtle tab styling */
[role="tablist"] {
    background: #f5f5f5 !important;
    border-radius: 25px !important;
    padding: 4px !important;
}

[role="tab"] {
    border-radius: 20px !important;
    font-weight: 500 !important;
}

[role="tab"][data-state="active"] {
    background: #ffffff !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
}`
        }
    };
            
    const theme = themes[themeType];
    if (theme) {
        document.getElementById('theme-name').value = theme.name;
        document.getElementById('css-code').value = theme.css;
        
        // Show advanced controls for advanced themes
        if (['autoHideNav', 'compactMode', 'focusMode'].includes(themeType)) {
            document.getElementById('advanced-controls').style.display = 'block';
                    
            // Auto-enable relevant features
            if (themeType === 'autoHideNav') {
                activeFeatures.autoHide = true;
                document.getElementById('autoHideToggle').classList.add('active');
            } else if (themeType === 'compactMode') {
                activeFeatures.compact = true;
                document.getElementById('compactToggle').classList.add('active');
            } else if (themeType === 'focusMode') {
                activeFeatures.focus = true;
                document.getElementById('focusToggle').classList.add('active');
            }
                    
            updateCssWithFeatures();
        }
                
        generateScript();
    }
}

// Initialize with default example
window.addEventListener('load', () => {
    updateCustomizationOptions();
});

// Expose functions for inline handlers
window.highlightElement = highlightElement;
window.updateCustomizationOptions = updateCustomizationOptions;
window.toggleFeature = toggleFeature;
window.generateScript = generateScript;
window.applyTheme = applyTheme;