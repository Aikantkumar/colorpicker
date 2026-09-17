import type { SupportedLang } from '../i18n/ui';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS_BY_LANG: Record<SupportedLang, FaqItem[]> = {
  en: [
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
  ],
  es: [
    {
      question: '¿Qué es una herramienta selector de color?',
      answer: 'Un selector de color es una utilidad digital o aplicación de navegador que permite a diseñadores, desarrolladores y creadores seleccionar y obtener valores exactos de color de una imagen o pantalla en formatos HEX, RGB y HSL.'
    },
    {
      question: '¿Cómo extraer un color de una imagen?',
      answer: 'Para extraer el color de una imagen, sube tu archivo (PNG, JPEG o SVG) a nuestro extractor online. Pasa la lupa de 200px sobre la imagen y haz clic en cualquier píxel para copiar sus códigos HEX, RGB y HSL.'
    },
    {
      question: '¿Qué es un selector de color gratuito?',
      answer: 'Es una aplicación web accesible que te permite obtener códigos de color de páginas web o fotos subidas sin registro ni pago. Nuestra herramienta es 100% gratuita y procesa las imágenes localmente.'
    },
    {
      question: '¿En qué consiste la selección de color?',
      answer: 'Es el proceso de inspeccionar gráficos o fotos para identificar y copiar valores numéricos exactos (como #FF0080) para su uso en diseño web o desarrollo.'
    },
    {
      question: '¿Qué es un código de color?',
      answer: 'Es una representación estandarizada de un color en gráficos digitales. Los formatos más comunes son HEX (#RRGGBB), RGB (0-255) y HSL (tonalidad, saturación, luminosidad).'
    },
    {
      question: '¿Cuáles son los 7 tipos de colores?',
      answer: 'Los 7 colores del arcoíris son Rojo, Naranja, Amarillo, Verde, Azul, Añil y Violeta. En teoría del color se clasifican en Primarios, Secundarios, Terciarios, Cálidos, Fríos, Neutros y Complementarios.'
    },
    {
      question: '¿Qué es el identificador de fuentes (font finder)?',
      answer: 'Es una herramienta OCR de diseño que analiza el texto en una foto o imagen subida para identificar la tipografía y fuente exactas utilizadas.'
    },
    {
      question: '¿Puede Google identificar un color?',
      answer: '¡Sí! Puedes buscar en Google el nombre de un color o código hex, o usar Google Lens en dispositivos móviles para escanear objetos reales y encontrar códigos de color coincidentes.'
    },
    {
      question: '¿Cómo puedo identificar un tipo de color?',
      answer: 'Muestreando el valor del píxel con nuestro extractor. Los valores RGB/HSL indican el componente dominante (Rojo, Verde o Azul) así como su saturación y brillo.'
    },
    {
      question: '¿Cómo saber qué color se está utilizando?',
      answer: 'Haz clic en el botón de Cuentagotas en Pantalla para tomar muestras de cualquier píxel de tu pantalla, o inspecciona los estilos CSS con las Herramientas de Desarrollo del navegador.'
    },
    {
      question: '¿Puedo usar IA para identificar un color?',
      answer: '¡Sí! Los modelos de visión por IA analizan la composición de las imágenes para detectar paletas dominantes y sugerir combinaciones de contraste accesibles.'
    },
    {
      question: '¿Existe un extractor de color gratuito?',
      answer: '¡Sí! Nuestro extractor de color en sitio web es completamente gratuito. Puedes extraer códigos de color de cualquier píxel o imagen subida sin límites.'
    },
    {
      question: '¿Puedo tomar una foto de un color y encontrarlo?',
      answer: '¡Sí! Toma una foto de cualquier objeto real, súbela a nuestro extractor de color y usa la lupa de 200px para señalar el píxel exacto y obtener su código HEX.'
    }
  ],
  ja: [
    {
      question: 'カラーピッカーツールとは何ですか？',
      answer: 'カラーピッカーツールは、デザイナーや開発者が画像や画面から正確な色（HEX、RGB、HSLなど）を選択・抽出できるWebアプリケーションです。'
    },
    {
      question: '写真から色を抽出するには？',
      answer: '画像をアップロードし、200pxのズームレンズで拡大しながら任意のピクセルをクリックすると、正確なHEX、RGB、HSLのカラーコードを取得できます。'
    },
    {
      question: '無料のカラーピッカーとは？',
      answer: '会員登録やインストール不要で、ブラウザ上から無料で色コードを取得できるWebツールです。当ツールは100%無料でローカル処理されます。'
    },
    {
      question: 'カラーピッキングとは何ですか？',
      answer: 'デジタル画像やUIを検査し、Webデザインや開発で使用するための正確な色数値（#FF0080やrgb(255, 0, 128)など）をコピーするプロセスです。'
    },
    {
      question: 'カラーコードとは何ですか？',
      answer: 'コンピュータグラフィックスで色を標準的に表現したコードです。主な形式にHEX（16進数）、RGB（赤緑青の数値）、HSL（色相・彩度・輝度）があります。'
    },
    {
      question: '色の7つの種類とは？',
      answer: '虹の7色（赤・橙・黄・緑・青・藍・紫）のほか、色彩理論では原色・等色・三次色・暖色・寒色・中性色・補色などに分類されます。'
    },
    {
      question: 'フォントファインダーとは何ですか？',
      answer: 'アップロードされた画像内のテキストを解析し、使用されている正確なフォント名やスタイルを特定するOCRツールです。'
    },
    {
      question: 'Googleで色を特定できますか？',
      answer: 'はい！Googleでカラーコードや色名を検索するか、Google Lensを使用して実物をスキャンすることで色名やHEXコードを確認できます。'
    },
    {
      question: '色の種類を識別するにはどうすればよいですか？',
      answer: '当抽出ツールのズームレンズでピクセルをサンプル採取し、RGB/HSL値から主成分や明度・彩度を確認します。'
    },
    {
      question: 'どの色が使われているか確認するには？',
      answer: '「画面スポイト」ボタンをクリックして画面上のピクセルを選択するか、ブラウザの開発者ツール（F12）でCSSを確認します。'
    },
    {
      question: 'AIを使って色を特定できますか？',
      answer: 'はい！AIビジョンモデルにより、画像内の主要なカラーパレットの抽出やアクセシビリティのコントラスト提案が自動で行えます。'
    },
    {
      question: '無料のカラー抽出ツールはありますか？',
      answer: 'はい！当サイトのカラー抽出ツールは完全無料で、画面やアップロード画像（PNG, JPEG, SVG）から無制限にコードを取得できます。'
    },
    {
      question: '色の写真を撮影して検索できますか？',
      answer: 'はい！スマートフォン等で実物の写真を撮影し、ツールにアップロードして200pxレンズでピクセルを指定すればHEXコードが取得できます。'
    }
  ],
  fr: [
    {
      question: "Qu'est-ce qu'un outil sélecteur de couleurs ?",
      answer: "Un sélecteur de couleurs est une application web qui permet aux designers et développeurs de sélectionner et d'identifier les valeurs exactes d'une couleur (HEX, RGB, HSL) sur une image ou un écran."
    },
    {
      question: "Comment extraire une couleur d'une image ?",
      answer: "Téléchargez votre image (PNG, JPEG, SVG), survolez-la avec la loupe zoom 200px et cliquez sur n'importe quel pixel pour obtenir les codes HEX, RGB et HSL."
    },
    {
      question: "Qu'est-ce qu'un sélecteur de couleurs gratuit ?",
      answer: "C'est un outil en ligne accessible sans inscription ni téléchargement. Notre outil est 100% gratuit et traite les images localement dans votre navigateur."
    },
    {
      question: "En quoi consiste la sélection de couleur ?",
      answer: "C'est l'action d'inspecter un élément graphique pour copier des valeurs numériques précises (comme #FF0080) destinées au design web ou à la programmation."
    },
    {
      question: "Qu'est-ce qu'un code couleur ?",
      answer: "Une représentation standardisée d'une couleur en informatique. Les formats courants incluent HEX (#RRGGBB), RGB (0-255) et HSL (Teinte, Saturation, Luminosité)."
    },
    {
      question: "Quels sont les 7 types de couleurs ?",
      answer: "Les 7 couleurs de l'arc-en-ciel sont Rouge, Orange, Jaune, Vert, Bleu, Indigo et Violet. En théorie des couleurs, on distingue primaires, secondaires, tertiaires, chaudes, froides, neutres et complémentaires."
    },
    {
      question: "Qu'est-ce qu'un détecteur de polices (font finder) ?",
      answer: "Un outil OCR qui analyse le texte sur une image téléversée pour identifier la famille et le style exacts de la police utilisée."
    },
    {
      question: "Google peut-il identifier une couleur ?",
      answer: "Oui ! Vous pouvez rechercher un nom de couleur ou un code hex sur Google, ou utiliser Google Lens pour scanner un objet réel."
    },
    {
      question: "Comment identifier un type de couleur ?",
      answer: "En prélevant la valeur du pixel avec notre outil. Les valeurs RGB/HSL indiquent la teinte dominante ainsi que la saturation et la luminosité."
    },
    {
      question: "Comment savoir quelle couleur est utilisée ?",
      answer: "Cliquez sur le bouton Pipette d'écran pour échantillonner n'importe quel pixel à l'écran, ou inspectez les styles CSS via les outils de développement (F12)."
    },
    {
      question: "Puis-je utiliser l'IA pour identifier une couleur ?",
      answer: "Oui ! Les modèles d'IA analysent les images pour détecter les palettes dominantes et suggérer des combinaisons contrastées accessibles."
    },
    {
      question: "Existe-t-il un extracteur de couleur gratuit ?",
      answer: "Oui ! Notre extracteur de couleur est totalement gratuit. Vous pouvez extraire des codes couleur depuis n'importe quel pixel ou fichier image sans aucune limite."
    },
    {
      question: "Puis-je prendre une photo d'une couleur et la trouver ?",
      answer: "Oui ! Prenez une photo avec votre smartphone, téléversez-la sur notre outil et utilisez la loupe 200px pour cibler le pixel exact et obtenir son code HEX."
    }
  ],
  de: [
    {
      question: 'Was ist ein Farb-Wähler-Tool (Color Picker)?',
      answer: 'Ein Color Picker ist eine digitale Anwendung, mit der Designer und Entwickler exakte Farbwerte (HEX, RGB, HSL) von Bildern oder dem Bildschirm auswählen und extrahieren können.'
    },
    {
      question: 'Wie extrahiert man eine Farbe aus einem Bild?',
      answer: 'Laden Sie Ihr Bild (PNG, JPEG, SVG) hoch, bewegen Sie die 200px Zoom-Lupe über das Motiv und klicken Sie auf einen Pixel, um die HEX-, RGB- und HSL-Werte zu kopieren.'
    },
    {
      question: 'Was ist ein kostenloser Color Picker?',
      answer: 'Eine kostenlose Web-App zum Abgreifen von Farbcodes ohne Registrierung oder Download. Unser Tool verarbeitet Bilder 100% lokal im Browser.'
    },
    {
      question: 'Was versteht man unter Farbauswahl (Color Picking)?',
      answer: 'Das Untersuchen digitaler Grafiken, um exakte numerische Farbwerte (z.B. #FF0080) für Webdesign oder Softwareentwicklung zu kopieren.'
    },
    {
      question: 'Was ist ein Farbcode?',
      answer: 'Eine standardisierte Darstellung von Farben in der Computergrafik. Bekannte Formate sind HEX (#RRGGBB), RGB (0-255) und HSL (Farbwert, Sättigung, Helligkeit).'
    },
    {
      question: 'Was sind die 7 Arten von Farben?',
      answer: 'Die 7 Regenbogenfarben sind Rot, Orange, Gelb, Grün, Blau, Indigo und Violett. In der Farbtheorie unterscheidet man Zudem Primär-, Sekundär-, Tertiär-, Warme, Kalte, Neutrale und Komplementärfarben.'
    },
    {
      question: 'Was ist ein Schriftarten-Finder (Font Finder)?',
      answer: 'Ein OCR-Designwerkzeug, das Text auf einem hochgeladenen Bild analysiert, um die exakte Schriftart und Schriftstärke zu bestimmen.'
    },
    {
      question: 'Kann Google eine Farbe identifizieren?',
      answer: 'Ja! Sie können bei Google nach Farbnamen oder Hex-Codes suchen oder Google Lens auf mobilen Geräten nutzen, um echte Objekte zu scannen.'
    },
    {
      question: 'Wie kann ich einen Farbtyp bestimmen?',
      answer: 'Indem Sie den Pixelwert mit unserem Tool abtasten. Die RGB/HSL-Werte zeigen die dominante Farbkomponente sowie Sättigung und Helligkeit an.'
    },
    {
      question: 'Wie sehe ich, welche Farbe verwendet wird?',
      answer: 'Klicken Sie auf unsere Pipette, um Bildschirm-Pixel abzugreifen, oder untersuchen Sie die CSS-Styles mit den Entwicklerwerkzeugen (F12).'
    },
    {
      question: 'Kann ich KI nutzen, um eine Farbe zu identifizieren?',
      answer: 'Ja! KI-Modelle analysieren Bildkompositionen, um automatisch dominante Farbpaletten und barrierefreie Kontraste vorzuschlagen.'
    },
    {
      question: 'Gibt es einen kostenlosen Farb-Extraktor?',
      answer: 'Ja! Unser Tool ist komplett kostenlos. Sie können unbegrenzt Farbcodes von Bildschirm-Pixeln oder Bildern (PNG, JPEG, SVG) extrahieren.'
    },
    {
      question: 'Kann ich ein Foto einer Farbe machen und diese finden?',
      answer: 'Ja! Fotografieren Sie ein Objekt, laden Sie das Bild hoch und nutzen Sie die 200px Zoom-Lupe, um den exakten Farbton als HEX-Code abzugreifen.'
    }
  ],
  pt: [
    {
      question: 'O que é uma ferramenta seletora de cores?',
      answer: 'Um seletor de cores é uma utilidade digital que permite a designers e desenvolvedores capturar e identificar códigos exatos de cor (HEX, RGB, HSL) em imagens ou telas.'
    },
    {
      question: 'Como extrair a cor de uma imagem?',
      answer: 'Faça upload da imagem (PNG, JPEG, SVG), passe a lupa de zoom de 200px sobre ela e clique no pixel desejado para extrair os códigos HEX, RGB e HSL.'
    },
    {
      question: 'O que é um seletor de cores gratuito?',
      answer: 'É uma ferramenta web sem necessidade de cadastro ou pagamento. Nossa ferramenta é 100% gratuita e processa tudo localmente no seu navegador.'
    },
    {
      question: 'O que é seleção de cor (color picking)?',
      answer: 'É o processo de inspecionar imagens ou interfaces digitais para copiar valores numéricos precisos de cor (como #FF0080) para uso em projetos.'
    },
    {
      question: 'O que é um código de cor?',
      answer: 'Uma representação padronizada de cor na computação gráfica. Formatos comuns incluem HEX (#RRGGBB), RGB (0-255) e HSL (Matiz, Saturação, Luminosidade).'
    },
    {
      question: 'Quais são os 7 tipos de cores?',
      answer: 'As 7 cores do arco-íris são Vermelho, Laranja, Amarelo, Verde, Azul, Añil e Violeta. Na teoria das cores, dividem-se em Primárias, Secundárias, Terciárias, Quentes, Frias, Neutras e Complementares.'
    },
    {
      question: 'O que é um localizador de fontes (font finder)?',
      answer: 'Uma ferramenta OCR que analisa o texto de uma foto enviada para identificar a família tipográfica e estilo exatos.'
    },
    {
      question: 'O Google pode identificar uma cor?',
      answer: 'Sim! Você pode pesquisar o nome da cor ou código hex no Google, ou usar o Google Lens no celular para escanear objetos reais.'
    },
    {
      question: 'Como identificar o tipo de uma cor?',
      answer: 'Capturando o valor do pixel com nosso extrator. Os valores RGB/HSL mostram a cor dominante, saturação e nível de luminosidade.'
    },
    {
      question: 'Como ver qual cor está sendo usada?',
      answer: 'Clique no botão de Conta-gotas de Tela para selecionar qualquer pixel da tela, ou inspecione o CSS nas Ferramentas do Desenvolvedor (F12).'
    },
    {
      question: 'Posso usar IA para identificar uma cor?',
      answer: 'Sim! Modelos de IA analisam imagens para detectar paletas dominantes e sugerir combinações acessíveis de contraste.'
    },
    {
      question: 'Existe um extrator de cores gratuito?',
      answer: 'Sim! Nosso extrator é totalmente gratuito. Você pode extrair códigos de cor de qualquer pixel da tela ou foto enviada sem limites.'
    },
    {
      question: 'Posso tirar foto de uma cor e encontrá-la?',
      answer: 'Sim! Tire uma foto com seu celular, envie para nossa ferramenta e use a lupa de 200px para marcar o pixel exato e obter o código HEX.'
    }
  ],
  ko: [
    {
      question: '컬러 피커 도구란 무엇인가요?',
      answer: '컬러 피커는 디자이너와 개발자가 이미지나 화면에서 정확한 색상 값(HEX, RGB, HSL)을 추출하고 확인 할 수 있는 웹 도구입니다.'
    },
    {
      question: '사진에서 색상을 추출하는 방법은?',
      answer: '이미지 파일(PNG, JPEG, SVG)을 업로드하고 200px 돋보기 렌즈로 확대한 후 원하는 픽셀을 클릭하여 HEX, RGB, HSL 코드를 추출하세요.'
    },
    {
      question: '무료 컬러 피커란 무엇인가요?',
      answer: '회원가입이나 설치 없이 브라우저에서 무료로 색상 코드를 추출할 수 있는 도구입니다. 100% 무료이며 로컬에서 안전하게 처리됩니다.'
    },
    {
      question: '색상 피킹이란 무엇인가요?',
      answer: '디지털 그래픽이나 UI를 검사하여 웹 디자인이나 개발에 사용할 정확한 색상 수치(#FF0080 등)를 복사하는 작업입니다.'
    },
    {
      question: '색상 코드란 무엇인가요?',
      answer: '디지털 그래픽에서 색상을 표준화하여 표현한 값입니다. 대표적으로 HEX(#RRGGBB), RGB(0-255), HSL(색상, 명도, 채도)이 있습니다.'
    },
    {
      question: '7가지 색상의 종류는 무엇인가요?',
      answer: '무지개의 7가지 색(빨강, 주황, 노랑, 초록, 파랑, 남색, 보라) 외에도 색채학에서는 1차색, 2차색, 3차색, 난색, 한색, 중성색, 보색으로 분류합니다.'
    },
    {
      question: '폰트 파인더(Font Finder)란 무엇인가요?',
      answer: '업로드된 이미지 속 텍스트를 분석하여 사용된 글꼴 이름과 스타일을 식별해 주는 OCR 디자인 도구입니다.'
    },
    {
      question: '구글이 색상을 식별할 수 있나요?',
      answer: '네! 구글 검색창에 색상 이름이나 헥사 코드를 검색하거나, 모바일 구글 렌즈로 실물을 촬영하여 일치하는 색상 코드를 찾을 수 있습니다.'
    },
    {
      question: '색상의 종류를 어떻게 식별하나요?',
      answer: '당사의 추출 도구로 픽셀 값을 측정하면, RGB/HSL 값을 통해 주요 주성분 색상과 채도/명도 수치를 확인할 수 있습니다.'
    },
    {
      question: '어떤 색상이 사용되었는지 어떻게 확인하나요?',
      answer: '화면 스포이트 버튼을 클릭하여 화면의 픽셀을 직접 선택하거나, 브라우저 개발자 도구(F12)에서 CSS 스타일을 확인하세요.'
    },
    {
      question: 'AI를 사용하여 색상을 식별할 수 있나요?',
      answer: '네! AI 비전 모델이 이미지 구도를 분석하여 주도적인 컬러 팔레트를 자동으로 감지하고 접근성 높은 대비를 추천해 줍니다.'
    },
    {
      question: '무료 색상 추출기가 있나요?',
      answer: '네! 당사 웹사이트 색상 추출기는 완전 무료입니다. 제한 없이 화면의 픽셀이나 업로드된 이미지에서 색상 코드를 추출할 수 있습니다.'
    },
    {
      question: '색상 사진을 찍어서 찾을 수 있나요?',
      answer: '네! 스마트폰으로 물체를 촬영한 후 이미지로 업로드하고 200px 돋보기로 정밀 픽셀을 지정하여 HEX 코드를 얻을 수 있습니다.'
    }
  ],
  it: [
    {
      question: "Cos'è uno strumento selettore di colori (Color Picker)?",
      answer: "Un selettore di colori è un'applicazione web che consente a designer e sviluppatori di selezionare ed estrarre codici colore esatti (HEX, RGB, HSL) da immagini o dallo schermo."
    },
    {
      question: "Come estrarre un colore da un'immagine?",
      answer: "Carica la tua immagine (PNG, JPEG, SVG), passa la lente di ingrandimento da 200px sull'immagine e fai clic su qualsiasi pixel per copiare i codici HEX, RGB e HSL."
    },
    {
      question: "Cos'è un selettore di colori gratuito?",
      answer: "È uno strumento online accessibile senza registrazione o pagamento. Il nostro strumento è gratuito al 100% ed elabora le immagini localmente nel browser."
    },
    {
      question: "Cosa si intende per selezione del colore (Color Picking)?",
      answer: "È il processo di ispezione di elementi grafici per copiare precisi valori numerici (come #FF0080) da utilizzare nel web design o nella programmazione."
    },
    {
      question: "Cos'è un codice colore?",
      answer: "Una rappresentazione standardizzata di un colore nei computer. I formati più comuni includono HEX (#RRGGBB), RGB (0-255) e HSL (Tonalità, Saturazione, Luminosità)."
    },
    {
      question: "Quali sono i 7 tipi di colori?",
      answer: "I 7 colori dell'arcobaleno sono Rosso, Arancione, Giallo, Verde, Blu, Indaco e Violetto. Nella teoria dei colori si distinguono in Primari, Secondari, Terziari, Caldi, Freddi, Neutri e Complementari."
    },
    {
      question: "Cos'è un rilevatore di font (Font Finder)?",
      answer: "Uno strumento OCR che analizza il testo presente in un'immagine caricata per identificare il carattere e lo stile esatti utilizzati."
    },
    {
      question: "Google può identificare un colore?",
      answer: "Sì! Puoi cercare un nome di colore o un codice hex su Google, oppure utilizzare Google Lens sul cellulare per scansionare oggetti reali."
    },
    {
      question: "Come posso identificare un tipo di colore?",
      answer: "Campionando il valore del pixel con il nostro strumento. I valori RGB/HSL indicano la componente dominante nonché la saturazione e la luminosità."
    },
    {
      question: "Come vedere quale colore viene utilizzato?",
      answer: "Fai clic sul pulsante Contagocce da Schermo per campionare qualsiasi pixel sullo schermo, oppure ispeziona gli stili CSS tramite gli Strumenti per Sviluppatori (F12)."
    },
    {
      question: "Posso usare l'IA per identificare un colore?",
      answer: "Sì! I modelli di visione IA analizzano le immagini per rilevare automaticamente le palette dominanti e suggerire abbinamenti cromatici accessibili."
    },
    {
      question: "Esiste un estrattore di colori gratuito?",
      answer: "Sì! Il nostro estrattore di colori è totalmente gratuito. Puoi estrarre codici colore da qualsiasi pixel dello schermo o file immagine senza limiti."
    },
    {
      question: "Posso scattare una foto a un colore e trovarlo?",
      answer: "Sì! Scatta una foto con lo smartphone, caricala sul nostro strumento e usa la lente da 200px per puntare al pixel esatto e ottenere il codice HEX."
    }
  ]
};

export function getFaqItems(lang: SupportedLang = 'en'): FaqItem[] {
  return FAQ_ITEMS_BY_LANG[lang] || FAQ_ITEMS_BY_LANG.en;
}

export const FAQ_ITEMS: FaqItem[] = FAQ_ITEMS_BY_LANG.en;
