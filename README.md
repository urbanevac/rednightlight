# 🔴 Red Light Flashlight

A web-based red light flashlight app designed to preserve night vision while providing illumination. Perfect for astronomy, night photography, military operations, or any situation where you need to see in the dark without ruining your night adaptation.


## ✨ Features

- **Red Light Mode**: Preserves night vision while providing illumination
- **Adjustable Brightness**: Fine-tune the light intensity with an intuitive slider
- **Fullscreen Mode**: Maximize your device's screen for maximum illumination
- **Auto-hiding Controls**: Interface disappears after 3 seconds of inactivity
- **Screen Wake Lock**: Prevents your device from sleeping while the light is on (where supported)
- **Offline Support**: Works without an internet connection after initial load
- **PWA Support**: Install on your home screen for quick access
- **Responsive Design**: Works on all devices and screen sizes

## 🔍 Why Red Light?

Red light preserves night vision because it doesn't trigger the same photoreceptors in your eyes that are responsible for night vision. This makes it ideal for:

- Astronomy observations
- Reading maps or documents in the dark
- Military operations
- Night photography
- Navigating at night without disrupting your night vision

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/urbanevac/rednightlight/
cd rednightlight
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## 📱 Usage

1. **Turn On/Off**: Tap the power button in the center to toggle the red light
2. **Adjust Brightness**: Use the slider or +/- buttons to change brightness
3. **Show/Hide Controls**: Tap anywhere on the screen to show controls if they're hidden
4. **View Credits**: Tap the info (ⓘ) button to see app information


## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide React](https://lucide.dev/) - Icon library
- [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API) - Prevents screen from sleeping


## 🔧 Browser Compatibility

The app works best on:

- Chrome for Android
- Safari for iOS
- Modern desktop browsers (Chrome, Firefox, Edge, Safari)


**Note**: The Wake Lock API is not supported in all browsers. The app will still function, but your screen may time out based on your device settings.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Designed in the UK by [morituri.co](https://morituri.co)
- Inspired by the needs of amateur astronomers and night photographers


---
