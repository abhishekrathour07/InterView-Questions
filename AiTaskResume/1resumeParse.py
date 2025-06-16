import pdfplumber

def extract_text_from_pdf(path):
    text = ""
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            text += page.extract_text()
    return text

resume_text = extract_text_from_pdf( 'd:/MyCodes/InterView Questions/AiTaskResume/Abhishek Singh Resume.pdf')
print(resume_text)

