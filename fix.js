const fs = require('fs');
const files = ['index.html', 'about.html', 'services.html', 'contact.html'];

const newStyles = `
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .logo-text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.1;
    }
    
    .logo-main {
      font-family: 'Syne', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--primary-color);
      letter-spacing: -0.5px;
    }
    
    .logo-main span {
      color: var(--secondary-color);
    }

    .logo-sub {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #7b8a97;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 3px;
    }
`;

const newHeaderLogo = `        <a href="index.html" class="logo">
          <img src="./public/assets/mgv_logo.png" alt="MGV Logo" class="brand-logo">
          <div class="logo-text-wrapper">
            <div class="logo-main">MGV <span>RealEstate</span></div>
            <div class="logo-sub">& MG Construction</div>
          </div>
        </a>`;

const newFooterLogo = `          <a href="index.html" class="logo" style="margin-bottom:15px; display:inline-flex;">
            <img src="./public/assets/mgv_logo.png" alt="MGV Logo" class="brand-logo-footer">
            <div class="logo-text-wrapper">
              <div class="logo-main" style="color:#fff;">MGV <span style="color:var(--secondary-color);">RealEstate</span></div>
              <div class="logo-sub" style="color:#aaa;">& MG Construction</div>
            </div>
          </a>`;

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Inject styles if not already present
  if (!content.includes('logo-text-wrapper')) {
    content = content.replace('.logo {', newStyles + '\n    .old-logo {');
  }

  // Replace Header Logo exactly
  content = content.replace(/<a href=\"index\.html\" class=\"logo\">[\s\S]*?<\/a>/, newHeaderLogo);

  // Replace Footer Logo exactly
  content = content.replace(/<a href=\"index\.html\" class=\"logo\" style=\"[^\"]*\">[\s\S]*?<img src=\"\.\/public\/assets\/mgv_logo\.png\" alt=\"MGV Logo\" class=\"brand-logo-footer\">[\s\S]*?<\/a>/, newFooterLogo);

  fs.writeFileSync(file, content);
}
console.log('Done mapping logo.');
