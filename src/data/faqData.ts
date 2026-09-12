export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is a color picker tool?',
    answer: 'A color picker tool is a digital utility or browser application that allows designers, developers, and creators to select, sample, and identify exact color values from an image, website, or screen. It provides color codes in standard formats such as HEX, RGB, and HSL.'
  },
  {
    question: 'How to extract color from a picture?',
    answer: 'To extract color from a picture, upload your image file (PNG, JPEG, or SVG) to our online color extractor. Hover over the picture with the 200px zoom lens magnifier to magnify the pixels, then click any pixel to extract its exact HEX, RGB, and HSL color values.'
  },
  {
    question: 'What is a free color picker?',
    answer: 'A free color picker is an accessible web application that lets you sample color codes from web pages or uploaded photos without requiring registration, downloads, or payment. Our tool is 100% free and processes images locally in your browser.'
  },
  {
    question: 'What is color picking?',
    answer: 'Color picking is the process of inspecting digital graphics, photos, or user interfaces to identify and copy precise numerical color values (such as #FF0080 or rgb(255, 0, 128)) for use in web design, software development, or digital art.'
  },
  {
    question: 'What is a color code?',
    answer: 'A color code is a standardized representation of a color in computer graphics. Common formats include HEX (#RRGGBB hexadecimals), RGB (Red, Green, Blue values from 0-255), and HSL (Hue, Saturation, Lightness percentages).'
  },
  {
    question: 'What are the 7 types of colors?',
    answer: 'The traditional 7 colors of the rainbow visible spectrum (ROYGBIV) are Red, Orange, Yellow, Green, Blue, Indigo, and Violet. In color theory, colors are also categorized into Primary, Secondary, Tertiary, Warm, Cool, Neutral, and Complementary colors.'
  },
  {
    question: 'What is the font finder?',
    answer: 'A font finder (like WhatTheFont or Font Squirrel Matcherator) is an optical character recognition (OCR) design tool that analyzes text in an uploaded photo or image to identify the exact typeface, font family, and font weight used.'
  },
  {
    question: 'Can Google identify a color?',
    answer: 'Yes! You can search Google for a color name or hex code (e.g., "#7928CA color") to see a color swatch box, or use Google Lens on a mobile device to scan physical objects and find matching color names and hex values.'
  },
  {
    question: 'How can I identify a type of color?',
    answer: 'You can identify a type of color by sampling its pixel value using a hex color extractor tool. The extracted RGB/HSL values indicate its dominant primary component (Red, Green, or Blue) and its saturation and lightness levels.'
  },
  {
    question: 'How to see which color is used?',
    answer: 'To see which color is used on a website or photo, click our Screen Dropper Lens button to sample any pixel on your display, or inspect CSS styles using browser Developer Tools (F12).'
  },
  {
    question: 'Can I use AI to identify a color?',
    answer: 'Yes! AI vision models and intelligent color extraction tools analyze image composition to automatically detect dominant color palettes, suggest accessible contrast pairings, and generate complementary color schemes.'
  },
  {
    question: 'Is there a free color extractor?',
    answer: 'Yes! Our website color extractor is completely free to use. You can extract color codes from any screen pixel or uploaded image (PNG, JPEG, SVG) directly in your browser with no limits.'
  },
  {
    question: 'Can I take a picture of a color and find it?',
    answer: 'Yes! Take a photo of any real-world object using your smartphone or camera, upload the image to our color extractor, and use the 200px zoom lens to pinpoint the exact color pixel and get its HEX code.'
  }
];
