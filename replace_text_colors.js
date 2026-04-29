const fs = require('fs');
let file = fs.readFileSync('frontend/src/constant/styles.js', 'utf8');

// Text color replacements
file = file.replace(/"#2B1A0E"/g, 'theme.text');
file = file.replace(/"#9A3412"/g, 'theme.textMuted');
file = file.replace(/"#7C2D12"/g, 'theme.textMuted');
file = file.replace(/"#8A5B3C"/g, 'theme.textMuted');
file = file.replace(/"#9A6B4F"/g, 'theme.textMuted');

// Dark mode text color replacements
file = file.replace(/"#F3B37C"/g, 'theme.textMuted');
file = file.replace(/"#FDBA74"/g, 'theme.accent');
file = file.replace(/"#E9C9AE"/g, 'theme.textMuted');
file = file.replace(/"#D6B79F"/g, 'theme.textMuted');

// Fix admin background overlay to use theme.bg
file = file.replace(/adminBackgroundOverlay:\s*{\s*\.\.\.StyleSheet\.absoluteFillObject,\s*backgroundColor:\s*"#FFFFFF"\s*}/g, 'adminBackgroundOverlay: {\n    ...StyleSheet.absoluteFillObject,\n    backgroundColor: theme.bg\n  }');

// Also there was a topbar border color "#FFFFFF" - let's remove its solid white borders so it blends, or give it border color theme.border.
file = file.replace(/borderColor: "#FFFFFF",\s*borderTopColor: "#FFFFFF",\s*borderBottomColor: "#FFFFFF",\s*borderTopColor: "#FFFFFF",\s*borderBottomColor: "#FFFFFF",/g, 'borderColor: theme.border,');

fs.writeFileSync('frontend/src/constant/styles.js', file);
console.log('Replaced brown text colors and fixed admin background overlay.');
