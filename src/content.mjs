// All site copy and media, taken from the current joecavdesign.com.
// Images stay on Squarespace's CDN; run tools/localize-images.mjs to copy them into /assets/img.
export const CDN = 'https://images.squarespace-cdn.com/content/v1/66cf56643bd8bd2cca885d53/';

export const site = {
  name: 'Joe Cavadini',
  role: 'Art Director + Designer',
  email: 'joecavdesign@gmail.com',
  location: 'Brooklyn, NY',
  hours: '24 HRS • Appointment Only',
  linkedin: 'https://www.linkedin.com/in/joecavadini/',
  instagram: 'https://www.instagram.com/joecav_dbg/',
  url: 'https://www.joecavdesign.com',
  ogImage: CDN + 'eaa0dd22-bc67-4f95-9d0a-dbfeea2e1002/JC-1.png?format=1500w',
};

export const home = {
  eyebrow: 'Brooklyn-Based',
  // Headline split into lines for the reveal; {…} marks the accent words.
  headline: ['Art Director + Designer', 'helping brands tell', '{good stories,}', 'built to perform.'],
  manifesto: "I'm Joe Cavadini, a visual communicator specializing in art direction, web design, digital design, print design, and branding. Every strong creative solution starts with the right questions.",
  // Hero reel: web copy of Desktop/Videos/JC-Reel.mp4 (no audio). Poster is a frame at 0:04.
  reelVideo: 'assets/video/hero-reel.mp4',
  reelPoster: 'assets/video/hero-reel.jpg',
  reel: CDN + '6f99a4fc-517b-477a-9125-7193ce5c3d5b/ARCCOS_RANGEFINDER_GENERIC_16x9_COMP.gif',
  reelAlt: 'Arccos Smart Laser Rangefinder campaign film, close-up of a golfer in a white cap',
  featured: [
    { slug: 'arccosrangefinder', title: 'Smart Laser Rangefinder', role: 'Creative Director', blurb: "Led creative direction across packaging, web, video, and campaign for Arccos' Smart Laser launch.", img: 'assets/img/work/smart-laser-cover.jpg' },
    { slug: 'arccos-link-pro', title: 'Arccos Link Pro', role: 'Art Director', blurb: 'Directed product launch campaign from concept through execution across video, motion, and paid media.', img: '33a0e090-bb5f-4069-ab4b-267f3e129d0e/LP-Hero.png' },
    { slug: 'arccos-simple', title: 'The Advantage Is Simple', role: 'Art Director', blurb: "Led creative direction for Arccos' campaign including video, animation, and digital creative.", img: 'eb6bd9cb-dd4b-44cb-b633-ed58bab68aa5/Rams+Hill+-+Sony+-+Marsh+186+%281%29.jpg' },
    { slug: 'peach-barn-farmhouse-brewery', title: 'Peach Barn Farm House', role: 'Brand Designer', blurb: 'Developed complete brand identity and packaging system for craft beverage launch.', img: '1724864122430-O3GF1U2FZBSRFDH15YFG/Mockup.jpg' },
    { slug: 'victory-hemp', title: 'Victory Hemp', role: 'Brand Designer', blurb: 'Created brand identity and packaging system for hemp product line.', img: '1724864122435-I6Z7748T9FDM7RI46R38/6.jpg' },
    { slug: 'recipebrand', title: 'Recipe. Brand', role: 'Creative Director', blurb: 'Led creative development with founding partner including naming, visual identity, web design, and apparel capsule collection.', img: '4dc423ff-edcc-4b48-a85f-ae050a28e1d6/recipe.webp' },
  ],
  focus: [
    { name: 'Branding and Identity', img: '97330a38-bdf8-4ac9-8dca-46db25e5e6ff/Brand%26Identity.png' },
    { name: 'Creative Direction', img: '0d571c58-228e-4ef2-b8f9-48f58e935016/Creative+%26+Art+Direction.png' },
    { name: 'Print and Packaging', img: 'd3aec21c-4cfb-4494-aefa-15f3a382e46d/Print+%26+Packaging.png' },
    { name: 'Web Design', img: 'e4a17a28-5d4f-4dab-8e9c-513017cb4b13/Digital+Design+%26+Web.png' },
    { name: 'Video and Photography', img: 'bb343b07-eeba-44e5-929a-bf35750b6eb9/Photography+%26+Video.png' },
    { name: 'Product Marketing', img: '5feb1802-b42c-46ab-9396-c2d636dc5b1f/Product+Marketing.png' },
  ],
  process: [
    { name: 'Discovery & Research', text: 'Understanding the brand, audience, and business goals through research and stakeholder collaboration. Every strong creative solution starts with the right questions.' },
    { name: 'Strategy & Concepting', text: 'Translating insights into creative concepts that align with brand positioning and resonate with the target audience. This is where strategy meets storytelling.' },
    { name: 'Creative Direction', text: 'Leading the visual and conceptual vision across all touchpoints, from photo and video shoots to campaign assets. Ensuring every piece ladders up to a cohesive story.' },
    { name: 'Design Execution', text: "Crafting the final deliverables with attention to detail and craft. Whether it's brand identity, packaging, or digital assets, execution is where ideas become real." },
    { name: 'Collaboration & Iteration', text: 'Working closely with cross-functional teams and clients to refine and improve work. The best solutions come from feedback, iteration, and partnership.' },
  ],
  // Client logos: single-color PNGs in assets/img/clients/logos (sources in assets/img/clients/src), rows set in build.mjs LOGO_ROWS
  clients: ['PGA Tour', 'Titleist', 'TaylorMade', 'Ping', 'Long Drink', 'EA Sports', 'Srixon', 'Cobra Golf', 'Cleveland Golf', 'Holderness & Bourne', 'Arccos Golf', 'J.Jill', 'Club Champion', 'Random Golf Club', 'Harvard Kennedy School'],
  photo: { src: 'bdeff2b0-40b5-4738-93a9-f4163cbb312e/JoeandFitzy.webp', alt: 'Joe and a colleague on a golf course, one holding a club, the other a drone' },
};

export const about = {
  portrait: { src: '49ade822-b845-4794-b23e-b4b9fda7a83d/SKStudio_Joe0+1+edit.jpg', alt: 'Portrait of Joe Cavadini' },
  lead: "I'm Joe Cavadini, a visual communicator specializing in art direction, web design, digital design, print design, and branding.",
  story: [
    'I earned my BFA in Graphic Design from Plymouth State University in 2018. My career started in print at a small shop where I learned craft and production fundamentals. I then moved to web design at a large retailer before taking on my current role as the art director at a startup. These experiences have shaped a well-rounded approach to design across all brand touchpoints.',
    "I'm drawn to designers who commit fully to their vision: Benny Gold for his unwavering brand authenticity, Aaron Draplin for his bold typography and line work, and Keith Haring for his instantly recognizable and endlessly creative illustrations.",
    "When I'm not designing, you'll find me exploring music, following brands and fashion, on the golf course, managing fantasy football teams, cooking, cheering on Boston sports, or traveling.",
  ],
  facts: [
    { k: 'Education', v: 'BFA, Graphic Design\nPlymouth State University, 2018' },
    { k: 'Tools', v: 'Figma, Adobe CC, Sketch,\nSquarespace, Shopify, Webflow, Framer' },
  ],
  services: ['Brand Identity', 'Art Direction', 'Web Design', 'Print & Packaging', 'Great Music Recs'],
};

export const resume = { src: '111d1c12-fed4-4a4a-8e0f-8796cfd7b21e/Joe-Cavadini-CV.png', alt: 'Joe Cavadini résumé' };

// Order matches the current /work page.
// Removed from the site (old URLs redirect to /work): ea-sports, arccos-smoke-bundle, jjill.
export const retired = ['ea-sports', 'arccos-smoke-bundle', 'jjill'];
export const projects = [
  {
    slug: 'arccosrangefinder', title: 'Smart Laser Rangefinder', short: 'Arccos Smart Laser', client: 'Arccos Golf', services: 'Creative Direction',
    cover: 'assets/img/work/smart-laser-cover.jpg', coverAlt: 'Arccos Smart Laser rangefinder floating on black',
    hero: '6f99a4fc-517b-477a-9125-7193ce5c3d5b/ARCCOS_RANGEFINDER_GENERIC_16x9_COMP.gif',
    meta: [
      ['Role', 'Creative Direction\nVisual Design\nMotion Design\nIndustrial Design'],
      ['Contributors', 'Edit: Tim Mollen\nPhoto: James Gilbert\nDesigners: Scott Grant, Liam Owen'],
    ],
    sections: [
      ['Insight', 'The rangefinder market competes on specs. The Smart Laser needed to do something different. Introduce a connected rangefinder that paired precision yardages with real-time AI insights, and convince golfers who had never thought of their rangefinder as smart that they needed one.'],
      ['Approach', "The work had to hold together at every layer, from the object in a golfer's hand to the screen on their phone. Industrial design, packaging, campaign, and motion were all built around one idea: the most accurate number you've ever had. That number was “Plays Like” Distance, a real-time calculation factoring wind, slope, humidity, altitude, and temperature. Not just how far. How it actually plays. Every creative decision was made to help golfers understand why that changes everything."],
    ],
    stats: [['3,700+', 'Pre-orders'], ['$850K+', 'Pre-order revenue'], ['8%', 'Site pre-order conversion'], ['Week one', 'Sold out at launch']],
    // Product shots on white → carousel (as on the Squarespace page)
    carousel: [
      ['4e0dd6e5-b442-4ecf-999a-29756ea6c9ff/Smart-Laser-1.png', 'Smart Laser rangefinder, front view'],
      ['4b683142-adff-45f9-9124-dcaf38b8b9e0/Smart-Laser-2.png', 'Smart Laser rangefinder with green toggle'],
      ['27df751a-0e7f-4c71-9bbe-5de7e4f0f97b/Smart-Laser-3.png', 'Smart Laser rangefinder, side profile'],
      ['1a08f8c7-6d31-4bf3-8ffb-2ffca12572bb/Smart-Laser-4.png', 'Smart Laser rangefinder buttons detail'],
    ],
    gallery: [
      ['0fd15992-3cc2-48c7-ad5b-87ff79f2c057/Smart-Laser-5.png', 'Golf course seen through the rangefinder display'],
      ['de900d58-8946-44a8-b6af-43f11683bfc0/Plays+like-v2+.png', 'The most accurate Plays Like distance'],
      ['1f538ace-2216-41bf-82dd-4c2bcc370dfa/Rangefinder-2.png', 'Rangefinder display on the course'],
      ['e37a20d3-1429-43a7-b3c9-81b2bdae4f1b/Rangefinder-4.png', 'Rangefinder product detail'],
      ['5c224e78-8068-41f4-8325-0ef106675bab/Rangefinder-1.png', 'Weather and slope data display'],
      ['3dc61321-1159-45d4-9f27-f38f3a38157a/Rangefinder-5.png', 'Rangefinder with illuminated display'],
      ['0e96e87a-22db-4e4f-aa37-f3ca035a8b98/SL-MattFitz.PNG', 'Golf bag on the course with the Smart Laser'],
      ['adc205a9-6425-4894-a3aa-812d5f589acc/IMG_4254.PNG', 'Golfer in a white cap using the rangefinder'],
    ],
    leadAfterStats: true, // packaging slideshow sits below The Result
    col: 'narrow',
    // Image layout mirrors the Squarespace page
    layout: [
      ['slideshow', ['4e0dd6e5-b442-4ecf-999a-29756ea6c9ff/Smart-Laser-1.png', '4b683142-adff-45f9-9124-dcaf38b8b9e0/Smart-Laser-2.png', '27df751a-0e7f-4c71-9bbe-5de7e4f0f97b/Smart-Laser-3.png', '1a08f8c7-6d31-4bf3-8ffb-2ffca12572bb/Smart-Laser-4.png', '0fd15992-3cc2-48c7-ad5b-87ff79f2c057/Smart-Laser-5.png']],
      ['video', { src: 'assets/video/smart-laser.mp4', poster: 'assets/video/smart-laser.jpg', title: 'Arccos Smart Laser Rangefinder launch film' }],
      ['full', 'de900d58-8946-44a8-b6af-43f11683bfc0/Plays+like-v2+.png'],
      ['pair', 'e37a20d3-1429-43a7-b3c9-81b2bdae4f1b/Rangefinder-4.png', '1f538ace-2216-41bf-82dd-4c2bcc370dfa/Rangefinder-2.png', '4/5'],
      ['pair', '5c224e78-8068-41f4-8325-0ef106675bab/Rangefinder-1.png', '3dc61321-1159-45d4-9f27-f38f3a38157a/Rangefinder-5.png', '4/5'],
      ['full', '462d2a7e-b89a-43dd-9030-1ec52152316f/SL-Hero.png'],
      ['pair', '0e96e87a-22db-4e4f-aa37-f3ca035a8b98/SL-MattFitz.PNG', 'adc205a9-6425-4894-a3aa-812d5f589acc/IMG_4254.PNG', '4/5'],
    ],
  },
  {
    slug: 'arccos-link-pro', title: 'The Arccos Link Pro', short: 'Arccos Link Pro', client: 'Arccos Golf', year: '2024', services: 'Art Direction, Web, Animation & Social',
    cover: 'c3f3efb4-40a2-4833-b67e-e2dc5d4832c0/Arcco-Link-Pro.webp', coverAlt: 'Golfer wearing the Arccos Link Pro',
    hero: '33a0e090-bb5f-4069-ab4b-267f3e129d0e/LP-Hero.png',
    meta: [
      ['Role', 'Art Direction\nDesigner\nCopy'],
      ['Contributors', 'CD: Dan Casey\nAgency: Fairfolk\nEdit: Reuter\nColor: Phil Choe\nMix & Sound: Pete Crimi\nPhoto: Jeff Marsh'],
    ],
    sections: [
      ['Insight', 'The 2024 launch of Arccos Golf’s Link Pro marked a significant evolution in wearable technology for golfers. This next-generation device allows players to track all their shots and on-course data without the need for a phone. The campaign surrounding its release required a fully integrated approach, covering every aspect of the product’s public debut, from hardware and packaging to digital platforms and multimedia storytelling.'],
    ],
    videos: [{ yt: 'WO47lcY6924', title: 'Arccos Link Pro launch film' }, { vimeo: '1004530690', thumb: 'https://i.vimeocdn.com/video/1921083310-cc45a5859d0078a9c3309e10a9671a4a3994b8202b7275a8b877b2dad1d2b795-d_1920x1080', title: 'Link Pro spot' }, { vimeo: '981973073', thumb: 'https://i.vimeocdn.com/video/1921080863-7fa811ab8055fa9647099fc8ca9cba916fd80c72ccb422d3853d39225e27753e-d_1080x1920', title: 'Link Pro social cut' }, { vimeo: '981982349', thumb: 'https://i.vimeocdn.com/video/1921080531-6bc0642328a53a639a457b9df003675e6e86302b30c81c634abd2025cc06ea52-d_1080x1920', title: 'Link Pro social cut' }],
    gallery: [
      ['1724864100877-FPGBLH8ESM1MVS6C4CZY/LinkPro-ProductImage-1.png', 'Arccos Link Pro packaging and device'],
      ['1724864100841-TFQI0MX6EAT1OIA5ORKE/LinkPro-ProductImage-2.png', 'Link Pro devices'],
      ['1724864100849-MWH1VEL0FIUNNMZYHDWY/LinkPro-ProductImage-3.png', 'Link Pro product image'],
      ['1724864100856-JISNQBKTIJPAMGV3AGSA/LinkPro-ProductImage-4.png', 'Link Pro with crown logo'],
      ['1724864100864-SNXBM2NTSF619FLPIWQV/LinkPro-ProductImage-5.png', 'Link Pro charging case open'],
      ['1724864100894-HU5IILNPZVOZEGQCALGX/LinkPro-2.png', 'Arccos Link Pro website'],
      ['1724864100899-3ELQTIUSKENPON9LT139/Email.jpg', 'Link Pro email campaign'],
      ['1724864100904-S5L0ZXHAS8NGYPDYDJ7S/LinkPro-3.png', 'Link Pro Instagram and paid social'],
      ['603941ec-7768-4c21-9cc1-7abcaa578b74/Arccos+Bandon+-+Marsh-159.jpg', 'Holding the Link Pro on course'],
      ['9d667501-d857-4dff-8540-01f11d24f3ce/Arccos+Bandon+-+Marsh-013.jpg', 'Two golfers walking at sunset'],
      ['4c08cef0-1c61-42fa-b910-80d34248f864/Arccos+Bandon+-+Marsh-062+%281%29.jpg', 'Golfer on the green near the flag'],
      ['59556a7e-329c-4c4d-b539-e220a3975c2f/Arccos+Bandon+-+Marsh-179.jpg', 'Phone and Link Pro on the course'],
      ['78ad0de5-1f5f-438a-b3c9-d2f5cc905125/Arccos+Bandon+-+Marsh-034.jpg', 'Golf by the ocean'],
      ['c2db1365-d245-4034-b4f5-1dac00b3ed22/Arccos+Bandon+-+Marsh-089+%287%29.jpg', 'Coastal swing'],
      ['4790e87c-7294-4077-8452-d4dc514e618a/Arccos+Bandon+-+Marsh-234.jpg', 'Placing the Link Pro'],
      ['c5678499-8842-4c3d-87e9-f9392a60f064/Arccos+Bandon+-+Marsh-308.jpg', 'Golfer near the coast'],
      ['37f56e99-e2f9-4652-8735-e1d86b554929/Arccos+Bandon+-+Marsh-380+%281%29.jpg', 'Silhouettes near a clock tower'],
      ['07bbd4da-4afb-4de1-aa74-adcc25cddbfd/Arccos+Bandon+-+Marsh-066+%282%29.jpg', 'Golfer near the flag'],
      ['8f47b1c6-5cd8-4711-b386-09b0147f2ffb/Arccos+Bandon+-+Marsh-336+%282%29.jpg', 'Four golfers at sunset'],
    ],
    stats: [
      ['#1', 'Biggest e-commerce day in Arccos history'],
      ['1,300+', 'Units sold in the first 48 hours'],
      ['2x', 'Conversion vs. the previous product launch'],
    ],
    col: 'narrow',
    leadAfterStats: true, // Insight first, then the packaging slideshow
    // Image layout mirrors the Squarespace page
    layout: [
      ['slideshow', ['1724864100877-FPGBLH8ESM1MVS6C4CZY/LinkPro-ProductImage-1.png', '1724864100841-TFQI0MX6EAT1OIA5ORKE/LinkPro-ProductImage-2.png', '1724864100849-MWH1VEL0FIUNNMZYHDWY/LinkPro-ProductImage-3.png', '1724864100856-JISNQBKTIJPAMGV3AGSA/LinkPro-ProductImage-4.png', '1724864100864-SNXBM2NTSF619FLPIWQV/LinkPro-ProductImage-5.png']],
      ['video', { yt: 'WO47lcY6924', title: 'Arccos Link Pro launch film' }],
      ['videopair', { vimeo: '981973073', thumb: 'https://i.vimeocdn.com/video/1921080863-7fa811ab8055fa9647099fc8ca9cba916fd80c72ccb422d3853d39225e27753e-d_1080x1920', title: 'Link Pro social cut' }, { vimeo: '981982349', thumb: 'https://i.vimeocdn.com/video/1921080531-6bc0642328a53a639a457b9df003675e6e86302b30c81c634abd2025cc06ea52-d_1080x1920', title: 'Link Pro social cut' }, '9/16'],
      ['video', { vimeo: '1004530690', thumb: 'https://i.vimeocdn.com/video/1921083310-cc45a5859d0078a9c3309e10a9671a4a3994b8202b7275a8b877b2dad1d2b795-d_1920x1080', title: 'Link Pro spot' }],
      ['full', '1724864100894-HU5IILNPZVOZEGQCALGX/LinkPro-2.png'],
      ['full', '1724864100899-3ELQTIUSKENPON9LT139/Email.jpg'],
      ['full', '1724864100904-S5L0ZXHAS8NGYPDYDJ7S/LinkPro-3.png'],
      ['carousel', '@bandon'],
    ],
  },
  {
    slug: 'arccos-simple', title: 'The Advantage Is Simple', client: 'Arccos Golf', services: 'Art Direction + Design',
    cover: '1724864108178-YATFCM1HFCNEDUGF7LUR/Advantage-Simple.png', coverAlt: 'Smartphone showing the Arccos rangefinder',
    hero: '1724864113978-M6PINNF8YIUSWNBAN3OD/Rams+Hill+-+Leica+-+Marsh+11.jpg',
    meta: [
      ['Role', 'Art Director'],
      ['Contributors', 'CD: Dan Casey\nEdit: Britt Bellamy\nColor: Phil Choe\nMix & Sound: Pete Crimi\nPhoto: Jeff Marsh'],
    ],
    sections: [
      ['The idea', 'A lot runs through your mind as you approach your shot: Where’s the wind? What club did I use last time? Am I between clubs? Whatever thoughts are swirling, quiet the noise, because with the AI-powered rangefinder, strokes gained analytics, and precise club distances right in the Arccos app, you have the answer. The advantage is simple.'],
    ],
    videos: [{ yt: 'H3hBD83LrcA', title: 'The Advantage Is Simple' }],
    gallery: [
      ['eb6bd9cb-dd4b-44cb-b633-ed58bab68aa5/Rams+Hill+-+Sony+-+Marsh+186+%281%29.jpg', 'Golfer holding a smartphone'],
      ['11b0ab81-e0cf-459e-8383-9918bc40d1b3/Rams+Hill+-+Sony+-+Marsh+193+%281%29.jpg', 'Swing at sunset'],
      ['b3fc1ecf-1da8-42a9-a90a-6b6fbe9bf32f/Rams+Hill+-+Leica+-+Marsh+9.jpg', 'Golfer holding a club'],
      ['90d2562d-eefa-44fa-8c31-48369ee6cb02/Rams+Hill+-+Sony+-+Marsh+256.jpg', 'Golfer in a white cap'],
      ['1bdcf0f7-1179-46e9-827d-ee5aff005b0c/Rams+Hill+-+Sony+-+Marsh+260.jpg', 'Mid-swing on the course'],
      ['2f24d389-3945-482a-ae9c-7b97248e27f1/Rams+Hill+-+Sony+-+Marsh+285+%282%29.jpg', 'Gloved grip close-up'],
      ['e817f348-c4c6-4d72-a9f6-e784eb72033f/Rams+Hill+-+Sony+-+Marsh+291.jpg', 'Golfer with mountains behind'],
      ['91b9db70-9f9c-446e-88b9-791956a55047/Rams+Hill+-+Leica+-+Marsh+21.jpg', 'Lining up a shot'],
      ['621c576c-be24-4953-a776-99d3622901c4/Rams+Hill+-+Sony+-+Marsh+459+%281%29.jpg', 'Mid-swing'],
      ['a8bf10f6-138b-45c9-ad32-b430925c1719/Rams+Hill+-+Sony+-+Marsh+543+%281%29.jpg', 'Swing with players watching'],
      ['4ab3697d-6349-4fc6-9525-75942d68a84b/Rams+Hill+-+Sony+-+Marsh+536.jpg', 'Two golfers checking the app'],
      ['7f9b3b57-8ec0-4a59-867e-8e2f195ea89d/Rams+Hill+-+Sony+-+Marsh+534.jpg', 'Golfer in a black cap'],
      ['dd34bc40-b165-465d-9004-27b3fce7db94/Rams+Hill+-+Sony+-+Marsh+676+%285%29.jpg', 'Celebrating on the course'],
      ['932fd398-50c4-4e46-87db-05ed0c6e728c/Rams+Hill+-+Sony+-+Marsh+569+%282%29.jpg', 'Golfer in sunglasses'],
      ['c5e47376-5bc3-47c5-b633-eebf8ce1d5d2/Rams+Hill+-+Sony+-+Marsh+439.jpg', 'Checking a smartphone'],
      ['da6c01d2-ceae-408c-a589-f1870cadd822/Rams+Hill+-+Sony+-+Marsh+510+%283%29.jpg', 'Preparing to putt'],
    ],
    col: 'medium',
    // Image layout mirrors the Squarespace page
    layout: [
      ['video', { yt: 'H3hBD83LrcA', title: 'The Advantage Is Simple' }],
      ['carousel', '@gallery'],
    ],
  },
  {
    slug: 'pga-tour', title: 'Official Game Tracker of the PGA TOUR', short: 'PGA TOUR Partnership', client: 'Arccos & PGA TOUR', services: 'Art Direction, Web, & Social',
    cover: '1724864108188-DHQ3B9HFCSBA0PKHCDH2/AG-PGA-1.png', coverAlt: 'Golfer swinging in front of a PGA TOUR crowd',
    hero: '1724864118520-RXFH49AR0RDKN720ONG8/AG-PGATOUR-1.png',
    meta: [['Role', 'Art Director\nDesigner']],
    videos: [{ vimeo: '1004545763', thumb: 'https://i.vimeocdn.com/video/1921100265-d0190ad8e98972eb15291c1331abe4f1ca817259f5c265bb92776b2408e8d354-d_1920x1080', title: 'Arccos x PGA TOUR' }],
    gallery: [
      ['1724864118534-C63UOAZKG8WYAF10EWHX/AG_PGAT_BrandGuidlines.png', 'Arccos x PGA TOUR brand guidelines'],
      ['1724864118538-RPGYQRM205PIUXQL4866/AG-PGATOUR-2.png', 'Arccos Caddie promotional display'],
      ['1724864118543-6PTKHI54N8L0EIQ313GV/AG-PGATOUR-4.png', 'App screens collage'],
      ['1724864118547-NX9235PBW464DHNJ9YD1/AG-PGATOUR-5.png', 'Grip with Arccos sensor sticker'],
    ],
    col: 'wide',
    // Image layout mirrors the Squarespace page
    layout: [
      ['video', { vimeo: '1004545763', thumb: 'https://i.vimeocdn.com/video/1921100265-d0190ad8e98972eb15291c1331abe4f1ca817259f5c265bb92776b2408e8d354-d_1920x1080', title: 'Arccos x PGA TOUR' }],
      ['full', '1724864118534-C63UOAZKG8WYAF10EWHX/AG_PGAT_BrandGuidlines.png'],
      ['full', '1724864118538-RPGYQRM205PIUXQL4866/AG-PGATOUR-2.png'],
      ['full', '1724864118543-6PTKHI54N8L0EIQ313GV/AG-PGATOUR-4.png'],
      ['full', '1724864118547-NX9235PBW464DHNJ9YD1/AG-PGATOUR-5.png'],
    ],
  },
  {
    slug: 'peach-barn-farmhouse-brewery', title: 'Peach Barn Farmhouse & Brewery', client: 'Peach Barn', year: '2022', services: 'Brand Identity + Design',
    cover: '1724864108192-A2AON4A5QKJT1ZL9G9L0/4.jpg', coverAlt: 'Glass of beer with the Peach Barn logo',
    hero: '1724864104760-UP6F3B7NJPG6C6GLHK8U/beerglass.jpg',
    meta: [['Role', 'Branding & Packaging']],
    gallery: [
      ['1724864104760-UP6F3B7NJPG6C6GLHK8U/beerglass.jpg', 'Branded glass of beer at the bar'],
      ['1724864104765-IU8UDN2MGZVJSMUOH10B/PB.png', 'Peach Barn logo'],
      ['1724864104770-WQIDYIFGO2WLQ4RDGFW5/BADGES-02.png', 'Peach Barn Sister Bay badge'],
      ['1724864104774-3U8L2W3Q5Q47U4M0BLNB/BADGES-01.png', 'Peach Barn farmhouse badge'],
      ['1724864104778-EW3FMYES4Y3GDUTJO3L2/BADGES-03.png', 'Peach Barn icon set'],
      ['1724864104783-SVGU6G8SBOLFLQQ9PWST/Matches+Mockup.png', 'Peach Barn matchbox'],
      ['1724864104788-Q4T2AVQD7PTD608QGLG5/PBFB2.jpg', 'Jersey Chaser IPA can'],
      ['1724864104793-3PNKFQEH1VS501JUNGNK/PBFB.jpg', 'Silo Sisters can'],
      ['1724864104810-KEFZVK2M7X8LTRAC7HG6/pattern-01.png', 'Topographic brand pattern'],
      ['1724864104815-HIWZBG5VXU9E2CN644RC/PB.gif', 'Animated peach mark'],
      ['1724864104820-EAT9NSFFDTYKZL0IL9AG/brewery.jpg', 'Brewery interior'],
    ],
    col: 'narrow',
    // Image layout mirrors the Squarespace page
    layout: [
      ['full', '1724864104765-IU8UDN2MGZVJSMUOH10B/PB.png'],
      ['pair', '1724864104774-3U8L2W3Q5Q47U4M0BLNB/BADGES-01.png', '1724864104770-WQIDYIFGO2WLQ4RDGFW5/BADGES-02.png', '1/1'],
      ['full', '1724864104778-EW3FMYES4Y3GDUTJO3L2/BADGES-03.png'],
      ['full', '1724864104806-CPUOIJAYMS2UYGX6A5GI/Mockup.jpg'],
      ['pair', '1724864104793-3PNKFQEH1VS501JUNGNK/PBFB.jpg', '1724864104788-Q4T2AVQD7PTD608QGLG5/PBFB2.jpg', '1/1'],
      ['full', '1724864104783-SVGU6G8SBOLFLQQ9PWST/Matches+Mockup.png'],
      ['pair', '1724864104810-KEFZVK2M7X8LTRAC7HG6/pattern-01.png', '1724864104815-HIWZBG5VXU9E2CN644RC/PB.gif', '1/1'],
      ['full', '1724864104820-EAT9NSFFDTYKZL0IL9AG/brewery.jpg'],
    ],
  },
  {
    slug: 'victory-hemp', title: 'Victory Hemp', client: 'Victory Hemp', year: '2020', services: 'Brand Identity + Design',
    cover: '1724864108196-5G9YLE31LC427FI4RZKP/6.jpg', coverAlt: 'Victory Hemp winged V mark',
    hero: '1724864124544-NL0K04KNYLDB16LRRD6H/6.jpg',
    meta: [['Role', 'Brand Designer']],
    gallery: [
      ['1724864124549-2ED2TX5WQCHB7I6QQSOP/victory_hemp-02-01-1.png', 'Victory Hemp logo suite'],
      ['1724864124554-6W8807RTM7DDSNOWQOTY/COLOR-01.png', 'Victory Hemp color palette'],
      ['1724864124559-R3GG8160K1D4W9JDRG1U/flower_package_wings.jpg', 'Lifter flower packaging'],
      ['1724864124563-K8VI82FPX1FOD0RGEOYX/Victory-Bottle%2BMockup_2.jpg', 'Hemp oil bottle'],
      ['1724864124567-0EYJM753YR13MAE0NB6C/T-Shirt%2B_Back.jpg', 'T-shirt, back print'],
      ['1724864124571-5MXYQW09WG8WJEW6ZF1E/T-Shirt%2B_Front.jpg', 'T-shirt, chest print'],
    ],
    col: 'wide',
    // Image layout mirrors the Squarespace page
    layout: [
      ['full', '1724864124549-2ED2TX5WQCHB7I6QQSOP/victory_hemp-02-01-1.png'],
      ['full', '1724864124554-6W8807RTM7DDSNOWQOTY/COLOR-01.png'],
      ['pair', '1724864124559-R3GG8160K1D4W9JDRG1U/flower_package_wings.jpg', '1724864124563-K8VI82FPX1FOD0RGEOYX/Victory-Bottle%2BMockup_2.jpg', '4/3'],
      ['pair', '1724864124571-5MXYQW09WG8WJEW6ZF1E/T-Shirt%2B_Front.jpg', '1724864124567-0EYJM753YR13MAE0NB6C/T-Shirt%2B_Back.jpg', '4/3'],
    ],
  },
  {
    slug: 'recipebrand', title: 'recipe.', short: 'Recipe. Brand', client: 'recipe.', services: 'Brand Identity, Art Direction, Design & Web',
    cover: '1724864108202-VDU391C56ZSCHKX6ZW62/3.jpg', coverAlt: 'Young man lying on a court, smiling',
    hero: '1724864121422-7L36SJDUIOKYHNXF5676/3.jpg',
    meta: [['Role', 'Art direction, design, retouching, blog management, social management, general management, e-commerce, vendor relations, product QC, orders & shipping']],
    sections: [
      ['Insight', 'Founded by my friend and I, ‘recipe.’ is an independent clothing brand founded on the idea of creating something from nothing. Our products serve as a reminder to follow your passions, finish what you set out to do, and create THAT certain something. We focus on producing limited quantity, high quality goods inspired by street culture, the great outdoors, art & design, photography, and sports. All products are made in the USA.'],
    ],
    gallery: [
      ['1724864121422-7L36SJDUIOKYHNXF5676/3.jpg', 'Lying on an outdoor court'],
      ['ac9d3a88-1484-4216-9c79-bdbf8c225538/recipe-cover5.jpg', 'recipe. wordmark, black on white'],
      ['1724864121426-PAZ904XQJCME5OYTV0I3/recipe_LP.jpg', 'recipe. e-commerce site'],
      ['42b3aeba-18aa-46d0-833b-ca50f1a87a32/Recipe-LB_NEW-2.png', 'recipe. lookbook'],
      ['f0905dc5-c83f-4a79-8212-9498716f75a6/Recipe-LB_NEW-1.png', 'recipe. lookbook collage'],
      ['86ecc5a8-705b-445c-9d6f-7703db6316cc/rec1-del1.png', 'recipe. product photography'],
      ['a29b649f-ba05-4fc3-a344-c53700f6af81/rec1-del12.png', 'recipe. campaign series'],
    ],
    col: 'wide',
    // Image layout mirrors the Squarespace page
    layout: [
      ['pair', 'ac9d3a88-1484-4216-9c79-bdbf8c225538/recipe-cover5.jpg', 'ad122ae8-0606-4271-bb4a-9207fe097695/recipe-cover1.jpg'],
      ['full', '1724864121426-PAZ904XQJCME5OYTV0I3/recipe_LP.jpg'],
      ['pair', '42b3aeba-18aa-46d0-833b-ca50f1a87a32/Recipe-LB_NEW-2.png', 'f0905dc5-c83f-4a79-8212-9498716f75a6/Recipe-LB_NEW-1.png'],
      ['pair', '86ecc5a8-705b-445c-9d6f-7703db6316cc/rec1-del1.png', 'a29b649f-ba05-4fc3-a344-c53700f6af81/rec1-del12.png'],
    ],
  },
  {
    slug: 'arccos-partnership-commercial', title: 'Arccos Partnership Commercial', client: 'Arccos Golf, TaylorMade, PING, Cleveland/Srixon', services: 'Art Direction',
    cover: '1724864108211-90L8WV61550JKOOISMJX/Arccos+Bandon+-+Marsh-208+1.png', coverAlt: 'Ping clubs in a golf bag on a sunny day',
    hero: '1724864107413-I8PP2YSIRJUBBFHZCOI7/Rams+Hill+-+Leica+-+Marsh+40.jpg',
    meta: [['Role', 'Art Director']],
    videos: [{ yt: '8EVW3LSrYD0', title: 'Arccos Partnership Commercial' }],
    col: 'narrow',
    // Image layout mirrors the Squarespace page
    layout: [
      ['video', { yt: '8EVW3LSrYD0', title: 'Arccos Partnership Commercial' }],
    ],
  },
  {
    slug: 'arccos-ping', title: 'A Smarter Way to Play Your Best.', short: 'A Smarter Way to Play Your Best', client: 'PING & Arccos Golf', services: 'Art Direction',
    cover: '1724864108216-519I1G162SJ4EW83VMWH/PING-1.jpg', coverAlt: 'Golfer in a grey cap',
    hero: '1724864114791-SSYQ080NYOX0KZXT1JLG/Arccos+Bandon+-+Marsh-141.jpg',
    meta: [['Role', 'Art Director']],
    videos: [{ yt: 'tyl46iiH9UE', title: 'PING x Arccos' }, { yt: 'nfKHxd7M_ZY', title: 'PING x Arccos' }],
    col: 'medium',
    // Image layout mirrors the Squarespace page
    layout: [
      ['video', { yt: 'tyl46iiH9UE', title: 'PING x Arccos' }],
      ['video', { yt: 'nfKHxd7M_ZY', title: 'PING x Arccos' }],
    ],
  },
  {
    slug: 'jjill-spring-preview', title: 'J.Jill Spring Preview', client: 'J.Jill', year: '2021', services: 'Art Direction',
    cover: '1724864108226-SN5LJ8Y8IFKBSMVQGE8T/3.jpg', coverAlt: 'Beige jacket and knit flat lay',
    hero: '1724864116670-VI6H211ONT49EKPKTM5I/5.jpg',
    meta: [['Role', 'Art Director']],
    gallery: [
      ['1724864116675-3Q5035SWWEGE5WZJK90T/3.jpg', 'Beige jacket and scarf flat lay'],
      ['1724864116679-06ZL4VZ5HJSYCFZVFAN0/5.jpg', 'Denim jacket flat lay'],
      ['1724864116684-4V05JMFENLD1QQWXBRR4/7.jpg', 'Polka dot blouse and jeans'],
      ['1724864116689-3BP7BT854HRBIDUL4MUY/9.jpg', 'Blue ballet flats flat lay'],
      ['1724864116692-D50VQ8UVX7CG4AN5HSPO/6.jpg', 'Floral blouse flat lay'],
      ['1724864116696-FJAUVIVARO4AL6BM27KC/4.jpg', 'Beige and tan accessories'],
      ['1724864116702-M56KCF0MJC07FK7A8AS2/8.jpg', 'Purple knit and jeans'],
      ['1724864116706-5TP0GQ0ZFGXJ8IKBHJZN/10.jpg', 'Casual outfit flat lay'],
    ],
    col: 'medium',
    // Image layout mirrors the Squarespace page
    layout: [
      ['pair', '1724864116675-3Q5035SWWEGE5WZJK90T/3.jpg', '1724864116692-D50VQ8UVX7CG4AN5HSPO/6.jpg', '1/1'],
      ['pair', '1724864116679-06ZL4VZ5HJSYCFZVFAN0/5.jpg', '1724864116696-FJAUVIVARO4AL6BM27KC/4.jpg', '1/1'],
      ['pair', '1724864116684-4V05JMFENLD1QQWXBRR4/7.jpg', '1724864116702-M56KCF0MJC07FK7A8AS2/8.jpg', '1/1'],
      ['pair', '1724864116689-3BP7BT854HRBIDUL4MUY/9.jpg', '1724864116706-5TP0GQ0ZFGXJ8IKBHJZN/10.jpg', '1/1'],
    ],
  },
  {
    slug: 'logofolio', title: 'Logofolio', client: 'Various', services: 'Brand Identity', logos: true,
    meta: [['Role', 'Brand Designer']],
    cover: '1724864108241-2FGFH9VNOAGONLW1NGK4/7.jpg', coverAlt: 'Songflow logo on textured paper',
    hero: '1724864110152-O6VQWDCWVHRMZ29QR4DQ/7.jpg',
    sections: [['Intro', 'Every logo begins with a simple idea, but the impact can last a lifetime. Designed with care and creativity, each aiming to capture the unique essence of its brand.']],
    gallery: [
      ['1724864110152-O6VQWDCWVHRMZ29QR4DQ/7.jpg', 'Songflow'],
      ['1724864110158-ADJZPN20CRA8G0HT6SNE/T%26SC.png', 'Thibault & Son Construction'],
      ['1724864110165-CQCYLZ4LZSDY1RRGVUVQ/CULTIVATE_1.png', 'Cultivate'],
      ['1724864110170-PYKPZITKB50SJVDW2G8I/PBFB_LOGOS-01.png', 'Peach Barn & Brewery'],
      ['1724864110175-VAAOGKF7MKLZ2SEDSAYN/PB.png', 'Peach Barn monogram'],
      ['1724864110179-7EURXU2N32786V8B4XJS/Victory_Badge.png', 'Victory Hemp badge'],
      ['1724864110184-ZSY272SLLG0MCZZINH76/recipe.png', 'recipe. wordmark'],
      ['1724864110189-G7WZ98AD25NV6AMKUOA4/Victory.png', 'Victory Hemp wings'],
      ['1724864110193-L59SZ2TBXIJKHG2ARQIS/CULTIVATE_2.png', 'Cultivate zipper pull'],
      ['1724864110199-7HYCWJT7PMBKR7MQ6C4Y/Recipe_Badge.png', 'recipe. badge'],
      ['1724864110204-ZGORL7M9CDO767E028VF/MFDOOM.png', 'Shield mark'],
      ['1724864110210-YW350OOK9RPQH981X8QP/Penuches.png', 'Penuches Ale House'],
      ['1724864110215-NELLLOG6DH971SYPX6AH/PSU_ART.png', 'PSU Art'],
      ['1724864110219-J4GEV6S2BOE6OZOEXHNM/HS-1-01.png', 'Ampersand mark'],
      ['1724864110224-AID48VPW9XCSV72Y9SUS/R-TAG-01.png', 'recipe. tag'],
      ['1724864110229-TW3D8PI8YR16IV61NU3D/HS-2-01.png', 'Esquisite Studio'],
    ],
    col: 'wide',
    // Image layout mirrors the Squarespace page
    layout: [
      ['grid3', '@gallery-rest', '1/1'],
    ],
  },
];
