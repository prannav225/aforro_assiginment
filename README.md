# Aforro Assignment: Dabang Dashboard

Here's my submission for the Aforro assignment. I’ve built a super-clean, high-performance dashboard using **Vite + React + Tailwind v4**.

I didn't just stop at making it look like the Figma; I made sure the logic under the hood (API fetching, filtering, etc).

## Project Setup Steps

It's standard Vite stuff, so it should be quick:

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the dev server**:
   ```bash
   npm run dev
   ```
3. **Check it out**: Open `http://localhost:5173` in your browser.
4. **Build for production**:
   ```bash
   npm run build
   ```

## Features Implemented

### Part 1: Dashboard UI (The Visuals)

- **High-Fidelity Replication**: I spent a lot of time tweaking the charts to match the figma design you sent. Used **Recharts** for everything and customized the legends, tooltips, and bar/line styles to get as close as possible to the design.
- **World Map**: Brought in `react-svg-worldmap` and styled it with custom colors for specific regions to match that "Sales Mapping" vibe.
- **Tailwind v4**: Decided to use the brand new Tailwind v4. It’s faster and makes handling the custom indigo/teal palette way easier.
- **Lucide Icons**: Used these for that clean, thin-stroke look that matches the design perfectly.

### Part 2: API Integration & Data Table

- **Navigation**: Added **React Router** so the User Directory has its own dedicated space.
- **Live Data**: Pulls real data from JSONPlaceholder API.
- **Functional Table**: You can search by name/email, sort the list A-Z/Z-A, and filter specifically by city.
- **Graceful Handling**: Added a loading spinner and custom error states for when the API acts up.

## Any Assumptions or Decisions Made

- **Separating the Table**: Since the instructions didn't say where the User Table should go, I decided to put it on its own route. I felt like stuffing it at the bottom of the dashboard would ruin the clean "pixel-perfect" design, and it shows I can handle multi-page navigation.
- **Standard Font Stack**: I stuck with the **Inter/System stack**. I figured there was no point in adding the weight of a custom font when the system defaults look so close to the Figma design anyway.
- **Component Architecture**: I broke everything down into reusable components (StatCard, Sidebar, Header, etc.) to keep the code clean and easy to follow.
- **TypeScript Choice**: Went with TS because it catches half the bugs before you even save the file. It made handling the API data way smoother.

Hope you dig the work! Let me know if you need any changes.
