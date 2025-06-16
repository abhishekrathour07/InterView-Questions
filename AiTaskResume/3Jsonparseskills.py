import pdfplumber
import re
import json

# Step 1: Extract text from PDF
def extract_text_from_pdf(path):
    text = ""
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text

# Step 2: Extract skills section only
def extract_skills_section(text):
    lines = text.splitlines()
    skills_section = []
    capture = False

    for line in lines:
        line_lower = line.lower()

        # Start capturing when skills section heading found
        if 'skills' in line_lower or 'technical skills' in line_lower:
            capture = True
            continue

        # Stop capturing when another section heading appears
        if capture and any(keyword in line_lower for keyword in [
            'experience', 'education', 'projects', 'certifications', 'summary', 'objective', 'contact'
        ]):
            break

        if capture:
            skills_section.append(line.strip())

    return "\n".join(skills_section).strip()

# Step 3: Clean skill items and make a list (improved)
def get_skill_keywords(text):
    # Remove bullets and unwanted characters
    text = re.sub(r"[-•]", "", text)
    
    # Split based on multiple delimiters: comma, pipe, parentheses, dash
    parts = re.split(r"[,\|\(\)\-\:\n]", text)
    
    # Strip whitespace and remove empty strings
    skills = [skill.strip() for skill in parts if skill.strip()]
    return skills

# Step 4: Convert to JSON format
def skills_to_json(skills_list):
    data = {
        "skills": skills_list
    }
    return json.dumps(data, indent=2)

if __name__ == "__main__":
    # Path to your resume PDF file
    pdf_path ="D:\MyCodes\InterView Questions\AiTaskResume\Gautam_CV.pdf"

    # Extract whole text from PDF
    resume_text = extract_text_from_pdf(pdf_path)

    # Extract skills section text only
    skills_raw = extract_skills_section(resume_text)

    # Convert raw skill text to clean list
    skills_list = get_skill_keywords(skills_raw)

    # Convert skills list to JSON formatted string
    skills_json = skills_to_json(skills_list)

    print(skills_json)
