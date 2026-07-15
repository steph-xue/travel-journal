# Travel Journal

A web application that displays a personal journal of past travel destinations, each shown as its own card with a photo, a Google Maps link to the location, the travel dates, and a short journal style description of the trip. The most recently added destination is always shown first, so the journal reads newest to oldest.

**[View Live Demo](https://travel-journal-sx.netlify.app/)**

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

<br>

## Overview

This project is a small web application built to practice rendering a list of reusable components from structured data in React. It is built with React, JavaScript, HTML, and CSS, and bundled with Vite. Every destination is stored as an entry in a single data file and rendered through one shared Card component, so adding a new trip only requires adding a new entry to that file rather than writing any additional markup. Each entry pairs a photo with its own Google Maps link, travel dates, and a written description of the trip, giving every card the same consistent layout regardless of how much or how little detail a particular destination has.

<br>

## Features

### Destination Cards
Each past trip is displayed on its own card showing a photo, the location's city and country, the travel dates, and a short description with details about the destination. Dates are shown as a range for multi day trips, or a single date for destinations visited in one day. A link on each card opens the location directly in Google Maps, and the most recently added destination appears at the top of the list.

<p align="center"><img src="./images/travel-journal.png?raw=true" alt="Travel Journal" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Build Tool | Vite |

<br>

## How It Works

The interface is built from two components, a navigation bar and a card, rendered from a single root component. Rather than writing out each destination by hand, the root component loops through an array of destination objects stored in a separate data file and renders one Card component per entry, passing each item's details in as props. Inside the Card component, the end date is only rendered if one exists in the data, so a destination without an end date displays a single date instead of an empty or broken date range. The list of cards is reversed before being displayed, so the most recently added destination always appears first. Vite handles the local development server and production build, compiling the React components into files that can be deployed anywhere.

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/travel-journal.git
cd travel-journal
```

**2. Install the dependencies**

This installs React and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- Filtering or sorting destinations by country or travel date
- A form for adding new destinations directly from the interface
- An interactive map view showing all destinations at once
