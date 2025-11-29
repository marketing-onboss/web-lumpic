#!/usr/bin/env python3
"""Image compression script using PIL/Pillow"""
from PIL import Image
import os
from pathlib import Path

assets_dir = Path('./client/src/assets')
images_to_compress = ['01.png', '02.jpg', '03.png', '04.png']

print('🖼️ Starting image compression...\n')

for img_name in images_to_compress:
    input_path = assets_dir / img_name
    
    if not input_path.exists():
        print(f'⚠️ {img_name} not found')
        continue
    
    try:
        # Get original size
        original_size = os.path.getsize(input_path) / 1024
        
        # Open and optimize image
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if PNG
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Resize to max 1200px width while maintaining aspect ratio
            max_width = 1200
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save optimized
            if img_name.endswith('.jpg') or img_name.endswith('.jpeg'):
                img.save(input_path, 'JPEG', quality=80, optimize=True)
            else:
                img.save(input_path, 'PNG', optimize=True)
        
        # Get new size
        compressed_size = os.path.getsize(input_path) / 1024
        reduction = ((original_size - compressed_size) / original_size) * 100
        
        print(f'✅ {img_name}')
        print(f'   Original:   {original_size:.1f} KB')
        print(f'   Compressed: {compressed_size:.1f} KB')
        print(f'   Reduction:  {reduction:.1f}%\n')
        
    except Exception as e:
        print(f'❌ Error compressing {img_name}: {e}\n')

print('✨ Image compression complete!')
