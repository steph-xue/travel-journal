<h1 align="center">
  Travel Journal
</h1>

<h4 align="center">
  A travel journal web application that displays a personal collection of <br>
  past travel destinations with photos, dates, descriptions, and map links.
</h4>

<p align="center">
  <img src="docs/screenshots/travel-journal.png?raw=true" alt="Travel Journal" width="400">
</p>

<p align="center">
  <a href="https://travel-journal-sx.netlify.app/">View Live Demo</a>
</p>

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)

<br>

## Overview

This project presents a personal journal of past travel destinations, with each trip displayed as an individual card containing a photo, location, travel dates, and a short description. It is built with React, JavaScript, HTML, and CSS, uses Vite as the build tool, and is deployed on Netlify for cloud hosting. Each card also includes a Google Maps link to the destination, and the most recently added trip appears first so the journal is organized from newest to oldest. Every destination is stored as an entry in a shared data file and dynamically rendered through a reusable Card component, allowing new trips to be added without writing additional markup. Conditional rendering displays either a single date or a date range depending on the information provided for each destination.

<br>

## Features

### Destination Cards
Each past trip is displayed on its own card showing a photo, the location's city and country, the travel dates, and a short description with details about the destination. Dates are shown as a range for multi day trips, or a single date for destinations visited in one day. A link on each card opens the location directly in Google Maps, and the most recently added destination appears at the top of the list.

<p align="center"><img src="docs/screenshots/travel-journal.png?raw=true" alt="Travel Journal" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Build Tool | Vite |
| Deployment | Netlify |

<br>

## How It Works

The interface is built from two components, a navigation bar and a card, rendered from a single root component. Rather than writing out each destination by hand, the root component loops through an array of destination objects stored in a separate data file and renders one Card component per entry, passing each item's details in as props. Inside the Card component, the end date is only rendered if one exists in the data, so a destination without an end date displays a single date instead of an empty or broken date range. The list of cards is reversed before being displayed, so the most recently added destination always appears first. Vite handles the local development server and production build, compiling the React components into files that can be deployed anywhere.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- Filtering or sorting destinations by country or travel date
- A form for adding new destinations directly from the interface
- An interactive map view showing all destinations at once
  
<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

<br>

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

<br>

**1. Clone the Repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/travel-journal.git
cd travel-journal
```

**2. Install the Dependencies**

This installs all dependencies the project needs to run.
```bash
npm install
```

**3. Start the Development Server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.
