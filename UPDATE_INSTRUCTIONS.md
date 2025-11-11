# Update Your Portfolio with Latest Resume Information

## Quick Start

Your portfolio is now **fully modular and data-driven**! To update your expertise and experience from your latest resume, simply edit the JSON files in `Public/data/` directory.

## Step-by-Step Update Guide

### 1. Update Skills & Expertise

**File:** `Public/data/skills.json`

Update your technical skills with percentages:

```json
{
  "frontend": {
    "title": "Frontend developer",
    "experience": "More than 5 years",  // ← Update this
    "skills": [
      {
        "name": "JavaScript",
        "percentage": 95  // ← Update percentages based on your expertise
      },
      {
        "name": "React",
        "percentage": 90
      },
      {
        "name": "TypeScript",  // ← Add new skills
        "percentage": 85
      }
    ]
  },
  "backend": {
    "title": "Backend developer",
    "experience": "More than 3 years",  // ← Update this
    "skills": [
      {
        "name": "Java",
        "percentage": 90  // ← Update percentages
      },
      {
        "name": "Spring Boot",
        "percentage": 85
      },
      {
        "name": "Node.js",  // ← Add new skills
        "percentage": 80
      }
    ]
  }
}
```

### 2. Update Experience Stats

**File:** `Public/data/about.json`

Update your years of experience, project count, and companies:

```json
{
  "description": "Your updated professional description...",
  "stats": {
    "experience": {
      "value": 5,  // ← Update years of experience
      "label": "Years experience"
    },
    "projects": {
      "value": 10,  // ← Update number of completed projects
      "label": "Completed projects"
    },
    "companies": {
      "value": 3,  // ← Update number of companies worked
      "label": "Companies worked"
    }
  }
}
```

### 3. Update Personal Information

**File:** `Public/data/personal-info.json`

Update your title, description, and contact info:

```json
{
  "name": "Chirag Modi",
  "title": "Senior Fullstack Developer",  // ← Update your title
  "description": "Your updated professional description...",  // ← Update description
  "location": "Ahmedabad Gujarat",
  "phone": "8320360696",
  "email": "mchirag1247@gmail.com",
  "socialLinks": {
    "linkedin": "https://www.linkedin.com/in/chirag-modi-074/",
    "github": "https://github.com/Chiragmodi1247",
    "portfolio": "https://bli-prime.web.app/",
    "instagram": "https://www.instagram.com/_chi.mo_/",
    "twitter": "https://twitter.com/mchirag1247"
  }
}
```

### 4. Update Projects (Optional)

**File:** `Public/data/projects.json`

Add or update your portfolio projects:

```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Detailed description of your project...",
      "image": "assets/img/portfolio1.png",
      "link": "https://your-project-link.com"
    }
  ]
}
```

### 5. Update Services (Optional)

**File:** `Public/data/services.json`

Update service descriptions:

```json
{
  "services": [
    {
      "title": "Frontend Developer",
      "icon": "uil-arrow",
      "modal": {
        "title": "Frontend Developer",
        "items": [
          "I develop the user interface.",
          "Web page development.",
          "I create UX element interactions.",
          "I position your company brand."
        ]
      }
    }
  ]
}
```

## What Happens After You Update?

1. **Save the JSON files** with your updated information
2. **Refresh your website** - the changes will automatically load!
3. **No HTML editing needed** - everything is data-driven

## Key Benefits

✅ **Easy Updates**: Change content in JSON, no code editing  
✅ **Centralized**: All content in one place  
✅ **Version Control Friendly**: Easy to track changes  
✅ **Maintainable**: Clear structure and organization  

## Need Help?

- See `RESTRUCTURE_SUMMARY.md` for complete restructuring details
- See `RESUME_UPDATE_GUIDE.md` for more detailed instructions
- All JSON files are well-structured and easy to understand

## Important Notes

- **Skills percentages**: Use values from 0-100
- **Experience years**: Update based on your actual experience
- **Project images**: Make sure image paths are correct
- **Links**: Ensure all URLs are valid and accessible

---

**That's it!** Your portfolio will automatically reflect all changes from the JSON files. 🚀

