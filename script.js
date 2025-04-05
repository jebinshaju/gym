/***** Sidebar Toggle *****/
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});
sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
function closeSidebar() {
  sidebar.classList.remove("active");
}

/***** Page Navigation *****/
function showPage(pageId) {
  const pages = document.querySelectorAll("#mainContent > div");
  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  if (pageId === "historyPage") {
    renderHistoryPage();
  }
}

/***** Workout Timetable Data *****/

/** 1) Default Timetable (7-day schedule: 6 workout days + 1 rest) **/
let defaultTimetable = [
  {
    day: "Monday - Chest & Triceps + Abs & Cardio",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Jumping Jacks",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/c4DAnQ6DtF8"
          },
          {
            name: "Dynamic Stretching",
            sets: "3x10",
            video: "https://www.youtube.com/embed/5m7XRCz-6eY"
          },
          {
            name: "Arm Circles",
            sets: "2x30 sec",
            video: "https://www.youtube.com/embed/4Qeg9XXV-tQ"
          }
        ]
      },
      {
        title: "Chest Exercises",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: "4x10",
            video: "https://www.youtube.com/embed/gRVjAtPip0Y"
          },
          {
            name: "Incline Dumbbell Press",
            sets: "4x10",
            video: "https://www.youtube.com/embed/8iPEnn-ltC8"
          },
          {
            name: "Machine Chest Press",
            sets: "4x10",
            video: "https://www.youtube.com/embed/7K0_TjQ8w6I"
          },
          {
            name: "Cable Flyes",
            sets: "4x12",
            video: "https://www.youtube.com/embed/taI4XduLpTk"
          },
          {
            name: "Push-ups",
            sets: "3xMax",
            video: "https://www.youtube.com/embed/IODxDxX7oi4"
          }
        ]
      },
      {
        title: "Triceps Exercises",
        exercises: [
          {
            name: "Triceps Dips",
            sets: "4x12",
            video: "https://www.youtube.com/embed/0326dy_-CzM"
          },
          {
            name: "Skull Crushers",
            sets: "4x12",
            video: "https://www.youtube.com/embed/d_KZxkY_0cM"
          },
          {
            name: "Cable Triceps Extensions",
            sets: "4x12",
            video: "https://www.youtube.com/embed/2-LAMcpzODU"
          },
          {
            name: "Close-Grip Bench Press",
            sets: "3x10",
            video: "https://www.youtube.com/embed/I9tKG0CCO-s"
          },
          {
            name: "Overhead Triceps Extension",
            sets: "3x12",
            video: "https://www.youtube.com/embed/_gsUck-7M74"
          }
        ]
      },
      {
        title: "Abdominal/Core Work",
        exercises: [
          {
            name: "Plank Variations",
            sets: "4x45 sec",
            video: "https://www.youtube.com/embed/pSHjTRCQxIw"
          },
          {
            name: "Cable Crunches",
            sets: "4x15",
            video: "https://www.youtube.com/embed/a4jA2x4i3_M"
          },
          {
            name: "Mountain Climbers",
            sets: "4x30 sec",
            video: "https://www.youtube.com/embed/nmwgirgXLYM"
          },
          {
            name: "Bicycle Crunches",
            sets: "3x20",
            video: "https://www.youtube.com/embed/9FGilxCbdz8"
          }
        ]
      },
      {
        title: "Cardio Finisher",
        exercises: [
          {
            name: "HIIT Sprint Intervals",
            sets: "15 minutes",
            video: "https://www.youtube.com/embed/ml6cT4AZdqI"
          },
          {
            name: "Treadmill Run",
            sets: "10 minutes",
            video: "https://www.youtube.com/embed/NXvIRK_OYWE"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Static Stretching",
            sets: "4x30 sec",
            video: "https://www.youtube.com/embed/3tKEJqEBmA4"
          },
          {
            name: "Foam Rolling",
            sets: "4x30 sec",
            video: "https://www.youtube.com/embed/3qH5bybUFjY"
          },
          {
            name: "Yoga Poses",
            sets: "2x1 min",
            video: "https://www.youtube.com/embed/YR8O5fl2Uqw"
          }
        ]
      }
    ]
  },
  // Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday...
  {
    day: "Tuesday - Back & Biceps + Abs & Cardio",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Jumping Jacks",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/c4DAnQ6DtF8"
          },
          {
            name: "Dynamic Stretching",
            sets: "3x10",
            video: "https://www.youtube.com/embed/5m7XRCz-6eY"
          },
          {
            name: "Torso Twists",
            sets: "2x30 sec",
            video: "https://www.youtube.com/embed/FBjkX_7-BW4"
          }
        ]
      },
      {
        title: "Back Exercises",
        exercises: [
          {
            name: "Deadlifts",
            sets: "4x8",
            video: "https://www.youtube.com/embed/ytGaGIn3SjE"
          },
          {
            name: "Bent-Over Rows",
            sets: "4x10",
            video: "https://www.youtube.com/embed/HfN5Ici3ayI"
          },
          {
            name: "Lat Pulldowns",
            sets: "4x10",
            video: "https://www.youtube.com/embed/CAwf7n6Luuc"
          },
          {
            name: "Seated Cable Rows",
            sets: "4x10",
            video: "https://www.youtube.com/embed/HJSVR_67OlM"
          },
          {
            name: "T-Bar Rows",
            sets: "3x10",
            video: "https://www.youtube.com/embed/ZZ0k8RAvLdw"
          }
        ]
      },
      {
        title: "Biceps Exercises",
        exercises: [
          {
            name: "Barbell Curls",
            sets: "4x12",
            video: "https://www.youtube.com/embed/kwG2ipFRgfo"
          },
          {
            name: "Dumbbell Hammer Curls",
            sets: "4x12",
            video: "https://www.youtube.com/embed/zC3nLlEvin4"
          },
          {
            name: "Preacher Curls",
            sets: "3x12",
            video: "https://www.youtube.com/embed/FAfHWRzk6k8"
          }
        ]
      },
      {
        title: "Abdominal/Core Work",
        exercises: [
          {
            name: "Hanging Leg Raises",
            sets: "4x12",
            video: "https://www.youtube.com/embed/HRV7aT6Kg_0"
          },
          {
            name: "Russian Twists",
            sets: "4x20",
            video: "https://www.youtube.com/embed/wkD8rjkodUI"
          },
          {
            name: "V-Ups",
            sets: "3x15",
            video: "https://www.youtube.com/embed/1fbU_MkV7NE"
          }
        ]
      },
      {
        title: "Cardio Finisher",
        exercises: [
          {
            name: "Moderate‑Intensity Cardio",
            sets: "20 minutes",
            video: "https://www.youtube.com/embed/4NRXx6U8ABQ"
          },
          {
            name: "Elliptical Trainer",
            sets: "10 minutes",
            video: "https://www.youtube.com/embed/akjY-zbXNEw"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Static Stretching",
            sets: "4x30 sec",
            video: "https://www.youtube.com/embed/3tKEJqEBmA4"
          },
          {
            name: "Foam Rolling",
            sets: "4x30 sec",
            video: "https://www.youtube.com/embed/3qH5bybUFjY"
          }
        ]
      }
    ]
  },
  // Wednesday, Thursday, Friday, Saturday, Sunday...
  // (Continue similarly for each day: Wednesday, Thursday, Friday, Saturday, Sunday)
  {
    day: "Wednesday - Shoulders + Core + Cardio",
    sections: [
      // ...
    ]
  },
  {
    day: "Thursday - Legs + Cardio",
    sections: [
      // ...
    ]
  },
  {
    day: "Friday - Arms & Core",
    sections: [
      // ...
    ]
  },
  {
    day: "Saturday - Full Body Booster & Extended Cardio",
    sections: [
      // ...
    ]
  },
  {
    day: "Sunday - Rest Day",
    sections: [
      // ...
    ]
  }
];

/** 2) One Muscle per Day (6 days: Monday–Saturday) **/
let oneMuscleTimetable = [
  {
    day: "Monday - Chest",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Arm Circles",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/4Qeg9XXV-tQ"
          },
          {
            name: "Dynamic Chest Stretch",
            sets: "3x15 sec",
            video: "https://www.youtube.com/embed/BLEhAydlS48"
          },
          {
            name: "Push-up Prep",
            sets: "2x20 sec",
            video: "https://www.youtube.com/embed/IODxDxX7oi4"
          }
        ]
      },
      {
        title: "Chest Exercises",
        exercises: [
          {
            name: "Bench Press",
            sets: "4x10",
            video: "https://www.youtube.com/embed/gRVjAtPip0Y"
          },
          {
            name: "Incline Dumbbell Press",
            sets: "4x10",
            video: "https://www.youtube.com/embed/8iPEnn-ltC8"
          },
          {
            name: "Cable Flyes",
            sets: "4x12",
            video: "https://www.youtube.com/embed/taI4XduLpTk"
          },
          {
            name: "Dumbbell Flyes",
            sets: "3x12",
            video: "https://www.youtube.com/embed/eozdVDA78K0"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Chest Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/XuSXr05-hXs"
          },
          {
            name: "Foam Rolling (Chest)",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/3qH5bybUFjY"
          }
        ]
      }
    ]
  },
  {
    day: "Tuesday - Back",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Jumping Jacks",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/c4DAnQ6DtF8"
          },
          {
            name: "Dynamic Back Stretch",
            sets: "3x15 sec",
            video: "https://www.youtube.com/embed/W3jlO_UaS-c"
          }
        ]
      },
      {
        title: "Back Exercises",
        exercises: [
          {
            name: "Deadlifts",
            sets: "4x8",
            video: "https://www.youtube.com/embed/ytGaGIn3SjE"
          },
          {
            name: "Bent Over Rows",
            sets: "4x10",
            video: "https://www.youtube.com/embed/HfN5Ici3ayI"
          },
          {
            name: "Lat Pulldowns",
            sets: "4x10",
            video: "https://www.youtube.com/embed/CAwf7n6Luuc"
          },
          {
            name: "T-Bar Rows",
            sets: "3x10",
            video: "https://www.youtube.com/embed/ZZ0k8RAvLdw"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Back Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/Uw89d1p7NsA"
          },
          {
            name: "Foam Rolling (Back)",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/3qH5bybUFjY"
          }
        ]
      }
    ]
  },
  {
    day: "Wednesday - Shoulders",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Shoulder Rotations",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/ImVb7ZzWukY"
          },
          {
            name: "Arm Swings",
            sets: "3x15 sec",
            video: "https://www.youtube.com/embed/3WtVJ1o5ZtA"
          }
        ]
      },
      {
        title: "Shoulder Exercises",
        exercises: [
          {
            name: "Overhead Press",
            sets: "4x10",
            video: "https://www.youtube.com/embed/qEwKCR5JCog"
          },
          {
            name: "Dumbbell Lateral Raises",
            sets: "4x12",
            video: "https://www.youtube.com/embed/kDqklk1ZESo"
          },
          {
            name: "Rear Delt Flyes",
            sets: "4x12",
            video: "https://www.youtube.com/embed/pYcpY20QaE8"
          },
          {
            name: "Arnold Press",
            sets: "3x10",
            video: "https://www.youtube.com/embed/6Z15N6m2nXk"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Shoulder Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/F2DBtzmtz4M"
          },
          {
            name: "Foam Rolling (Shoulders)",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/3qH5bybUFjY"
          }
        ]
      }
    ]
  },
  {
    day: "Thursday - Arms",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Arm Swings",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/3lQR7MR9obY"
          },
          {
            name: "Wrist Rotations",
            sets: "3x15 sec",
            video: "https://www.youtube.com/embed/zm_HzjbF0O0"
          }
        ]
      },
      {
        title: "Arm Exercises",
        exercises: [
          {
            name: "Barbell Curls",
            sets: "4x10",
            video: "https://www.youtube.com/embed/kwG2ipFRgfo"
          },
          {
            name: "Dumbbell Hammer Curls",
            sets: "4x10",
            video: "https://www.youtube.com/embed/zC3nLlEvin4"
          },
          {
            name: "Triceps Dips",
            sets: "4x12",
            video: "https://www.youtube.com/embed/0326dy_-CzM"
          },
          {
            name: "Skull Crushers",
            sets: "4x10",
            video: "https://www.youtube.com/embed/d_KZxkY_0cM"
          },
          {
            name: "Cable Triceps Extensions",
            sets: "3x12",
            video: "https://www.youtube.com/embed/2-LAMcpzODU"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Arm Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/3tKEJqEBmA4"
          }
        ]
      }
    ]
  },
  {
    day: "Friday - Legs",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "High Knees",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/Od5O_dxu2b8"
          },
          {
            name: "Leg Swings",
            sets: "3x15 sec",
            video: "https://www.youtube.com/embed/gAn3OPzNnVg"
          },
          {
            name: "Dynamic Lunges",
            sets: "2x10 per leg",
            video: "https://www.youtube.com/embed/IO6aB_PTV3Y"
          }
        ]
      },
      {
        title: "Leg Exercises",
        exercises: [
          {
            name: "Squats",
            sets: "4x10",
            video: "https://www.youtube.com/embed/aclHkVaku9U"
          },
          {
            name: "Leg Press",
            sets: "4x12",
            video: "https://www.youtube.com/embed/IZxyjW7MPJQ"
          },
          {
            name: "Bulgarian Split Squats",
            sets: "4x10 per leg",
            video: "https://www.youtube.com/embed/2C-uNgKwPLE"
          },
          {
            name: "Lunges",
            sets: "3x12 per leg",
            video: "https://www.youtube.com/embed/D7KaRcUTQeE"
          },
          {
            name: "Hamstring Curls",
            sets: "4x12",
            video: "https://www.youtube.com/embed/1Tq3QdYUuHs"
          },
          {
            name: "Calf Raises",
            sets: "4x15",
            video: "https://www.youtube.com/embed/YMmgqO8Jo-k"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Quad Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/9DdWcq5-8Ac"
          },
          {
            name: "Hamstring Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/oJk8SHte1V8"
          },
          {
            name: "Yoga Poses",
            sets: "2x1 min",
            video: "https://www.youtube.com/embed/YR8O5fl2Uqw"
          }
        ]
      }
    ]
  },
  {
    day: "Saturday - Core",
    sections: [
      {
        title: "Warmup",
        exercises: [
          {
            name: "Light Cardio",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/c4DAnQ6DtF8"
          },
          {
            name: "Torso Twists",
            sets: "3x15 sec",
            video: "https://www.youtube.com/embed/FBjkX_7-BW4"
          }
        ]
      },
      {
        title: "Core Exercises",
        exercises: [
          {
            name: "Plank",
            sets: "4x45 sec",
            video: "https://www.youtube.com/embed/pSHjTRCQxIw"
          },
          {
            name: "Hanging Leg Raises",
            sets: "4x12",
            video: "https://www.youtube.com/embed/HRV7aT6Kg_0"
          },
          {
            name: "Russian Twists",
            sets: "4x20",
            video: "https://www.youtube.com/embed/wkD8rjkodUI"
          },
          {
            name: "V-Ups",
            sets: "4x15",
            video: "https://www.youtube.com/embed/1fbU_MkV7NE"
          }
        ]
      },
      {
        title: "Cool Down",
        exercises: [
          {
            name: "Lower Back Stretch",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/3tKEJqEBmA4"
          },
          {
            name: "Child's Pose",
            sets: "3x30 sec",
            video: "https://www.youtube.com/embed/7FLCni2v4fw"
          }
        ]
      }
    ]
  }
];

// Full Body Timetable (3 days per week: Monday, Wednesday, Friday)
let fullBodyTimetable = [
    {
      day: "Monday - Full Body Workout",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Jumping Jacks", sets: "3x30 sec", video: "https://www.youtube.com/embed/c4DAnQ6DtF8" },
            { name: "Dynamic Stretching", sets: "3x10", video: "https://www.youtube.com/embed/5m7XRCz-6eY" },
            { name: "Arm Circles", sets: "2x30 sec", video: "https://www.youtube.com/embed/4Qeg9XXV-tQ" }
        ]},
        { title: "Full Body Exercises", exercises: [
            { name: "Squats", sets: "4x10", video: "https://www.youtube.com/embed/aclHkVaku9U" },
            { name: "Bench Press", sets: "4x10", video: "https://www.youtube.com/embed/gRVjAtPip0Y" },
            { name: "Deadlifts", sets: "4x8", video: "https://www.youtube.com/embed/ytGaGIn3SjE" },
            { name: "Overhead Press", sets: "4x10", video: "https://www.youtube.com/embed/qEwKCR5JCog" },
            { name: "Push-ups", sets: "3xMax", video: "https://www.youtube.com/embed/IODxDxX7oi4" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Full Body Stretch", sets: "4x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling", sets: "4x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    },
    {
      day: "Wednesday - Full Body Workout",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Jumping Jacks", sets: "3x30 sec", video: "https://www.youtube.com/embed/c4DAnQ6DtF8" },
            { name: "Dynamic Stretching", sets: "3x10", video: "https://www.youtube.com/embed/5m7XRCz-6eY" }
        ]},
        { title: "Full Body Exercises", exercises: [
            { name: "Lunges", sets: "4x10 per leg", video: "https://www.youtube.com/embed/D7KaRcUTQeE" },
            { name: "Incline Dumbbell Press", sets: "4x10", video: "https://www.youtube.com/embed/8iPEnn-ltC8" },
            { name: "Bent Over Rows", sets: "4x10", video: "https://www.youtube.com/embed/HfN5Ici3ayI" },
            { name: "Dumbbell Shoulder Press", sets: "4x10", video: "https://www.youtube.com/embed/7V3D5LuQ5m0" },
            { name: "Plank", sets: "3x60 sec", video: "https://www.youtube.com/embed/pSHjTRCQxIw" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Full Body Stretch", sets: "4x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling", sets: "4x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    },
    {
      day: "Friday - Full Body Workout",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Jumping Jacks", sets: "3x30 sec", video: "https://www.youtube.com/embed/c4DAnQ6DtF8" },
            { name: "Dynamic Stretching", sets: "3x10", video: "https://www.youtube.com/embed/5m7XRCz-6eY" }
        ]},
        { title: "Full Body Exercises", exercises: [
            { name: "Leg Press", sets: "4x12", video: "https://www.youtube.com/embed/IZxyjW7MPJQ" },
            { name: "Chest Flyes", sets: "4x12", video: "https://www.youtube.com/embed/eozdVDA78K0" },
            { name: "Lat Pulldowns", sets: "4x10", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
            { name: "Cable Rows", sets: "4x10", video: "https://www.youtube.com/embed/HJSVR_67OlM" },
            { name: "Burpees", sets: "3x12", video: "https://www.youtube.com/embed/dZgVxmf6jkA" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Full Body Stretch", sets: "4x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling", sets: "4x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    }
  ];
  
  // Push/Pull Timetable (4-day split: Monday & Thursday = Push; Tuesday & Friday = Pull)
  let pushPullTimetable = [
    {
      day: "Monday - Push (Chest, Shoulders, Triceps)",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Dynamic Warmup", sets: "3x30 sec", video: "https://www.youtube.com/embed/5m7XRCz-6eY" },
            { name: "Arm Circles", sets: "2x30 sec", video: "https://www.youtube.com/embed/4Qeg9XXV-tQ" }
        ]},
        { title: "Push Exercises", exercises: [
            { name: "Bench Press", sets: "4x10", video: "https://www.youtube.com/embed/gRVjAtPip0Y" },
            { name: "Overhead Press", sets: "4x10", video: "https://www.youtube.com/embed/qEwKCR5JCog" },
            { name: "Incline Dumbbell Press", sets: "4x10", video: "https://www.youtube.com/embed/8iPEnn-ltC8" },
            { name: "Triceps Dips", sets: "4x12", video: "https://www.youtube.com/embed/0326dy_-CzM" },
            { name: "Cable Pushdowns", sets: "3x12", video: "https://www.youtube.com/embed/lTTajzrSkCw" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Push Stretch", sets: "3x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling (Chest/Shoulders)", sets: "3x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    },
    {
      day: "Tuesday - Pull (Back, Biceps)",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Dynamic Warmup", sets: "3x30 sec", video: "https://www.youtube.com/embed/5m7XRCz-6eY" }
        ]},
        { title: "Pull Exercises", exercises: [
            { name: "Deadlifts", sets: "4x8", video: "https://www.youtube.com/embed/ytGaGIn3SjE" },
            { name: "Bent Over Rows", sets: "4x10", video: "https://www.youtube.com/embed/HfN5Ici3ayI" },
            { name: "Lat Pulldowns", sets: "4x10", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
            { name: "Barbell Curls", sets: "4x10", video: "https://www.youtube.com/embed/kwG2ipFRgfo" },
            { name: "Preacher Curls", sets: "3x12", video: "https://www.youtube.com/embed/FAfHWRzk6k8" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Pull Stretch", sets: "3x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling (Back)", sets: "3x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    },
    {
      day: "Thursday - Push (Chest, Shoulders, Triceps)",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Dynamic Warmup", sets: "3x30 sec", video: "https://www.youtube.com/embed/5m7XRCz-6eY" },
            { name: "Arm Circles", sets: "2x30 sec", video: "https://www.youtube.com/embed/4Qeg9XXV-tQ" }
        ]},
        { title: "Push Exercises", exercises: [
            { name: "Decline Bench Press", sets: "4x10", video: "https://www.youtube.com/embed/U-4XJ9u3S9w" },
            { name: "Arnold Press", sets: "4x10", video: "https://www.youtube.com/embed/6Z15N6m2nXk" },
            { name: "Cable Flyes", sets: "4x12", video: "https://www.youtube.com/embed/taI4XduLpTk" },
            { name: "Overhead Triceps Extension", sets: "4x12", video: "https://www.youtube.com/embed/_gsUck-7M74" },
            { name: "Triceps Pushdowns", sets: "3x12", video: "https://www.youtube.com/embed/vB5OHsJ3EME" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Push Stretch", sets: "3x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling (Chest/Shoulders)", sets: "3x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    },
    {
      day: "Friday - Pull (Back, Biceps)",
      sections: [
        { title: "Warmup", exercises: [
            { name: "Dynamic Warmup", sets: "3x30 sec", video: "https://www.youtube.com/embed/5m7XRCz-6eY" }
        ]},
        { title: "Pull Exercises", exercises: [
            { name: "T-Bar Rows", sets: "4x10", video: "https://www.youtube.com/embed/ZZ0k8RAvLdw" },
            { name: "Seated Cable Rows", sets: "4x10", video: "https://www.youtube.com/embed/HJSVR_67OlM" },
            { name: "Single-Arm Dumbbell Row", sets: "4x10 per arm", video: "https://www.youtube.com/embed/4PqM39EaZYU" },
            { name: "Dumbbell Hammer Curls", sets: "4x10", video: "https://www.youtube.com/embed/zC3nLlEvin4" },
            { name: "Concentration Curls", sets: "3x10 per arm", video: "https://www.youtube.com/embed/soxrZlIl35U" }
        ]},
        { title: "Cool Down", exercises: [
            { name: "Pull Stretch", sets: "3x30 sec", video: "https://www.youtube.com/embed/3tKEJqEBmA4" },
            { name: "Foam Rolling (Back)", sets: "3x30 sec", video: "https://www.youtube.com/embed/3qH5bybUFjY" }
        ]}
      ]
    }
  ];

/** If any arrays are missing days, fill them similarly. **/

// Global variable for the currently active timetable
let activeTimetable = defaultTimetable;

/***** Load & Save Custom Timetable *****/
function loadCustomTimetable(split) {
  const stored = localStorage.getItem("customActiveTimetable_" + split);
  return stored ? JSON.parse(stored) : null;
}
function saveCustomTimetable(split, data) {
  localStorage.setItem("customActiveTimetable_" + split, JSON.stringify(data));
}

/***** History Functions *****/
function recordExerciseHistory(info, ex) {
  let history = JSON.parse(localStorage.getItem("exerciseHistory")) || [];
  history.push({
    timestamp: Date.now(),
    day: info.day,
    section: info.section,
    exercise: ex.name,
    sets: ex.sets
  });
  localStorage.setItem("exerciseHistory", JSON.stringify(history));
}

function renderHistoryPage() {
  const historyContent = document.getElementById("historyContent");
  historyContent.innerHTML = "";
  let history = JSON.parse(localStorage.getItem("exerciseHistory")) || [];
  if (history.length === 0) {
    historyContent.innerHTML = "<p class='text-center'>No history available.</p>";
    return;
  }
  // Sort newest to oldest
  history.sort((a, b) => b.timestamp - a.timestamp);
  history.forEach(item => {
    const p = document.createElement("p");
    const date = new Date(item.timestamp).toLocaleString();
    p.textContent = `${date}: [${item.day} - ${item.section}] ${item.exercise} (${item.sets})`;
    historyContent.appendChild(p);
  });
}

function clearHistory() {
  if (confirm("Clear all exercise history?")) {
    localStorage.removeItem("exerciseHistory");
    renderHistoryPage();
  }
}

/***** Rendering the Workout Timetable *****/
let currentDayIndex = 0;
const workoutContent = document.getElementById("workoutContent");
const dayNav = document.getElementById("dayNav");
const viewDayBtn = document.getElementById("viewDay");
const viewMuscleBtn = document.getElementById("viewMuscle");
const muscleFilter = document.getElementById("muscleFilter");
const muscleSelect = document.getElementById("muscleSelect");

// Show which split is active
function updateActiveSplitDisplay() {
  const displayEl = document.getElementById("activeSplitDisplay");
  let splitName = localStorage.getItem("activeSplit");
  if (!splitName) splitName = "Default Split (6 Workouts, 1 Rest)";
  displayEl.textContent = "Current Split: " + splitName;
}

function renderDayNav() {
  dayNav.innerHTML = "";
  activeTimetable.forEach((dayObj, index) => {
    const btn = document.createElement("button");
    btn.textContent = dayObj.day.split(" - ")[0];
    btn.className = "nav-button" + (index === currentDayIndex ? " active" : "");
    btn.addEventListener("click", () => {
      currentDayIndex = index;
      updateActiveNav();
      renderWorkoutContent();
    });
    dayNav.appendChild(btn);
  });
}
function updateActiveNav() {
  const buttons = dayNav.querySelectorAll(".nav-button");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === currentDayIndex);
  });
}

function renderWorkoutContent() {
  workoutContent.innerHTML = "";
  if (viewMode === "day") {
    const dayData = activeTimetable[currentDayIndex];
    const dayTitle = document.createElement("h2");
    dayTitle.textContent = dayData.day;
    workoutContent.appendChild(dayTitle);

    dayData.sections.forEach((section, secIndex) => {
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "section";

      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = section.title;
      sectionDiv.appendChild(sectionTitle);

      section.exercises.forEach((ex, exIdx) => {
        // Create a stable "index" for caching the edited URL
        // or for referencing the exercise in history.
        const info = {
          day: dayData.day,
          section: section.title,
          index: `${currentDayIndex}-${secIndex}-${exIdx}`
        };
        sectionDiv.appendChild(createExerciseCard(ex, info));
      });

      // "Add Exercise" button for this section
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add Exercise";
      addBtn.className = "toggle-button mt-2";
      addBtn.addEventListener("click", () => {
        openAddExerciseModal(currentDayIndex, section.title);
      });
      sectionDiv.appendChild(addBtn);

      workoutContent.appendChild(sectionDiv);
    });

  } else if (viewMode === "muscle") {
    // Filter by muscle group
    const selectedGroup = muscleSelect.value;
    const filteredExercises = [];

    activeTimetable.forEach(dayObj => {
      dayObj.sections.forEach(section => {
        const sectionLower = section.title.toLowerCase();
        let group = "";
        if (sectionLower.includes("chest")) group = "chest";
        else if (sectionLower.includes("triceps")) group = "triceps";
        else if (sectionLower.includes("back")) group = "back";
        else if (sectionLower.includes("biceps")) group = "biceps";
        else if (sectionLower.includes("leg")) group = "legs";
        else if (sectionLower.includes("shoulder")) group = "shoulders";
        else if (sectionLower.includes("ab") || sectionLower.includes("core") || sectionLower.includes("mountain"))
          group = "core";
        else if (sectionLower.includes("cardio")) group = "cardio";
        else if (sectionLower.includes("active")) group = "active";

        if (selectedGroup === "all" || group === selectedGroup) {
          section.exercises.forEach(ex => {
            filteredExercises.push({
              day: dayObj.day,
              section: section.title,
              exercise: ex
            });
          });
        }
      });
    });

    if (filteredExercises.length === 0) {
      const noResult = document.createElement("p");
      noResult.textContent = "No exercises found for this muscle group.";
      workoutContent.appendChild(noResult);
    } else {
      filteredExercises.forEach(item => {
        // No stable "index" for muscle view, but we can store a blank or item IDs
        const info = { day: item.day, section: item.section, index: "" };
        const card = createExerciseCard(item.exercise, info);
        const label = document.createElement("small");
        label.textContent = `${item.day} | ${item.section}`;
        card.insertBefore(label, card.firstChild);
        workoutContent.appendChild(card);
      });
    }
  }
}

function createExerciseCard(ex, info) {
  const card = document.createElement("div");
  card.className = "exercise-card";

  // Header with checkbox & "Edit URL" button
  const header = document.createElement("div");
  header.className = "exercise-header";

  const label = document.createElement("label");
  label.innerHTML = `<input type="checkbox"> <strong>${ex.name}</strong> (${ex.sets})`;
  label.querySelector("input").addEventListener("change", (e) => {
    if (e.target.checked) {
      label.classList.add("completed");
      if (info.day && info.section) recordExerciseHistory(info, ex);
    } else {
      label.classList.remove("completed");
    }
  });
  header.appendChild(label);

  // "Edit URL" button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit URL";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", () => {
    openModal(info.index, ex.video, (newURL) => {
      // Save new URL in localStorage
      if (info.index) localStorage.setItem("video_" + info.index, newURL);
      // Update the iframe in this card
      const iframe = card.querySelector("iframe");
      if (iframe) iframe.src = newURL;
    });
  });
  header.appendChild(editBtn);

  card.appendChild(header);

  // Video container with caching
  const videoContainer = document.createElement("div");
  videoContainer.className = "video-container";

  const iframe = document.createElement("iframe");
  const cacheKey = info && info.index ? "video_" + info.index : "";
  const cachedURL = cacheKey ? localStorage.getItem(cacheKey) : "";
  iframe.src = cachedURL ? cachedURL : ex.video;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  videoContainer.appendChild(iframe);
  card.appendChild(videoContainer);

  return card;
}

/***** Modal for Editing Video URL *****/
const modal = document.getElementById("modal");
const modalInput = document.getElementById("modalInput");
const modalSave = document.getElementById("modalSave");
const modalCancel = document.getElementById("modalCancel");
let modalCallback = null;

function openModal(cacheKey, currentURL, callback) {
  modalCallback = callback;
  modalInput.value = currentURL;
  modal.classList.remove("hidden");
  modal.style.display = "flex";
}
modalSave.addEventListener("click", () => {
  const newURL = modalInput.value.trim();
  if (newURL && modalCallback) {
    modalCallback(newURL);
  }
  closeModal();
});
modalCancel.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  modal.style.display = "none";
}

/***** Modal for Adding New Exercise *****/
const addExModal = document.getElementById("addExerciseModal");
const newExName = document.getElementById("newExName");
const newExSets = document.getElementById("newExSets");
const newExURL = document.getElementById("newExURL");
const addExSave = document.getElementById("addExSave");
const addExCancel = document.getElementById("addExCancel");
let currentSectionKey = null;

function openAddExerciseModal(dayIndex, sectionTitle) {
  currentSectionKey = { dayIndex, sectionTitle };
  newExName.value = "";
  newExSets.value = "";
  newExURL.value = "";
  addExModal.classList.remove("hidden");
  addExModal.style.display = "flex";
}
addExSave.addEventListener("click", () => {
  const name = newExName.value.trim();
  const sets = newExSets.value.trim();
  const video = newExURL.value.trim();
  if (name && sets && video && currentSectionKey !== null) {
    // Add new exercise to the correct section
    const dayData = activeTimetable[currentSectionKey.dayIndex];
    const section = dayData.sections.find(sec => sec.title === currentSectionKey.sectionTitle);
    if (section) {
      const newExercise = { name, sets, video };
      section.exercises.push(newExercise);
      // Save updated timetable for the current split
      const split = localStorage.getItem("activeSplit") || "default";
      localStorage.setItem("customActiveTimetable_" + split, JSON.stringify(activeTimetable));
      renderWorkoutContent();
    }
  }
  closeAddExModal();
});
addExCancel.addEventListener("click", closeAddExModal);

function closeAddExModal() {
  addExModal.classList.add("hidden");
  addExModal.style.display = "none";
}

/***** Toggle View Mode *****/
let viewMode = "day";
viewDayBtn.addEventListener("click", () => {
  viewMode = "day";
  viewDayBtn.classList.add("active");
  viewMuscleBtn.classList.remove("active");
  dayNav.style.display = "flex";
  muscleFilter.style.display = "none";
  renderWorkoutContent();
});
viewMuscleBtn.addEventListener("click", () => {
  viewMode = "muscle";
  viewMuscleBtn.classList.add("active");
  viewDayBtn.classList.remove("active");
  dayNav.style.display = "none";
  muscleFilter.style.display = "flex";
  renderWorkoutContent();
});
muscleSelect.addEventListener("change", renderWorkoutContent);

/***** Set default day based on the actual day *****/
function initializeDay() {
  const today = new Date().getDay();
  // Sunday(0) => index 6 (rest day), else day-1
  currentDayIndex = (today === 0) ? 6 : today - 1;
}

/***** Render the Workout Page *****/
function renderWorkoutPage() {
  renderDayNav();
  renderWorkoutContent();
  updateActiveSplitDisplay();
}

/***** Customize Workout Split *****/
function applySplit() {
  const splitOption = document.getElementById("splitSelect").value;
  localStorage.setItem("activeSplit", splitOption);

  let storedTimetable = loadCustomTimetable(splitOption);
  if (storedTimetable) {
    // If there's a previously customized version, load it
    activeTimetable = storedTimetable;
  } else {
    // Otherwise, load the built-in array
    if (splitOption === "default") {
      activeTimetable = defaultTimetable;
    } else if (splitOption === "oneMuscle") {
      activeTimetable = oneMuscleTimetable;
    } else if (splitOption === "fullBody") {
      activeTimetable = fullBodyTimetable;
    } else if (splitOption === "pushPull") {
      activeTimetable = pushPullTimetable;
    }
  }
  currentDayIndex = 0;
  showPage("workoutPage");
  renderWorkoutPage();
  alert("Workout split updated!");
}

/***** Initialization *****/
const storedSplit = localStorage.getItem("activeSplit");
if (storedSplit) {
  // If a custom split was chosen before, load it
  document.getElementById("splitSelect").value = storedSplit;
  applySplit();
} else {
  // Otherwise, just use default
  activeTimetable = defaultTimetable;
}
initializeDay();
renderWorkoutPage();
