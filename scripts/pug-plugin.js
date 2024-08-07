import { compile } from 'pug';

export default function pluginPug() {
  return {
    name: 'vite-plugin-pug',

    transform(src, id) {
      if (id.endsWith('.pug')) {
        const render = compile(src, { filename: id });
        const html = render();
        let code = '';

        for (let dep of render.dependencies) {
          code += `import ${JSON.stringify(dep)};\n`;
        }

        code += `export default ${JSON.stringify(html)};`;

        return { code };
      }
    },
  };
}