const fs = require('fs');

async function check() {
  try {
    const Jimp = require('jimp');
    for (const file of ['public/images/logo-dark.png', 'public/images/logo-white.png']) {
      const img = await Jimp.read(file);
      const color = img.getPixelColor(0, 0); // Top left pixel
      const rgba = Jimp.intToRGBA(color);
      console.log(`${file}: Top-left pixel is R:${rgba.r} G:${rgba.g} B:${rgba.b} A:${rgba.a}`);
    }
  } catch (e) {
    console.error(e);
  }
}
check();
