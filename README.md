![Screenshot (270)](https://user-images.githubusercontent.com/107311665/205287871-e555e705-b992-48bb-8e91-2a8885f87cac.png)



Final assignment: React Student Dashboard
For this final assignment, you will make a "real-life" project. This will be a project of which the end result will actually be used by Winc Academy: a Student Dashboard!
Goal: to make it easy for Winc teachers to see how the students evaluate the assignments

What is the current situation: Excel, Excel, Excel.....

Design: We would like to see, per assignment, the evaluation of each student in a "Bar Chart".

Tools: Use a JavaScript framework such as React.

The data
The link below is to a spreadsheet file (in Google Docs) with a mountain of fake data (also called mock data), with fake students. These are the results of students once they have completed all assignment evaluations.
Winc Final Assignment – ​​Student Mock data
As you can see, this data has the following structure:

Name of student
Name of the assignment / project (including the project code)
Rate how much fun the assignment was
Rate how difficult the assignment was
It is up to you to model and structure the data correctly. Don't go over typing the data, it's way too much data for that.

A good way to work with data is a CSV file. You can download the data from Google Sheets as CSV. You can also work directly with the data from Google Sheets.

Use a search engine to find a smart way to work with the data. It can also be done in several ways. As an example, Node has a list of packages to process CSV.
Requirements
Your WebApplication must display the following

Dashboard Overview User-story: As a user, when I open the homepage of the application I want to see an overview in the form of a bar chart of the evaluations (fun & difficult) of all students.
As a user, I must be able to distinguish at a glance between the assignments and the fun/difficult evaluation. Make sure that a clear distinction is made visually, for example by working with clear colours. See the example with red and yellow below.

image

Separate routing per student As a user I want to see a list of the names of all students and be able to click on one of these students. When I click on a student name I am taken to the route /{name-of-student}. The bar chart adjusts with the data of only this student.
Tip: the chart remains the same on the X and Y axes, only gets "less" data, namely the data of 1 student.

Design: Create a tool that you are proud of and that you would like to show to a future employer. We pay particular attention to: legibility of the graphs.
Slicing and dicing. - Choose one of the methods below: As a user of the tool you can "slice and dice" the data in a number of ways".
Option 1: As a user, I want to be able to indicate by means of a checkbox whether I only want to show in the bar chart how nice the assignment was, only want to see how difficult the assignment was, or both.
Option 2: As a user, in addition to filtering on 1 person, I also want to be able to filter on multiple people. I, therefore, want to see a checkbox in the overview of my students that I can do
check if I want to include the data of this specific student in my chart
uncheck if I want to exclude the data of this specific student from my chart.
Option 3: As a user, I want to see a line-chart representation of my data showing the average grade for "fun" and the average grade for "difficult".
