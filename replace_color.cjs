const fs = require('fs');
const path = require('path');

function replaceColor(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColor(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes('#1fb2a6')) {
        content = content.replace(/#1fb2a6/gi, '#0CA59D');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceColor(path.join(__dirname, 'src'));
console.log('Color update complete');
