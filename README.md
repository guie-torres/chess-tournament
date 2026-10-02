# IB Chess Tournament website

A small static website (plain HTML, CSS, and JavaScript) for the IB Chess Tournament in Sønderborg.

## Structure

- `index.html`, `schedule.html`, `players.html`, `contact.html`, `register.html`, `results.html`: one file per page
- `css/base.css`: shared styles (colors, fonts, header, nav, footer, buttons). Edit the variables at the top to change the look.
- `css/<page>.css`: styles for that page only
- `js/main.js`: mobile hamburger menu
- `assets/images/`, `assets/icons/`: empty, for your own files

## Run it

Open `index.html` in a browser. For live reload, use the "Live Server" extension in VS Code.

## Things to replace

Search the project for `[` to find every placeholder:

- `schedule.html`: dates and times
- `contact.html`: room, directions, organizer name/email/phone, and FAQ answers
- `players.html`: when players sign up, follow the template comment in the file

## Notes

- The registration form is a Google Form embedded on `register.html`.
- Each page repeats the same header and footer. If you change the nav, change it in all six files.
