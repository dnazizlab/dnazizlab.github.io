# Muhammad Aziz Muslim - Personal Academic Website

A modern, responsive personal academic website designed for GitHub Pages deployment. Built with elegant academic color palette and fully editable directly through GitHub.

## 🎨 Features

- **Modern UI Design** - Clean, professional academic aesthetic
- **Fully Responsive** - Works on all devices (desktop, tablet, mobile)
- **Easy to Edit** - Update content directly in GitHub without rebuilding
- **GitHub Pages Ready** - Deploy with GitHub Actions
- **No Build Process** - Static HTML/CSS/JS only
- **Elegant Color Palette** - Deep navy, burgundy, and gold accent colors

## 📁 File Structure

```
opencode_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── assets/
│   ├── images/                  # PLACE YOUR IMAGES HERE
│   │   ├── profile.jpg         # Your profile picture (REQUIRED)
│   │   ├── background.jpg      # Hero background image (optional)
│   │   ├── project1.jpg        # Project images (optional)
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   └── documents/               # PLACE YOUR DOCUMENTS HERE
│       ├── publication1.pdf    # Your publication PDFs
│       ├── publication2.pdf
│       └── publication3.pdf
├── css/
│   └── style.css               # All styling (customize colors here)
├── js/
│   └── main.js                 # Interactive features
├── index.html                  # Main website file
├── content.json                # Easy content editing (OPTIONAL)
└── README.md                   # This file
```

## 🚀 Step-by-Step Upload Instructions

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Name it: `your-username.github.io` (replace with your actual username)
5. Make it **Public**
6. Check **"Add a README file"**
7. Click **"Create repository"**

### Step 2: Upload Website Files

#### Option A: Upload via GitHub Web Interface (Recommended)

1. Go to your new repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. **Drag and drop** ALL files from `/Users/muhammadazizmuslim/opencode_website/` EXCEPT:
   - ❌ `README.md` (GitHub already created one)
   - ❌ `.git` folder (if exists)
4. Wait for upload to complete
5. Add commit message: "Initial website upload"
6. Click **"Commit changes"**

#### Option B: Upload Individual Folders

Upload in this order:
1. First upload: `.github` folder
2. Second upload: `assets` folder
3. Third upload: `css` folder
4. Fourth upload: `js` folder
5. Fifth upload: `index.html` and `content.json`

### Step 3: Add Your Personal Files

#### Add Profile Picture:
1. In your repository, go to `assets/images/`
2. Click **"Upload files"**
3. Add your profile photo named `profile.jpg`
   - Recommended size: 400x400 pixels (square)
   - Format: JPG or PNG

#### Add Background Image (Optional):
1. In `assets/images/`, upload `background.jpg`
   - Recommended size: 1920x1080 pixels
   - This will appear as a subtle overlay in the hero section

#### Add Project Images (Optional):
1. Upload `project1.jpg`, `project2.jpg`, `project3.jpg` to `assets/images/`
2. If you don't add these, the website will show placeholder icons

#### Add Publication PDFs (Optional):
1. Go to `assets/documents/`
2. Upload your publication PDFs:
   - `publication1.pdf`
   - `publication2.pdf`
   - `publication3.pdf`

### Step 4: Enable GitHub Pages

1. Go to your repository **Settings**
2. Click **"Pages"** in the left sidebar
3. Under **"Build and deployment"**:
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"** (or "master") and folder **"/ (root)"**
4. Click **"Save"**

### Step 5: Verify GitHub Actions

1. Go to **"Actions"** tab in your repository
2. You should see the deployment workflow running
3. Wait for it to complete (green checkmark)
4. Once complete, your site will be live at: `https://your-username.github.io`

## ✏️ How to Edit Content (Without Rebuilding!)

### Method 1: Edit content.json (Easiest)

1. Go to your repository
2. Click on `content.json`
3. Click the **pencil icon** (Edit)
4. Update any information:
   - Personal info (name, email, phone)
   - Education details
   - Research interests
   - Publications
   - Skills
   - Social media links
5. Scroll down and click **"Commit changes"**
6. Your website will auto-update in ~1 minute!

### Method 2: Edit index.html Directly

1. Click on `index.html`
2. Click the **pencil icon** (Edit)
3. Find and update text content directly
4. Commit changes

### Method 3: Add/Update Images & Documents

1. Navigate to the appropriate folder (`assets/images/` or `assets/documents/`)
2. Click **"Upload files"**
3. Add your new files
4. To replace: upload with the same filename
5. Commit changes

### Method 4: Embed YouTube Videos

1. Edit `index.html` or `content.json`
2. Find the video section
3. Replace the YouTube ID in the URL:
   ```
   https://www.youtube.com/embed/YOUR_VIDEO_ID
   ```

## 🎨 Customization

### Change Color Scheme

Edit `css/style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-900: #1a365d;     /* Main dark color */
    --primary-700: #2b6cb0;     /* Primary accent */
    --accent-900: #742a2a;      /* Burgundy accent */
    --accent-gold: #d69e2e;     /* Gold highlights */
}
```

### Update Social Media Links

Edit the links in `index.html` or `content.json`:
- LinkedIn
- GitHub
- Google Scholar
- ORCID
- Twitter

### Update Contact Form

The contact form uses Formspree. To make it work:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace `yourformid` in `index.html` with your actual form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 📱 Sections Included

1. **Home** - Profile picture, name, title, social links
2. **Education** - Timeline of academic background
3. **Research** - Research interests, projects, videos
4. **Publications** - List of papers with PDF downloads
5. **Skills** - Technical expertise and certifications
6. **Contact** - Contact form and information

## 🛠️ Files You MUST Upload

| File | Required? | Purpose |
|------|-----------|---------|
| `index.html` | ✅ YES | Main website |
| `css/style.css` | ✅ YES | Styling |
| `js/main.js` | ✅ YES | Interactivity |
| `assets/images/profile.jpg` | ✅ YES | Your photo |
| `.github/workflows/deploy.yml` | ✅ YES | Auto-deployment |
| `content.json` | Optional | Easy editing |
| Other images | Optional | Visual enhancement |
| Documents | Optional | Publications |

## 🛠️ Files NOT to Upload

| File/Folder | Why |
|-------------|-----|
| `.git/` | Git metadata, not needed |
| `README.md` | GitHub creates its own |
| `.DS_Store` | Mac system file |
| `node_modules/` | Not used (no build process) |

## 🔧 Troubleshooting

### Website Not Loading?
1. Check GitHub Actions for errors
2. Ensure all files uploaded successfully
3. Verify `index.html` is in the root directory

### CSS Not Working?
1. Check file path in HTML: `<link rel="stylesheet" href="css/style.css">`
2. Ensure `style.css` is in the `css/` folder

### Images Not Showing?
1. Verify image filenames match exactly (case-sensitive)
2. Check images are in `assets/images/` folder
3. Use relative paths in HTML

### GitHub Actions Failing?
1. Check workflow file syntax
2. Ensure you're using the correct branch name
3. Check repository permissions

## 📄 License

This website template is free to use for personal and academic purposes.

## 🙏 Credits

Designed for Muhammad Aziz Muslim BSc, MSc
Researcher in Plant & Animal Breeding

---

**Need Help?** Edit this README with your own contact information for future reference!
