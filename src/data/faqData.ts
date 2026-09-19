import type { SupportedLang } from '../i18n/ui';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS_BY_LANG: Record<SupportedLang, FaqItem[]> = {
  en: [
    {
      question: 'What is a color finder?',
      answer: 'A color finder is a digital tool that helps you identify and extract exact color values from images, websites, or your screen. It provides color codes in standard formats like HEX, RGB, HSL, and more for use in design, development, and creative projects.'
    },
    {
      question: 'What color formats do these tools support?',
      answer: 'Our color tools support multiple formats including HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK, and Pantone references. You can copy any format with one click.'
    },
    {
      question: 'How do I use an eyedropper tool?',
      answer: 'Click the eyedropper button, then hover over any pixel on your screen or uploaded image. The magnified lens shows pixel-perfect detail. Click to capture the color and get its HEX, RGB, and HSL codes instantly.'
    },
    {
      question: 'How do I find the exact HEX or RGB code of a color from an image?',
      answer: 'Upload your image (PNG, JPEG, SVG, WebP) to the color extractor. Use the 200px zoom lens to magnify and click the exact pixel you want. The tool instantly displays the HEX, RGB, and HSL values.'
    },
    {
      question: 'What is the best free online tool to extract a full color palette from a photo?',
      answer: 'Our free color palette extractor analyzes your uploaded image and automatically generates a complete color palette with dominant colors, HEX/RGB codes, and downloadable palette files — no registration required.'
    },
    {
      question: 'Can i get color palette of the image i upload?',
      answer: 'Yes! Simply upload your image and our tool will automatically extract the dominant color palette, showing you the main colors with their HEX and RGB codes. You can download the palette as CSS, JSON, or image swatches.'
    },
    {
      question: 'How can I pick a color from a website?',
      answer: 'Use the Screen Eyedropper tool — click the button, then move your cursor over any website or browser tab. Click to capture the exact color under your cursor, including colors from CSS, images, videos, or canvas elements.'
    },
    {
      question: 'Is there a way to extract Pantone or CMYK colors from a digital design?',
      answer: 'Yes. Our tool provides the closest Pantone match and CMYK values for any sampled RGB/HEX color. Note that Pantone and CMYK are print standards, so on-screen colors are approximate conversions.'
    },
    {
      question: 'Why does the color extractor give me a different code than what I see on my screen?',
      answer: 'This can happen due to display color profiles, browser rendering differences, OS-level color management, or image compression. For best accuracy, use sRGB images and ensure your monitor is calibrated.'
    },
    {
      question: 'How do I use an eyedropper tool to grab a color from an external window or desktop?',
      answer: 'Activate the system eyedropper (available in supported browsers), then click anywhere on your screen — including other applications, the desktop, or external monitors. The captured color appears in your chosen format.'
    },
    {
      question: 'How do I find the dominant color of an image automatically?',
      answer: 'Upload your image to the palette extractor. It uses color quantization algorithms to automatically detect and rank the dominant colors by pixel coverage, giving you the primary color and full palette instantly.'
    }
  ],
  es: [
    {
      question: '¿Qué es un buscador de colores?',
      answer: 'Un buscador de colores es una herramienta digital que ayuda a identificar y extraer valores exactos de color de imágenes, sitios web o la pantalla. Proporciona códigos de color en formatos estándar como HEX, RGB, HSL y más para uso en diseño, desarrollo y proyectos creativos.'
    },
    {
      question: '¿Qué formatos de color admiten estas herramientas?',
      answer: 'Nuestras herramientas de color admiten múltiples formatos incluyendo HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK y referencias Pantone. Puedes copiar cualquier formato con un clic.'
    },
    {
      question: '¿Cómo uso una herramienta cuentagotas?',
      answer: 'Haz clic en el botón cuentagotas, luego pasa el cursor sobre cualquier píxel de tu pantalla o imagen subida. La lupa ampliada muestra detalles a nivel de píxel. Haz clic para capturar el color y obtener sus códigos HEX, RGB y HSL al instante.'
    },
    {
      question: '¿Cómo encuentro el código HEX o RGB exacto de un color en una imagen?',
      answer: 'Sube tu imagen (PNG, JPEG, SVG, WebP) al extractor de color. Usa la lupa de zoom 200px para ampliar y haz clic en el píxel exacto que deseas. La herramienta muestra instantáneamente los valores HEX, RGB y HSL.'
    },
    {
      question: '¿Cuál es la mejor herramienta gratuita en línea para extraer una paleta de colores completa de una foto?',
      answer: 'Nuestro extractor gratuito de paletas de color analiza tu imagen subida y genera automáticamente una paleta completa con colores dominantes, códigos HEX/RGB y archivos de paleta descargables — sin registro requerido.'
    },
    {
      question: '¿Puedo obtener la paleta de colores de la imagen que subo?',
      answer: '¡Sí! Simplemente sube tu imagen y nuestra herramienta extraerá automáticamente la paleta de colores dominantes, mostrándote los colores principales con sus códigos HEX y RGB. Puedes descargar la paleta como CSS, JSON o muestras de imagen.'
    },
    {
      question: '¿Cómo puedo elegir un color de un sitio web?',
      answer: 'Usa la herramienta Cuentagotas de Pantalla — haz clic en el botón, luego mueve el cursor sobre cualquier sitio web o pestaña del navegador. Haz clic para capturar el color exacto bajo el cursor, incluyendo colores de CSS, imágenes, videos o elementos canvas.'
    },
    {
      question: '¿Hay forma de extraer colores Pantone o CMYK de un diseño digital?',
      answer: 'Sí. Nuestra herramienta proporciona la coincidencia Pantone más cercana y valores CMYK para cualquier color RGB/HEX muestreado. Ten en cuenta que Pantone y CMYK son estándares de impresión, por lo que los colores en pantalla son conversiones aproximadas.'
    },
    {
      question: '¿Por qué el extractor de color me da un código diferente al que veo en mi pantalla?',
      answer: 'Esto puede ocurrir debido a perfiles de color de pantalla, diferencias de renderizado del navegador, gestión de color a nivel de SO o compresión de imagen. Para mejor precisión, usa imágenes sRGB y asegúrate de que tu monitor esté calibrado.'
    },
    {
      question: '¿Cómo uso una herramienta cuentagotas para tomar un color de una ventana externa o el escritorio?',
      answer: 'Activa el cuentagotas del sistema (disponible en navegadores compatibles), luego haz clic en cualquier lugar de tu pantalla — incluyendo otras aplicaciones, el escritorio o monitores externos. El color capturado aparece en el formato elegido.'
    },
    {
      question: '¿Cómo encuentro el color dominante de una imagen automáticamente?',
      answer: 'Sube tu imagen al extractor de paletas. Usa algoritmos de cuantización de color para detectar y clasificar automáticamente los colores dominantes por cobertura de píxeles, dándote el color principal y la paleta completa al instante.'
    }
  ],
  ja: [
    {
      question: 'カラーファインダーとは何ですか？',
      answer: 'カラーファインダーは、画像、ウェブサイト、画面から正確な色値を特定・抽出するデジタルツールです。HEX、RGB、HSLなどの標準形式でカラーコードを提供し、デザイン、開発、クリエイティブなプロジェクトで利用できます。'
    },
    {
      question: 'これらのツールはどのカラー形式をサポートしていますか？',
      answer: 'HEX (#RRGGBB)、RGB (rgb(r,g,b))、HSL (hsl(h,s%,l%))、HSV、CMYK、Pantone参照など複数の形式をサポートしています。ワンクリックで任意の形式をコピーできます。'
    },
    {
      question: 'スポイトツール（アイドロッパー）の使い方は？',
      answer: 'スポイトボタンをクリックし、画面上やアップロードした画像の任意のピクセルにカーソルを合わせます。拡大レンズでピクセルレベルの詳細が表示されます。クリックして色を取得すると、HEX、RGB、HSLのコードが即座に表示されます。'
    },
    {
      question: '画像から正確なHEXやRGBコードを見つけるには？',
      answer: '画像（PNG、JPEG、SVG、WebP）をカラー抽出ツールにアップロードします。200pxのズームレンズで拡大し、目的のピクセルをクリックすると、HEX、RGB、HSLの値が即座に表示されます。'
    },
    {
      question: '写真から完全なカラーパレットを抽出する最高の無料オンラインツールは？',
      answer: '無料のカラーパレット抽出ツールが、アップロードされた画像を分析し、主要な色、HEX/RGBコード、ダウンロード可能なパレットファイルを含む完全なカラーパレットを自動生成します。登録不要です。'
    },
    {
      question: 'アップロードした画像のカラーパレットを取得できますか？',
      answer: 'はい！画像をアップロードするだけで、ツールが自動的に主要なカラーパレットを抽出し、HEXとRGBコード付きで表示します。CSS、JSON、画像スウォッチとしてパレットをダウンロードできます。'
    },
    {
      question: 'ウェブサイトから色を選ぶには？',
      answer: '画面スポイトツールを使用します。ボタンをクリックし、任意のウェブサイトやブラウザタブにカーソルを移動します。クリックしてカーソル下の正確な色を取得できます。CSS、画像、動画、Canvas要素の色も取得可能です。'
    },
    {
      question: 'デジタルデザインからPantoneやCMYKの色を抽出する方法はありますか？',
      answer: 'はい。サンプリングされたRGB/HEX色に対して、最も近いPantoneマッチとCMYK値を提供します。PantoneとCMYKは印刷標準のため、画面上の色は近似変換であることに注意してください。'
    },
    {
      question: 'なぜカラー抽出ツールが画面で見える色と違うコードを出すのですか？',
      answer: 'ディスプレイのカラープロファイル、ブラウザのレンダリング差異、OSレベルのカラー管理、画像圧縮が原因で起こることがあります。最高の精度を得るには、sRGB画像を使用し、モニターをキャリブレーションしてください。'
    },
    {
      question: '外部ウィンドウやデスクトップからスポイトツールで色を取得するには？',
      answer: 'システムスポイト（対応ブラウザで利用可能）を有効にし、画面上の任意の場所をクリックします。他のアプリケーション、デスクトップ、外部モニターも含まれます。取得した色が選択した形式で表示されます。'
    },
    {
      question: '画像の主要色を自動的に見つけるには？',
      answer: '画像をパレット抽出ツールにアップロードします。色量子化アルゴリズムを使用して、ピクセルカバレッジによって主要色を自動的に検出・ランキングし、主要色と完全なパレットを即座に提供します。'
    }
  ],
  fr: [
    {
      question: "Qu'est-ce qu'un trouveur de couleurs ?",
      answer: "Un trouveur de couleurs est un outil numérique qui aide à identifier et extraire les valeurs exactes d'une couleur depuis des images, sites web ou l'écran. Il fournit les codes couleur en formats standards comme HEX, RGB, HSL et plus pour le design, le développement et les projets créatifs."
    },
    {
      question: "Quels formats de couleur ces outils prennent-ils en charge ?",
      answer: "Nos outils prennent en charge plusieurs formats dont HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK et références Pantone. Vous pouvez copier n'importe quel format en un clic."
    },
    {
      question: "Comment utiliser un outil pipette ?",
      answer: "Cliquez sur le bouton pipette, puis survolez n'importe quel pixel de votre écran ou image téléversée. La loupe grossissante montre les détails au niveau du pixel. Cliquez pour capturer la couleur et obtenir instantanément ses codes HEX, RGB et HSL."
    },
    {
      question: "Comment trouver le code HEX ou RGB exact d'une couleur sur une image ?",
      answer: "Téléversez votre image (PNG, JPEG, SVG, WebP) dans l'extracteur de couleur. Utilisez la loupe zoom 200px pour agrandir et cliquez sur le pixel exact souhaité. L'outil affiche instantanément les valeurs HEX, RGB et HSL."
    },
    {
      question: "Quel est le meilleur outil gratuit en ligne pour extraire une palette de couleurs complète d'une photo ?",
      answer: "Notre extracteur gratuit de palette de couleurs analyse votre image téléversée et génère automatiquement une palette complète avec les couleurs dominantes, codes HEX/RGB et fichiers de palette téléchargeables — sans inscription requise."
    },
    {
      question: "Puis-je obtenir la palette de couleurs de l'image que je téléverse ?",
      answer: "Oui ! Téléversez simplement votre image et notre outil extraira automatiquement la palette de couleurs dominantes, vous montrant les couleurs principales avec leurs codes HEX et RGB. Vous pouvez télécharger la palette en CSS, JSON ou échantillons d'image."
    },
    {
      question: "Comment puis-je choisir une couleur sur un site web ?",
      answer: "Utilisez l'outil Pipette d'écran — cliquez sur le bouton, puis déplacez votre curseur sur n'importe quel site web ou onglet de navigateur. Cliquez pour capturer la couleur exacte sous votre curseur, y compris les couleurs du CSS, images, vidéos ou éléments canvas."
    },
    {
      question: "Existe-t-il un moyen d'extraire les couleurs Pantone ou CMYK d'un design numérique ?",
      answer: "Oui. Notre outil fournit la correspondance Pantone la plus proche et les valeurs CMYK pour toute couleur RGB/HEX échantillonnée. Notez que Pantone et CMYK sont des standards d'impression, donc les couleurs à l'écran sont des conversions approximatives."
    },
    {
      question: "Pourquoi l'extracteur de couleur me donne-t-il un code différent de ce que je vois sur mon écran ?",
      answer: "Cela peut arriver à cause des profils de couleur d'affichage, différences de rendu du navigateur, gestion des couleurs au niveau OS, ou compression d'image. Pour une meilleure précision, utilisez des images sRGB et assurez-vous que votre moniteur est calibré."
    },
    {
      question: "Comment utiliser un outil pipette pour prendre une couleur d'une fenêtre externe ou du bureau ?",
      answer: "Activez la pipette système (disponible dans les navigateurs compatibles), puis cliquez n'importe où sur votre écran — y compris d'autres applications, le bureau, ou moniteurs externes. La couleur capturée apparaît dans le format choisi."
    },
    {
      question: "Comment trouver la couleur dominante d'une image automatiquement ?",
      answer: "Téléversez votre image dans l'extracteur de palette. Il utilise des algorithmes de quantification de couleur pour détecter et classer automatiquement les couleurs dominantes par couverture de pixels, vous donnant la couleur principale et la palette complète instantanément."
    }
  ],
  de: [
    {
      question: 'Was ist ein Farb-Finder?',
      answer: 'Ein Farb-Finder ist ein digitales Werkzeug, das hilft, exakte Farbwerte von Bildern, Websites oder dem Bildschirm zu identifizieren und zu extrahieren. Er liefert Farbcodes in Standardformaten wie HEX, RGB, HSL und mehr für Design, Entwicklung und kreative Projekte.'
    },
    {
      question: 'Welche Farbformate unterstützen diese Tools?',
      answer: 'Unsere Farbtools unterstützen mehrere Formate einschließlich HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK und Pantone-Referenzen. Jedes Format lässt sich mit einem Klick kopieren.'
    },
    {
      question: 'Wie benutze ich ein Pipetten-Tool (Eyedropper)?',
      answer: 'Klicken Sie auf den Pipetten-Button, fahren Sie dann mit der Maus über ein beliebiges Pixel auf Ihrem Bildschirm oder einem hochgeladenen Bild. Die 200px-Zoom-Lupe zeigt Pixel-genaue Details. Klicken Sie, um die Farbe zu erfassen und sofort ihre HEX-, RGB- und HSL-Codes zu erhalten.'
    },
    {
      question: 'Wie finde ich den exakten HEX- oder RGB-Code einer Farbe aus einem Bild?',
      answer: 'Laden Sie Ihr Bild (PNG, JPEG, SVG, WebP) in den Farbextraktor hoch. Nutzen Sie die 200px-Zoom-Lupe zur Vergrößerung und klicken Sie auf den gewünschten Pixel. Das Tool zeigt sofort die HEX-, RGB- und HSL-Werte an.'
    },
    {
      question: 'Was ist das beste kostenlose Online-Tool, um eine vollständige Farbpalette aus einem Foto zu extrahieren?',
      answer: 'Unser kostenloser Farbpalette-Extraktor analysiert Ihr hochgeladenes Bild und generiert automatisch eine vollständige Palette mit dominanten Farben, HEX/RGB-Codes und herunterladbaren Palette-Dateien — keine Registrierung erforderlich.'
    },
    {
      question: 'Kann ich die Farbpalette des hochgeladenen Bildes erhalten?',
      answer: 'Ja! Laden Sie einfach Ihr Bild hoch und unser Tool extrahiert automatisch die dominante Farbpalette, zeigt Ihnen die Hauptfarben mit ihren HEX- und RGB-Codes. Sie können die Palette als CSS, JSON oder Bild-Swatches herunterladen.'
    },
    {
      question: 'Wie kann ich eine Farbe von einer Website auswählen?',
      answer: 'Nutzen Sie den Bildschirm-Pipetten-Tool — klicken Sie auf den Button, bewegen Sie den Cursor über beliebige Websites oder Browser-Tabs. Klicken Sie, um die exakte Farbe unter dem Cursor zu erfassen, einschließlich Farben aus CSS, Bildern, Videos oder Canvas-Elementen.'
    },
    {
      question: 'Gibt es einen Weg, Pantone- oder CMYK-Farben aus einem digitalen Design zu extrahieren?',
      answer: 'Ja. Unser Tool liefert die nächste Pantone-Übereinstimmung und CMYK-Werte für jede abgetastete RGB/HEX-Farbe. Beachten Sie, dass Pantone und CMYK Druckstandards sind, sodass Bildschirmfarben nur annähernde Umrechnungen sind.'
    },
    {
      question: 'Warum gibt mir der Farbextraktor einen anderen Code als das, was ich auf meinem Bildschirm sehe?',
      answer: 'Dies kann an Display-Farbprofilen, Browser-Rendering-Unterschieden, OS-Farbmanagement oder Bildkompression liegen. Für beste Genauigkeit nutzen Sie sRGB-Bilder und stellen sicher, dass Ihr Monitor kalibriert ist.'
    },
    {
      question: 'Wie nutze ich ein Pipetten-Tool, um eine Farbe aus einem externen Fenster oder dem Desktop zu greifen?',
      answer: 'Aktivieren Sie die System-Pipette (in unterstützten Browsern verfügbar), klicken Sie dann irgendwo auf Ihrem Bildschirm — einschließlich anderer Anwendungen, dem Desktop oder externen Monitoren. Die erfasste Farbe erscheint im gewählten Format.'
    },
    {
      question: 'Wie finde ich die dominierende Farbe eines Bildes automatisch?',
      answer: 'Laden Sie Ihr Bild in den Palette-Extraktor hoch. Er nutzt Farbquantisierungs-Algorithmen, um dominante Farben nach Pixelabdeckung automatisch zu erkennen und zu bewerten, und liefert Ihnen die Primärfarbe und vollständige Palette sofort.'
    }
  ],
  pt: [
    {
      question: 'O que é um localizador de cores?',
      answer: 'Um localizador de cores é uma ferramenta digital que ajuda a identificar e extrair valores exatos de cor de imagens, sites ou da tela. Fornece códigos de cor em formatos padrão como HEX, RGB, HSL e mais para uso em design, desenvolvimento e projetos criativos.'
    },
    {
      question: 'Quais formatos de cor estas ferramentas suportam?',
      answer: 'Nossas ferramentas de cor suportam múltiplos formatos incluindo HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK e referências Pantone. Você pode copiar qualquer formato com um clique.'
    },
    {
      question: 'Como uso uma ferramenta conta-gotas?',
      answer: 'Clique no botão conta-gotas, depois passe o cursor sobre qualquer pixel da sua tela ou imagem enviada. A lupa ampliada mostra detalhes no nível do pixel. Clique para capturar a cor e obter seus códigos HEX, RGB e HSL instantaneamente.'
    },
    {
      question: 'Como encontro o código HEX ou RGB exato de uma cor de uma imagem?',
      answer: 'Faça upload da sua imagem (PNG, JPEG, SVG, WebP) para o extrator de cor. Use a lupa de zoom 200px para ampliar e clique no pixel exato desejado. A ferramenta exibe instantaneamente os valores HEX, RGB e HSL.'
    },
    {
      question: 'Qual é a melhor ferramenta gratuita online para extrair uma paleta de cores completa de uma foto?',
      answer: 'Nosso extrator gratuito de paleta de cores analisa sua imagem enviada e gera automaticamente uma paleta completa com cores dominantes, códigos HEX/RGB e arquivos de paleta para download — sem necessidade de cadastro.'
    },
    {
      question: 'Posso obter a paleta de cores da imagem que envio?',
      answer: 'Sim! Basta enviar sua imagem e nossa ferramenta extrairá automaticamente a paleta de cores dominantes, mostrando as cores principais com seus códigos HEX e RGB. Você pode baixar a paleta como CSS, JSON ou amostras de imagem.'
    },
    {
      question: 'Como posso escolher uma cor de um site?',
      answer: 'Use a ferramenta Conta-gotas de Tela — clique no botão, depois mova o cursor sobre qualquer site ou aba do navegador. Clique para capturar a cor exata sob o cursor, incluindo cores de CSS, imagens, vídeos ou elementos canvas.'
    },
    {
      question: 'Existe uma maneira de extrair cores Pantone ou CMYK de um design digital?',
      answer: 'Sim. Nossa ferramenta fornece a correspondência Pantone mais próxima e valores CMYK para qualquer cor RGB/HEX amostrada. Note que Pantone e CMYK são padrões de impressão, então cores na tela são conversões aproximadas.'
    },
    {
      question: 'Por que o extrator de cor me dá um código diferente do que vejo na minha tela?',
      answer: 'Isso pode acontecer devido a perfis de cor do display, diferenças de renderização do navegador, gerenciamento de cor no nível do SO ou compressão de imagem. Para melhor precisão, use imagens sRGB e certifique-se de que seu monitor está calibrado.'
    },
    {
      question: 'Como uso uma ferramenta conta-gotas para pegar uma cor de uma janela externa ou da área de trabalho?',
      answer: 'Ative o conta-gotas do sistema (disponível em navegadores compatíveis), depois clique em qualquer lugar da sua tela — incluindo outros aplicativos, a área de trabalho ou monitores externos. A cor capturada aparece no formato escolhido.'
    },
    {
      question: 'Como encontro a cor dominante de uma imagem automaticamente?',
      answer: 'Envie sua imagem para o extrator de paleta. Ele usa algoritmos de quantização de cor para detectar e classificar automaticamente as cores dominantes por cobertura de pixels, dando a cor principal e a paleta completa instantaneamente.'
    }
  ],
  ko: [
    {
      question: '컬러 파인더(Color Finder)란 무엇인가요?',
      answer: '컬러 파인더는 이미지, 웹사이트, 화면에서 정확한 색상 값을 식별하고 추출하는 디지털 도구입니다. HEX, RGB, HSL 등 표준 형식으로 색상 코드를 제공하여 디자인, 개발, 크리에이티브 프로젝트에서 활용할 수 있습니다.'
    },
    {
      question: '이 도구들은 어떤 색상 형식을 지원하나요?',
      answer: 'HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK, Pantone 참조 등 다양한 형식을 지원합니다. 원하는 형식을 원클릭으로 복사할 수 있습니다.'
    },
    {
      question: '스포이트(아이드롭퍼) 도구는 어떻게 사용하나요?',
      answer: '스포이트 버튼을 클릭한 후 화면이나 업로드된 이미지의 아무 픽셀 위에 커서를 올리세요. 200px 확대 렌즈가 픽셀 단위 디테일을 보여줍니다. 클릭하면 색상이 캡처되어 HEX, RGB, HSL 코드가 즉시 표시됩니다.'
    },
    {
      question: '이미지에서 정확한 HEX 또는 RGB 코드를 어떻게 찾나요?',
      answer: '이미지(PNG, JPEG, SVG, WebP)를 색상 추출기에 업로드하세요. 200px 줌 렌즈로 확대하여 원하는 정확한 픽셀을 클릭하면 도구가 즉시 HEX, RGB, HSL 값을 보여줍니다.'
    },
    {
      question: '사진에서 전체 색상 팔레트를 추출하는 최고의 무료 온라인 도구는 무엇인가요?',
      answer: '무료 색상 팔레트 추출기가 업로드된 이미지를 분석하여 주요 색상, HEX/RGB 코드, 다운로드 가능한 팔레트 파일이 포함된 완전한 팔레트를 자동 생성합니다. 회원가입 불필요.'
    },
    {
      question: '내가 업로드한 이미지의 색상 팔레트를 얻을 수 있나요?',
      answer: '네! 이미지를 업로드하면 도구가 자동으로 주요 색상 팔레트를 추출하여 HEX와 RGB 코드와 함께 표시합니다. CSS, JSON, 이미지 스와치 형태로 팔레트를 다운로드할 수 있습니다.'
    },
    {
      question: '웹사이트에서 색상을 선택하려면 어떻게 하나요?',
      answer: '화면 스포이트 도구를 사용하세요. 버튼을 클릭한 후 아무 웹사이트나 브라우저 탭 위로 커서를 이동하세요. 클릭하여 커서 아래의 정확한 색상을 캡처할 수 있습니다. CSS, 이미지, 비디오, 캔버스 요소의 색상도 가능합니다.'
    },
    {
      question: '디지털 디자인에서 Pantone 또는 CMYK 색상을 추출할 방법이 있나요?',
      answer: '있습니다. 샘플링된 RGB/HEX 색상에 대해 가장 가까운 Pantone 매치와 CMYK 값을 제공합니다. 단, Pantone과 CMYK는 인쇄 표준이므로 화면 색상은 근사 변환값임을 유의하세요.'
    },
    {
      question: '왜 색상 추출기가 화면에서 보는 것과 다른 코드를 주나요?',
      answer: '디스플레이 색상 프로필, 브라우저 렌더링 차이, OS 수준 색상 관리, 이미지 압축 때문일 수 있습니다. 최적의 정확도를 위해 sRGB 이미지를 사용하고 모니터를 캘리브레이션하세요.'
    },
    {
      question: '외부 창이나 데스크톱에서 스포이트 도구로 색상을 가져오려면 어떻게 하나요?',
      answer: '시스템 스포이트(지원 브라우저에서 사용 가능)를 활성화한 후 화면 아무 곳이나 클릭하세요. 다른 애플리케이션, 바탕화면, 외부 모니터도 포함됩니다. 캡처된 색상이 선택한 형식으로 나타납니다.'
    },
    {
      question: '이미지의 주요 색상을 자동으로 찾으려면 어떻게 하나요?',
      answer: '이미지를 팔레트 추출기에 업로드하세요. 색상 양자화 알고리즘으로 픽셀 커버리지 기준으로 주요 색상을 자동 감지하고 순위를 매겨, 기본 색상과 전체 팔레트를 즉시 제공합니다.'
    }
  ],
  it: [
    {
      question: "Cos'è un cercatore di colori (Color Finder)?",
      answer: "Un cercatore di colori è uno strumento digitale che aiuta a identificare ed estrarre valori esatti di colore da immagini, siti web o dallo schermo. Fornisce codici colore in formati standard come HEX, RGB, HSL e altri per uso in design, sviluppo e progetti creativi."
    },
    {
      question: "Quali formati di colore supportano questi strumenti?",
      answer: "I nostri strumenti supportano diversi formati tra cui HEX (#RRGGBB), RGB (rgb(r,g,b)), HSL (hsl(h,s%,l%)), HSV, CMYK e riferimenti Pantone. Puoi copiare qualsiasi formato con un clic."
    },
    {
      question: "Come si usa uno strumento contagocce (Eyedropper)?",
      answer: "Clicca sul pulsante contagocce, poi passa il cursore su qualsiasi pixel del tuo schermo o immagine caricata. La lente d'ingrandimento 200px mostra i dettagli a livello di pixel. Clicca per catturare il colore e ottenere istantaneamente i codici HEX, RGB e HSL."
    },
    {
      question: "Come trovo il codice HEX o RGB esatto di un colore da un'immagine?",
      answer: "Carica la tua immagine (PNG, JPEG, SVG, WebP) nell'estrattore di colore. Usa la lente zoom 200px per ingrandire e clicca sul pixel esatto desiderato. Lo strumento mostra immediatamente i valori HEX, RGB e HSL."
    },
    {
      question: "Qual è il miglior strumento gratuito online per estrarre una palette completa di colori da una foto?",
      answer: "Il nostro estrattore gratuito di palette colori analizza la tua immagine caricata e genera automaticamente una palette completa con colori dominanti, codici HEX/RGB e file palette scaricabili — nessuna registrazione richiesta."
    },
    {
      question: "Posso ottenere la palette di colori dell'immagine che carico?",
      answer: "Sì! Carica semplicemente la tua immagine e il nostro strumento estrarrà automaticamente la palette di colori dominanti, mostrandoti i colori principali con i loro codici HEX e RGB. Puoi scaricare la palette come CSS, JSON o campioni immagine."
    },
    {
      question: "Come posso scegliere un colore da un sito web?",
      answer: "Usa lo strumento Contagocce da Schermo — clicca il pulsante, poi sposta il cursore su qualsiasi sito web o scheda del browser. Clicca per catturare il colore esatto sotto il cursore, inclusi colori da CSS, immagini, video o elementi canvas."
    },
    {
      question: "Esiste un modo per estrarre colori Pantone o CMYK da un design digitale?",
      answer: "Sì. Il nostro strumento fornisce la corrispondenza Pantone più vicina e i valori CMYK per qualsiasi colore RGB/HEX campionato. Nota che Pantone e CMYK sono standard di stampa, quindi i colori a schermo sono conversioni approssimative."
    },
    {
      question: "Perché l'estrattore di colore mi dà un codice diverso da quello che vedo sul mio schermo?",
      answer: "Può accadere per profili colore del display, differenze di rendering del browser, gestione colore a livello OS o compressione dell'immagine. Per massima precisione, usa immagini sRGB e assicurati che il monitor sia calibrato."
    },
    {
      question: "Come uso uno strumento contagocce per prendere un colore da una finestra esterna o dal desktop?",
      answer: "Attiva il contagocce di sistema (disponibile nei browser supportati), poi clicca ovunque sul tuo schermo — incluse altre applicazioni, il desktop o monitor esterni. Il colore catturato appare nel formato scelto."
    },
    {
      question: "Come trovo automaticamente il colore dominante di un'immagine?",
      answer: "Carica la tua immagine nell'estrattore di palette. Usa algoritmi di quantizzazione del colore per rilevare e classificare automaticamente i colori dominanti per copertura pixel, dandoti il colore primario e la palette completa all'istante."
    }
  ]
};

export function getFaqItems(lang: SupportedLang = 'en'): FaqItem[] {
  return FAQ_ITEMS_BY_LANG[lang] || FAQ_ITEMS_BY_LANG.en;
}

export const FAQ_ITEMS: FaqItem[] = FAQ_ITEMS_BY_LANG.en;
