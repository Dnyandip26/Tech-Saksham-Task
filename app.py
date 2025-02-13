student = {}  # Dictionary to store student data
student_ids = []  # List to store student IDs

while True:
    print("\n1. Add student record")
    print("2. View students record")
    print("3. Search student record")
    print("4. Update student record")
    print("5. Delete student record")
    print("6. EXIT")
    
    choice = int(input("Enter your choice: "))
    
    if choice == 1:
        name = input("Enter student name: ")
        student_id = int(input("Enter student ID: "))
        age = int(input("Enter student age: "))
        grade = input("Enter student grade: ")
        
        if student_id in student:
            print("Student ID already exists!")
        else:
            student_ids.append(student_id)
            student[student_id] = {"Name": name, "Age": age, "Grade": grade}
            print("Student added successfully.")
    
    elif choice == 2:
        if not student:
            print("No student records found.")
        else:
            print("\nStudent ID\tName\tAge\tGrade")
            for student_id in student_ids:
                student_data = student[student_id]
                print(f"{student_id}\t{student_data['Name']}\t{student_data['Age']}\t{student_data['Grade']}")
    
    elif choice == 3:
        search_id = int(input("Enter student ID to search: "))
        if search_id in student:
            student_data = student[search_id]
            print(f"\nStudent ID: {search_id}\nName: {student_data['Name']}\nAge: {student_data['Age']}\nGrade: {student_data['Grade']}")
        else:
            print("Student not found.")
    
    elif choice == 4:
        update_id = int(input("Enter student ID to update: "))
        if update_id in student:
            print("\nCurrent details:")
            print(f"Name: {student[update_id]['Name']}\nAge: {student[update_id]['Age']}\nGrade: {student[update_id]['Grade']}")
            
            name = input("Enter new name: ")
            age = int(input("Enter new age: "))
            grade = input("Enter new grade: ")
            
            student[update_id] = {"Name": name, "Age": age, "Grade": grade}
            print("Student record updated successfully.")
        else:
            print("Student not found.")
    
    elif choice == 5:
        delete_id = int(input("Enter the ID of the student to delete: "))
        if delete_id in student:
            del student[delete_id]
            student_ids.remove(delete_id)
            print("Student record deleted successfully.")
        else:
            print("Student not found.")
    
    elif choice == 6:
        print("Exiting...")
        break
    else:
        print("Invalid choice. Please try again.")
