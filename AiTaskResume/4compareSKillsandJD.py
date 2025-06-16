import re

# Map skill variants to a canonical skill name
skill_synonyms = {
    # JavaScript and variants
    "js": "javascript",
    "javascript": "javascript",

    # TypeScript
    "typescript": "typescript",

    # Python
    "python3": "python",
    "py": "python",
    "python": "python",

    # Java
    "java": "java",
    "jdk": "java",

    # C / C++
    "c": "c",
    "cpp": "c++",
    "c++": "c++",
    "csharp": "c#",
    "c#": "c#",

    # PHP
    "php": "php",

    # Ruby
    "ruby": "ruby",
    "ruby on rails": "ruby",

    # Go
    "golang": "go",
    "go": "go",

    # Kotlin
    "kotlin": "kotlin",

    # Swift
    "swift": "swift",

    # SQL / Databases
    "sql": "sql",
    "mysql": "mysql",
    "postgresql": "postgresql",
    "postgres": "postgresql",
    "sqlite": "sqlite",
    "oracle": "oracle",

    # NoSQL
    "mongodb": "mongodb",
    "mongo": "mongodb",
    "cassandra": "cassandra",
    "redis": "redis",

    # Frontend frameworks
    "react": "react",
    "reactjs": "react",
    "react.js": "react",
    "vue": "vue",
    "vuejs": "vue",
    "vue.js": "vue",
    "angular": "angular",
    "angularjs": "angular",

    "next": "next.js",
    "nextjs": "next.js",
    "next.js": "next.js",

    "nuxt": "nuxt.js",
    "nuxtjs": "nuxt.js",
    "nuxt.js": "nuxt.js",

    "svelte": "svelte",
    "sveltejs": "svelte",
    "svelte.js": "svelte",

    # Backend frameworks
    "nodejs": "node",
    "node.js": "node",
    "node": "node",
    "express": "express",
    "express.js": "express",
    "expressjs": "express",
    "django": "django",
    "flask": "flask",
    "spring": "spring",
    "springboot": "spring",

    # APIs
    "rest": "rest api",
    "restful api": "rest api",
    "rest api": "rest api",
    "graphql": "graphql",

    # Cloud platforms
    "aws": "aws",
    "amazon web services": "aws",
    "gcp": "gcp",
    "google cloud": "gcp",
    "azure": "azure",
    "firebase": "firebase",

    # AWS Services
    "s3": "aws s3",
    "ec2": "aws ec2",
    "rds": "aws rds",
    "ses": "aws ses",
    "lambda": "aws lambda",

    # Containers and DevOps
    "docker": "docker",
    "kubernetes": "kubernetes",
    "jenkins": "jenkins",
    "git": "git",
    "github": "git",
    "gitlab": "git",

    # CI/CD
    "cicd": "ci/cd",
    "ci/cd": "ci/cd",

    # Others
    "html": "html",
    "html5": "html",
    "css": "css",
    "css3": "css",
    "scss": "css",
    "sass": "css",
    "tailwind": "tailwind css",
    "tailwindcss": "tailwind css",
    "bootstrap": "bootstrap",
    "material ui": "material ui",
    "mui": "material ui",
    "json": "json",
    "xml": "xml",
    "yaml": "yaml",
    "restful": "rest api",
}


def normalize_skill(skill):
    skill = skill.lower()
    skill = re.sub(r'[^a-z0-9]', '', skill)  # remove punctuation

    # Map to canonical form if present
    return skill_synonyms.get(skill, skill)

def calculate_skill_match_percentage(resume_skills, jd_skills):
    resume_skills_set = set(normalize_skill(skill) for skill in resume_skills)
    jd_skills_set = set(normalize_skill(skill) for skill in jd_skills)

    matched_skills = resume_skills_set.intersection(jd_skills_set)

    if len(jd_skills_set) == 0:
        return 0.0, set()

    match_percentage = (len(matched_skills) / len(jd_skills_set)) * 100

    return match_percentage, matched_skills


resume =  ["React.js",
    "Nextjs",
    "JavaScript",
    "TypeScript",
    "Backend",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Redis",
    "Rest APIs",
    "Database",
    "MongoDB",
    "MySQL",
    "Cloud & Deployment",
    "AWS",
    "EC2",
    "S3",
    "RDS",
    "SES",
    "lambda",
    "Firebase",
    "Cloudinary"
  ]

job_description = ["JavaScript", "React", "AWS", "MongoDB", "Teamwork", "node.js", "next.js"]

percentage, matched = calculate_skill_match_percentage(resume, job_description)

print(f"Matched skills: {matched}")
print(f"Match percentage: {percentage:.2f}%")
