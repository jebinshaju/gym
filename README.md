

# Workout Planner

A comprehensive web-based workout and food planner designed to help users manage their workout routines and track food macros. This project offers customizable workout splits, persistent data storage via localStorage, interactive modals for editing exercise details, and a dedicated history page to review completed workouts.

## Features

- **Multiple Workout Splits**:  
  Choose between various workout splits:
  - **Default Split**: 7-day schedule with 6 workout days and 1 rest day.
  - **One Muscle per Day**: 6-day routine focusing on one muscle group per day.
  - **Full Body Workout**: 3-day schedule with full-body routines.
  - **Push/Pull Split**: 4-day split separating push and pull exercises.

- **Customizable Routines**:  
  Users can edit video URLs for each exercise and add new exercises to any section. Changes are saved and persist on reload using the browser’s localStorage.

- **Workout History**:  
  Every completed exercise is recorded with a timestamp. A history page allows users to view past workout records and clear the history if desired.

- **Responsive & Dark Mode Design**:  
  The user interface is designed with a dark theme in mind and is mobile-friendly.

- **Food Macros**:  
  A dedicated page displays nutritional information (macros) for popular Kerala cuisines like rice, kappa, chakka, puttu, and various curries.

## Installation & Usage

1. **Clone or Download the Repository**  
   Clone this repository or download the ZIP file and extract it.

2. **File Structure**  
   The project consists of three main files:
   - `index.html`: The main HTML file.
   - `styles.css`: The CSS file for styling the app.
   - `script.js`: The JavaScript file containing all functionality.

3. **Run the App**  
   Open the `index.html` file in your preferred modern browser. No server is required—everything runs client-side.

4. **Customize Your Routine**  
   - Use the sidebar to navigate between pages (Workout Timetable, Customize Workout, History, Food Macros).
   - On the **Customize Workout** page, select your desired workout split from the dropdown and click "Apply". This will save your preference and redirect you to the Workout Timetable page.
   - On the Workout page, toggle between viewing by day or by muscle group.
   - Click on "Edit URL" next to any exercise to update its demo video URL using the modal.
   - Click "Add Exercise" in any section to add new exercises to that section.
   - When you check an exercise as complete, it is recorded in your history, which you can review under the History page.

5. **Persistent Data**  
   All customizations, including edited URLs, added exercises, and the selected workout split, are stored in your browser’s localStorage. These settings will persist even after you close and reopen the browser.

## Technologies Used

- **HTML5**
- **CSS3** (with Tailwind CSS for utility classes)
- **JavaScript (ES6)**

## Future Enhancements

- Add user authentication to store data on a server.
- Integrate additional nutritional data and personalized meal planning.
- Expand exercise databases with more video demos and instructions.
- Implement more advanced analytics for workout progress.


## Acknowledgments

- Thanks to the contributors and open-source communities for the resources used in building this project.
