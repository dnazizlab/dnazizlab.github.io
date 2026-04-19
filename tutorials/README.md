# Genomics Tutorials README

This directory contains the Quarto website for genomics tutorials.

## Structure

```
tutorials/
├── _quarto.yml           # Quarto configuration
├── custom.scss           # Custom styling
├── index.qmd             # Tutorials homepage
├── about.qmd             # About page
└── tutorials/            # Tutorial files
    ├── 01-intro-to-genomics.qmd
    ├── 02-r-setup.qmd
    ├── 03-gwas-analysis.qmd (to be added)
    └── ...
```

## How to Add New Tutorials

### Method 1: Directly in GitHub (Easiest)

1. Go to `tutorials/tutorials/` folder in your repository
2. Click "Add file" → "Create new file"
3. Name it: `XX-tutorial-title.qmd` (XX = number)
4. Write your tutorial using the template below
5. Commit changes
6. GitHub Actions will auto-deploy!

### Method 2: Local Development (Recommended for Long Tutorials)

1. Install Quarto: https://quarto.org/docs/get-started/
2. Clone your repository locally
3. Create/edit `.qmd` files in `tutorials/tutorials/`
4. Preview locally:
   ```bash
   cd tutorials
   quarto preview
   ```
5. Commit and push changes

## Tutorial Template

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

Brief introduction to the topic.

### :::{.callout-note}
**Key Concept:** Important information here.
:::

## Main Content

### Code Example

```r
# Your R code here
library(tidyverse)
data <- read_csv("data.csv")
```

### Results

Show and explain results.

### :::{.callout-warning}
**Important:** Warnings or caveats here.
:::

## Summary

Key takeaways.

## Next Steps

What to do next.

## Exercises

Practice problems.

---

**Citation:** Muslim, M.A. (2024). Tutorial Title. *Genomics Tutorials*. https://your-username.github.io/tutorials
```

## Code Chunk Options

```r
```{r chunk-name, echo=TRUE, eval=TRUE, warning=FALSE, message=FALSE}
# Code here
```
```

Common options:
- `echo=TRUE` - Show code
- `eval=FALSE` - Don't run code (just display)
- `warning=FALSE` - Hide warnings
- `message=FALSE` - Hide messages
- `fig.width=8, fig.height=6` - Figure dimensions

## Updating the Sidebar

Edit `_quarto.yml` to add new tutorials to the navigation:

```yaml
sidebar:
  contents:
    - section: "Your Section"
      contents:
        - href: tutorials/XX-your-tutorial.qmd
          text: "Your Tutorial Title"
```

## Deployment

Tutorials auto-deploy when you:
1. Push changes to the `main` branch
2. GitHub Actions runs the Quarto workflow
3. Site updates at `your-username.github.io/tutorials`

## Tips

1. **Use callouts** for tips, warnings, and notes
2. **Include real data** examples when possible
3. **Add exercises** for practice
4. **Link between tutorials** for related topics
5. **Use version control** - commit often

## Troubleshooting

### Render fails in GitHub Actions?
- Check R package dependencies in workflow file
- Ensure all packages are in the install list

### Links not working?
- Use relative paths: `tutorials/01-intro.qmd`
- Check file names match exactly (case-sensitive)

### Figures not showing?
- Make sure code chunks have `fig.cap` for captions
- Check figure paths are relative

## Resources

- [Quarto Documentation](https://quarto.org/docs/)
- [Quarto for R Users](https://quarto.org/docs/computations/r.html)
- [R Markdown Cookbook](https://bookdown.org/yihui/rmarkdown-cookbook/)
