# Resume Update Guide

This guide will help you update your portfolio website with the latest information from your resume.

## Files to Update

All content data is stored in JSON files in the `Public/data/` directory. Update these files with your latest information:

### 1. Personal Information (`Public/data/personal-info.json`)
Update:
- Name
- Title/Job Title
- Description
- Location
- Phone
- Email
- Social Media Links

### 2. About Section (`Public/data/about.json`)
Update:
- Description about yourself
- Years of experience
- Number of completed projects
- Number of companies worked for

### 3. Skills (`Public/data/skills.json`)
Update:
- Frontend skills with percentages
- Backend skills with percentages
- Experience years for each category

### 4. Services (`Public/data/services.json`)
Update:
- Service titles
- Service descriptions in modal items

### 5. Projects (`Public/data/projects.json`)
Update:
- Project titles
- Project descriptions
- Project images (path)
- Project demo links

### 6. Testimonials (`Public/data/testimonials.json`)
Update:
- Testimonial content
- Names and roles
- Ratings

## Quick Update Steps

1. Open the relevant JSON file in `Public/data/`
2. Update the values with your latest information
3. Save the file
4. Refresh your website - changes will be automatically loaded

## Example: Updating Skills

```json
{
  "frontend": {
    "title": "Frontend developer",
    "experience": "More than 5 years",
    "skills": [
      {
        "name": "JavaScript",
        "percentage": 95
      },
      {
        "name": "React",
        "percentage": 90
      }
    ]
  }
}
```

## Note

The website will automatically load and populate content from these JSON files when the page loads. No need to modify HTML directly for content updates!

