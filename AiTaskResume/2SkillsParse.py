import pdfplumber
import re

def extract_text_from_pdf(path):
    text = ""
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

def extract_skills_section(text):
    lines = text.splitlines()
    skills_section = []
    capture = False

    for line in lines:
        line_lower = line.lower()

        # Start capturing after hitting skills heading
        if 'skills' in line_lower or 'technical skills' in line_lower:
            capture = True
            continue

        # Stop capturing when new section starts
        if capture and (
            any(keyword in line_lower for keyword in [
                'experience', 'education', 'projects', 'certifications', 'summary'
            ])
        ):
            break

        if capture:
            skills_section.append(line.strip())

    return "\n".join(skills_section).strip()

# Path to your resume
resume_text = extract_text_from_pdf("d:/MyCodes/InterView Questions/AiTaskResume/Abhishek Singh Resume.pdf")
skills = extract_skills_section(resume_text)

print("Extracted Skills Section:")
print(skills)
