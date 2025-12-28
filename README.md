# Birthday Treasure Hunt 🎂🎉

A modern, interactive treasure hunt game for birthdays. Solve riddles to find hidden treasures!

## Features

- 🎨 Modern, beautiful UI
- 📱 Mobile-responsive design
- 🎯 5 challenging riddles
- 🎊 Celebration ending animation
- ✅ Input validation
- 🧪 Test coverage

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Deployment

### GitHub Pages (Automatic)

The project includes a GitHub Actions workflow for automatic deployment:

1. Create a new repository on GitHub
2. Push your code to the `main` or `master` branch
3. Go to repository Settings → Pages
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically build and deploy on every push

The site will be available at: `https://[your-username].github.io/[repository-name]/`

### Manual Deployment

The project is static and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply build the project and deploy the `dist` folder:

```bash
npm run build
# Deploy the contents of the dist/ folder
```


