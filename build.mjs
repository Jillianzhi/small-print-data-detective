import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const f of ['index.html','app.mjs','model.mjs','style.css','EDUCATOR_GUIDE.md','README.md','LICENSE'])await copyFile(f,`dist/${f}`);
console.log('Static files copied to dist; no network or dependencies required.');
