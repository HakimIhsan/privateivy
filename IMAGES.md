# Image Sources - Pexels

The landing page uses images from Pexels. Here are the current image URLs and suggestions for replacements:

## Current Images Used

1. **Intro Section** - University Campus
   - URL: `https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg`
   - Search terms: "ivy league university campus", "university building", "college campus"
   - Suggested: Professional, elegant campus shots

2. **Team Member 1** - Muhamad Yani
   - URL: `https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg`
   - Search terms: "professional man portrait", "business person", "academic professional"

3. **Team Member 2** - Hakim
   - URL: `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg`
   - Search terms: "professional man portrait", "business person"

4. **Team Member 3** - Adit
   - URL: `https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg`
   - Search terms: "professional man portrait", "business person"

5. **Team Member 4** - Annisa Salsabila
   - URL: `https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg`
   - Search terms: "professional woman portrait", "business woman", "medical professional"

6. **Philosophy Section** - Academic Library
   - URL: `https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg`
   - Search terms: "university library", "academic library", "study space", "ivy league library"

## How to Replace Images

1. Visit [Pexels.com](https://www.pexels.com)
2. Search for appropriate images using the search terms above
3. Download or copy the image URL
4. Update the `src` attribute in `app/page.js` for the corresponding `<Image>` component
5. Ensure images are high quality (at least 800px width recommended)

## Image Requirements

- **Format**: JPEG or PNG
- **Aspect Ratio**: 
  - Intro/Philosophy images: 3:2 or 16:9
  - Team photos: 1:1 (square, will be cropped to circle)
- **Quality**: High resolution for crisp display
- **Style**: Professional, elegant, matching the exclusive brand aesthetic

## Next.js Image Optimization

All images use Next.js `<Image>` component which automatically:
- Optimizes image size
- Serves WebP format when supported
- Lazy loads images
- Prevents layout shift

Make sure to update `next.config.js` if using different image domains.
