// Utility Functions
function formatPrice(price, type) {
    const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
    return type === 'rent' ? `${formatted}/mês` : formatted;
}

function getTypeLabel(type) {
    const labels = {
        sale: "Venda",
        rent: "Aluguel",
        rural: "Terreno Rural"
    };
    return labels[type] || type;
}

function createPropertyCard(property) {
    const typeClass = property.type === 'rural' ? 'type-rural' : property.type === 'rent' ? 'type-rent' : 'type-sale';
    const priceClass = property.type === 'rural' ? 'rural' : '';
    
    return `
        <a href="property-${property.id}.html" class="property-card">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}">
                <span class="property-type ${typeClass}">${getTypeLabel(property.type)}</span>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${property.location}
                </div>
                <div class="property-details">
                    <div>
                        <div class="property-price-label">Preço</div>
                        <div class="property-price ${priceClass}">${formatPrice(property.price, property.type)}</div>
                    </div>
                    <div class="property-area">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle;">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="9" y2="9"></line>
                        </svg>
                        ${property.area} m²
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Initialize properties if on home page
    if (document.getElementById('propertiesGrid')) {
        initializeProperties();
    }
});

// Filter and Display Properties
function initializeProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    const ruralGrid = document.getElementById('ruralGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Display non-rural properties
    function displayProperties(filter = 'all') {
        let filtered = properties.filter(p => p.type !== 'rural');
        
        if (filter !== 'all') {
            filtered = filtered.filter(p => p.type === filter);
        }
        
        if (filtered.length === 0) {
            propertiesGrid.innerHTML = '<p style="text-align: center; color: #64748B; grid-column: 1/-1;">Nenhum imóvel encontrado nesta categoria.</p>';
        } else {
            propertiesGrid.innerHTML = filtered.map(p => createPropertyCard(p)).join('');
        }
    }
    
    // Display rural properties
    function displayRuralProperties() {
        const rural = properties.filter(p => p.type === 'rural');
        
        if (rural.length === 0) {
            ruralGrid.innerHTML = '<p style="text-align: center; color: #64748B; grid-column: 1/-1;">Em breve, novos terrenos rurais disponíveis.</p>';
        } else {
            ruralGrid.innerHTML = rural.map(p => createPropertyCard(p)).join('');
        }
    }
    
    // Filter button click handlers
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayProperties(filter);
        });
    });
    
    // Initial display
    displayProperties('all');
    displayRuralProperties();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
