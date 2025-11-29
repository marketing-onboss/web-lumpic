import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './client/src/assets';
const imagesToCompress = ['01.png', '02.jpg', '03.png', '04.png'];

async function compressImages() {
  console.log('🖼️ Starting image compression...\n');

  for (const imageName of imagesToCompress) {
    const inputPath = path.join(assetsDir, imageName);
    const outputPath = path.join(assetsDir, imageName.replace(/\.(png|jpg)$/, '-compressed.$1'));

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      // Compress with quality optimization
      let pipeline = sharp(inputPath)
        .resize(1200, 800, {
          fit: 'cover',
          withoutEnlargement: true,
        });

      // Apply quality settings based on format
      if (imageName.endsWith('.jpg') || imageName.endsWith('.jpeg')) {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true });
      } else if (imageName.endsWith('.png')) {
        pipeline = pipeline.png({ compressionLevel: 9 });
      }

      await pipeline.toFile(outputPath);

      const compressedStats = fs.statSync(outputPath);
      const compressedSize = (compressedStats.size / 1024).toFixed(2);
      const reduction = (((stats.size - compressedStats.size) / stats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   Original:  ${originalSize} KB`);
      console.log(`   Compressed: ${compressedSize} KB`);
      console.log(`   Reduction: ${reduction}%\n`);

      // Replace original with compressed version
      fs.renameSync(outputPath, inputPath);
    } catch (err) {
      console.error(`❌ Error compressing ${imageName}:`, err.message);
    }
  }

  console.log('✨ Image compression complete!');
}

compressImages().catch(console.error);
