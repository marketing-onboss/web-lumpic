#!/usr/bin/env node
/*
  compress-all-images.js
  - Scans project asset folders for PNG/JPG/JPEG images
  - Generates optimized WebP and AVIF variants and resized versions
  - Keeps originals by default and writes new files alongside

  Usage: node compress-all-images.js
*/
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const foldersToScan = [
  path.join(process.cwd(), 'client', 'src', 'assets'),
  path.join(process.cwd(), 'attached_assets'),
];

const imageExt = ['.png', '.jpg', '.jpeg'];
const sizes = [480, 768, 1200]; // widths to generate
const webpQuality = 78;
const avifQuality = 40; // AVIF is more aggressive at lower numbers
const jpegQuality = 85;

function collectImages(folder) {
  const images = [];
  if (!fs.existsSync(folder)) return images;
  const entries = fs.readdirSync(folder, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(folder, e.name);
    if (e.isDirectory()) {
      images.push(...collectImages(full));
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (imageExt.includes(ext) && !e.name.includes('-optimized') && !e.name.includes('-compressed')) {
        images.push(full);
      }
    }
  }
  return images;
}

async function processImage(file) {
  try {
    const stat = fs.statSync(file);
    const origKB = (stat.size / 1024).toFixed(1);
    const parsed = path.parse(file);
    const img = sharp(file, { failOnError: false });

    // Ensure metadata is present so orientation is correct
    const metadata = await img.metadata();

    // Generate resized JPG/PNG optimized (only if width > target)
    for (const w of sizes) {
      if (metadata.width && metadata.width <= w) continue;
      const resizedName = `${parsed.name}-${w}${parsed.ext}`;
      const outPath = path.join(parsed.dir, resizedName);
      let pipeline = sharp(file).resize({ width: w, withoutEnlargement: true });
      if (parsed.ext === '.jpg' || parsed.ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: jpegQuality, progressive: true });
      } else if (parsed.ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: 9 });
      }
      await pipeline.toFile(outPath);
    }

    // Generate WebP at full width
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    await sharp(file)
      .webp({ quality: webpQuality })
      .toFile(webpPath);

    // Generate AVIF
    const avifPath = path.join(parsed.dir, `${parsed.name}.avif`);
    await sharp(file)
      .avif({ quality: avifQuality })
      .toFile(avifPath);

    // Also create an optimized same-dim JPG/PNG (suffix -optimized)
    const optimizedPath = path.join(parsed.dir, `${parsed.name}-optimized${parsed.ext}`);
    if (parsed.ext === '.jpg' || parsed.ext === '.jpeg') {
      await sharp(file).jpeg({ quality: jpegQuality, progressive: true }).toFile(optimizedPath);
    } else if (parsed.ext === '.png') {
      await sharp(file).png({ compressionLevel: 9 }).toFile(optimizedPath);
    }

    const newStat = fs.statSync(optimizedPath);
    const newKB = (newStat.size / 1024).toFixed(1);
    console.log(`✅ ${path.relative(process.cwd(), file)}: ${origKB}KB -> optimized ${newKB}KB (+variants webp/avif/${sizes.join(',')})`);
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err.message);
  }
}

async function run() {
  console.log('🔎 Scanning for images...');
  const all = new Set();
  for (const folder of foldersToScan) {
    collectImages(folder).forEach((f) => all.add(f));
  }
  const images = Array.from(all);
  if (!images.length) {
    console.log('No images found to process. Check assets directories.');
    return;
  }
  console.log(`Found ${images.length} images. Processing...\n`);
  for (const img of images) {
    // eslint-disable-next-line no-await-in-loop
    await processImage(img);
  }
  console.log('\n✨ Image optimization completed. Review -optimized files and webp/avif variants.');
}

run().catch((err) => console.error(err));
