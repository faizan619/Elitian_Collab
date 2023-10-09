import openpyxl

def count_students_with_score(input_file):
    workbook = openpyxl.load_workbook(input_file)
    sheet = workbook.active
    count = 0

    for row in sheet.iter_rows(min_row=2, values_only=True):
        if any(cell >= 60 for cell in row[1:]):
            count += 1

    print("Total number of students who scored more than 60 in one or more subjects:", count)

#input_file = "C:/Users/Adnan1/Downloads/TYCS/practical_exams/STQA/students.xlsx"  # Provide the correct path to your Excel file (.xlsx format)
input_file = "C:/Users/students.xlsx"
count_students_with_score(input_file)
