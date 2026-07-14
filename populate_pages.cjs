const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

const filesToUpdate = {
  'Shop.jsx': {
    target: /<div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden group">/g,
    replace: \`<div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden group">
                   <img src={\`/\${['1', '2', '3', '4', '5', '6'][item % 6]}.png\`} alt="AI Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />\`
  },
  'BlogGrid.jsx': {
    target: /<div className="h-48 bg-gray-200 overflow-hidden relative">/g,
    replace: \`<div className="h-48 bg-gray-200 overflow-hidden relative">
                 <img src={\`/\${['3.jpg.jpeg', '1.jpg.jpeg'][i % 2]}\`} alt="Blog Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />\`
  },
  'BlogRightSidebar.jsx': {
    target: /<div className="h-48 bg-gray-200 overflow-hidden relative">/g,
    replace: \`<div className="h-48 bg-gray-200 overflow-hidden relative">
                 <img src={\`/\${['3.jpg.jpeg', '1.jpg.jpeg'][i % 2]}\`} alt="Blog Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />\`
  },
  'BlogDetails.jsx': {
    target: /<div className="w-full h-\[400px\] bg-gray-200 rounded-xl mb-8"><\/div>/g,
    replace: \`<div className="w-full h-[400px] bg-gray-200 rounded-xl mb-8 overflow-hidden shadow-lg"><img src="/3.jpg.jpeg" alt="AI Deep Learning" className="w-full h-full object-cover" /></div>\`
  },
  'SingleProduct.jsx': {
    target: /<div className="w-full h-\[400px\] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">Product Image<\/div>/g,
    replace: \`<div className="w-full h-[400px] bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden shadow-inner border border-gray-100"><img src="/1.png" alt="AI Enterprise Software" className="w-[80%] h-auto object-contain hover:scale-105 transition-transform duration-500" /></div>\`
  },
  'ServicesStyle1.jsx': {
    target: /<div className="h-48 bg-gray-200 overflow-hidden">/g,
    replace: \`<div className="h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
                 <img src={\`/\${['deep.png', 'database.png', 'drone.png', 'sensor.png', 'augmented-reality.png', '1.png'][i % 6]}\`} alt="AI Service" className="w-24 h-24 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500" />\`
  },
  'ServicesStyle2.jsx': {
    target: /<div className="h-48 bg-gray-200 overflow-hidden">/g,
    replace: \`<div className="h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
                 <img src={\`/\${['deep.png', 'database.png', 'drone.png', 'sensor.png', 'augmented-reality.png', '1.png'][i % 6]}\`} alt="AI Service" className="w-24 h-24 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500" />\`
  },
  'ServicesDetails.jsx': {
    target: /<div className="w-full h-\[300px\] md:h-\[400px\] bg-gray-200 rounded-xl mb-8"><\/div>/g,
    replace: \`<div className="w-full h-[300px] md:h-[400px] rounded-xl mb-8 overflow-hidden shadow-2xl relative"><div className="absolute inset-0 bg-[#0CA59D]/20 mix-blend-multiply z-10"></div><img src="/3.jpg.jpeg" alt="Service Architecture" className="w-full h-full object-cover relative z-0" /></div>\`
  }
};

for (const [filename, rules] of Object.entries(filesToUpdate)) {
  const filePath = path.join(srcDir, filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add specific AI content replacements
    if (filename === 'Shop.jsx') {
      content = content.replace(/AI Smart Gadget/g, 'AI Enterprise License');
    }
    
    if (filename.includes('Blog')) {
      content = content.replace(/Blog Post Title/g, 'The Future of Deep Learning & Neural Networks');
      content = content.replace(/A brief excerpt from the blog post/g, 'Discover how the latest advancements in artificial intelligence and machine learning are radically transforming enterprise operations globally.');
    }
    
    content = content.replace(rules.target, rules.replace);
    fs.writeFileSync(filePath, content);
    console.log(\`Updated \${filename}\`);
  }
}
