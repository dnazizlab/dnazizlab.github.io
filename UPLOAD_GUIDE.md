# 🚀 Complete Upload Guide - Profile + Tutorials Website

This guide covers uploading BOTH your profile website AND genomics tutorials to GitHub.

## 📁 Complete File Structure

```
opencode_website/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Profile site deployment
│       └── deploy-quarto.yml       # Tutorials deployment
├── assets/
│   ├── images/
│   │   ├── profile.jpg            # REQUIRED - Your photo
│   │   ├── background.jpg         # Optional - Hero background
│   │   └── project[1-3].jpg       # Optional - Project images
│   ├── documents/
│   │   └── publication[1-3].pdf   # Optional - Publications
│   └── videos/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── tutorials/                      # QUARTO TUTORIALS FOLDER
│   ├── _quarto.yml
│   ├── custom.scss
│   ├── index.qmd
│   ├── about.qmd
│   ├── README.md
│   └── tutorials/
│       ├── 01-intro-to-genomics.qmd
│       └── 02-r-setup.qmd
├── index.html
├── content.json
└── README.md
```

## 🎯 Step-by-Step Upload Process

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name: `your-username.github.io` (replace with your username)
4. Visibility: **Public**
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### Step 2: Upload Profile Website Files

#### Upload via Drag & Drop:

1. In your repository, click **"Add file"** → **"Upload files"**
2. Drag these items from `/Users/muhammadazizmuslim/opencode_website/`:
   - ✅ `.github` folder
   - ✅ `assets` folder
   - ✅ `css` folder
   - ✅ `js` folder
   - ✅ `index.html`
   - ✅ `content.json`
   - ✅ `tutorials` folder (entire folder!)
3. ⏳ Wait for upload to complete
4. Add commit message: `"Initial website + tutorials upload"`
5. Click **"Commit changes"**

### Step 3: Add Your Profile Picture

1. Navigate to `assets/images/` in your GitHub repository
2. Click **"Add file"** → **"Upload files"**
3. Upload your photo as `profile.jpg`
   - Recommended: 400x400 pixels (square)
   - Format: JPG or PNG
4. Commit changes

### Step 4: Enable GitHub Pages (Profile)

1. Go to **Settings** → **Pages**
2. Under **"Build and deployment"**:
   - **Source:** Deploy from a branch
   - **Branch:** main / (root)
3. Click **"Save"**

### Step 5: Verify Both Workflows

1. Go to **"Actions"** tab
2. You should see TWO workflows:
   - ✅ "Deploy to GitHub Pages" (profile)
   - ✅ "Deploy Quarto Site" (tutorials)
3. Wait for both to complete (green checkmarks)

### Step 6: Access Your Websites

- **Profile:** `https://your-username.github.io`
- **Tutorials:** `https://your-username.github.io/tutorials`

## ✏️ Adding New Tutorials (Easy!)

### Option A: Directly in GitHub (Recommended)

1. Go to `tutorials/tutorials/` folder
2. Click **"Add file"** → **"Create new file"**
3. Name: `03-gwas-analysis.qmd`
4. Write your tutorial:

```markdown
---
title: "03. GWAS Analysis"
author: "Muhammad Aziz Muslim"
date: "last-modified"
categories: [gwas, analysis]
---

## Learning Objectives

- Objective 1
- Objective 2

## Introduction

Your content here...

## Code Example

```r
library(qtl)
library(qqman)

# Load data
data <- read_csv("data.csv")

# Run GWAS
gwas_results <- scanone(data, pheno.col = 1)

# Manhattan plot
manhattan(gwas_results)
```

## Summary

Key points...
```

5. Click **"Commit changes"**
6. GitHub Actions auto-deploys in ~2 minutes!

### Option B: Update Sidebar Navigation

After adding tutorials, update the navigation:

1. Go to `tutorials/_quarto.yml`
2. Click edit (pencil icon)
3. Add to sidebar contents:

```yaml
sidebar:
  contents:
    - section: "Plant Breeding"
      contents:
        - href: tutorials/03-gwas-analysis.qmd
          text: "GWAS Analysis"
        - href: tutorials/04-genomic-selection.qmd
          text: "Genomic Selection"
```

4. Commit changes

## 🎨 Customization

### Update Your Information

Edit `content.json` to change:
- Name, email, phone
- Education details
- Research interests
- Publications
- Skills
- Social media links

### Change Color Scheme

Edit `css/style.css` - modify CSS variables:

```css
:root {
    --primary-900: #1a365d;     /* Your main color */
    --primary-700: #2b6cb0;
    --accent-900: #742a2a;      /* Accent color */
    --accent-gold: #d69e2e;     /* Gold highlights */
}
```

### Update Tutorial Styling

Edit `tutorials/custom.scss` for tutorial-specific styles.

## 📝 What You Can Edit Directly in GitHub

| File | What to Edit |
|------|--------------|
| `content.json` | Personal info, education, skills, contact |
| `index.html` | Text content, section order |
| `tutorials/tutorials/*.qmd` | Add/edit tutorials |
| `tutorials/_quarto.yml` | Tutorial navigation |
| `assets/images/` | Upload new images |
| `assets/documents/` | Upload PDFs |

## 🔧 Troubleshooting

### Profile site not loading?

1. Check GitHub Actions for errors
2. Verify `index.html` is in root directory
3. Check Settings → Pages → correct branch selected

### Tutorials showing 404?

1. Check if Quarto workflow completed successfully
2. Verify `_quarto.yml` is in `tutorials/` folder
3. Wait 2-3 minutes after deployment completes

### Code not highlighting in tutorials?

- Ensure code blocks use triple backticks with language: \`\`\`r
- Check `highlight-style: github` in `_quarto.yml`

### Images not showing?

- Use relative paths: `assets/images/profile.jpg`
- Check filenames match exactly (case-sensitive!)
- Verify images uploaded successfully

## 📊 Deployment Workflow

```
You push to GitHub
       ↓
GitHub Actions triggers
       ↓
┌──────┴──────┐
↓             ↓
Profile     Tutorials
Workflow    Workflow
↓             ↓
Builds      Renders
HTML        QMD → HTML
↓             ↓
Deploys     Deploys
↓             ↓
your-username.github.io
       ↓
  ┌────┴────┐
  ↓         ↓
 Profile  Tutorials
  Site      Site
```

## 🎓 Quick Tutorial Creation Template

Copy this for new tutorials:

```markdown
---
title: "XX. Tutorial Title"
author: "Muhammad Aziz Muslim"
date: "last-modified"
categories: [category1, category2]
---

## Learning Objectives

By the end of this tutorial, you will:

- Objective 1
- Objective 2
- Objective 3

## Introduction

Brief overview of the topic.

### :::{.callout-tip}
**Pro Tip:** Useful tips here.
:::

## Main Content

### Code Example

```r
# Load libraries
library(tidyverse)
library(rrBLUP)

# Your code here
data <- read_csv("data.csv")
head(data)
```

### Results

Explain the results.

### :::{.callout-warning}
**Important:** Warnings or caveats.
:::

## Summary

Key takeaways.

## Exercises

1. Exercise 1
2. Exercise 2

## Next Steps

What to learn next.

---

**Citation:** Muslim, M.A. (2024). Tutorial Title. *Genomics Tutorials*. https://your-username.github.io/tutorials
```

## 📦 Files Checklist

### Must Upload:
- [ ] `.github/workflows/deploy.yml`
- [ ] `.github/workflows/deploy-quarto.yml`
- [ ] `assets/` folder (with your profile.jpg)
- [ ] `css/style.css`
- [ ] `js/main.js`
- [ ] `index.html`
- [ ] `content.json`
- [ ] `tutorials/` folder (entire folder)

### Must Add Later:
- [ ] Your profile picture (`assets/images/profile.jpg`)
- [ ] Background image (optional)
- [ ] Project images (optional)
- [ ] Publication PDFs (optional)
- [ ] Your first tutorial

### Don't Upload:
- ❌ `.git/` folder
- ❌ `.DS_Store` files
- ❌ Local README (GitHub has its own)

## 🎉 Success Indicators

✅ Profile site live at `your-username.github.io`  
✅ Tutorials site live at `your-username.github.io/tutorials`  
✅ Both GitHub Actions showing green checkmarks  
✅ Profile picture displaying  
✅ Navigation working (including Tutorials link)  
✅ Code highlighting working in tutorials  
✅ Responsive on mobile devices  

## 🔗 Useful Links

- [Quarto Documentation](https://quarto.org/docs/)
- [GitHub Pages Guide](https://pages.github.com/)
- [R Markdown Tips](https://rmarkdown.rstudio.com/)
- [Your Profile Site](https://your-username.github.io)
- [Your Tutorials Site](https://your-username.github.io/tutorials)

---

**Need Help?** Check the Issues tab in your GitHub repository or contact: muhammad.aziz.muslim@email.com
