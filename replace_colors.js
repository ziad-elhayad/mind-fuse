const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const replacements = [
    [/brand-purple/g, 'brand-primary'],
    [/brand-cyan/g, 'brand-secondary'],
    [/brand-pink/g, 'brand-primary'],
    [/brand-emerald/g, 'brand-secondary'],
    [/text-gradient-purple-cyan/g, 'text-gradient-primary-secondary'],
    [/text-gradient-rose-violet/g, 'text-gradient-primary-secondary'],
    [/text-gradient-emerald-cyan/g, 'text-gradient-primary-secondary'],
    [/from-violet-\d+/g, 'from-brand-primary'],
    [/to-indigo-\d+/g, 'to-brand-secondary'],
    [/from-pink-\d+/g, 'from-brand-primary'],
    [/to-rose-\d+/g, 'to-brand-secondary'],
    [/from-emerald-\d+/g, 'from-brand-secondary'],
    [/to-cyan-\d+/g, 'to-brand-primary'],
    [/from-cyan-\d+/g, 'from-brand-secondary'],
    [/to-blue-\d+/g, 'to-brand-primary'],
    [/via-violet-\d+/g, 'via-brand-primary'],
    [/via-teal-\d+/g, 'via-brand-secondary'],
    [/via-rose-\d+/g, 'via-brand-primary'],
    [/to-orange-\d+/g, 'to-brand-secondary'],
    [/from-indigo-\d+/g, 'from-brand-primary'],
    [/via-purple-\d+/g, 'via-brand-primary'],
    [/logo\.svg/g, 'logo.png']
];

walk(srcDir, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let originalContent = fs.readFileSync(filePath, 'utf8');
        let newContent = originalContent;
        
        replacements.forEach(([regex, replacement]) => {
            newContent = newContent.replace(regex, replacement);
        });

        if (originalContent !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
});
