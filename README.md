[<img src="https://github.com/szympol/Slicing-dashboard-to-static-site/blob/master/images/dashboard.JPG?raw=true" align="right" alt="dashboard" width="40%">](https://github.com/szympol/Slicing-dashboard-to-static-site/blob/master/images/dashboard.JPG)

# Dashboard slicing

Slicing a dashboard from PSD to fully Responsive Website. This project includes:

- a few pages sharing the same sidebar and topbar,
- pop-ups (i.e. login, quit, chat modals),
- my own styling, grid and scripts.

Based on [PSD Dashboard](https://github.com/szympol/Slicing-dashboard-to-static-site/blob/master/images/dashboard.psd).

## Getting Started

- [View the dashboard project online](https://szympol.github.io/Slicing-dashboard-to-static-site/)

Please follow instructions below, if you are willing to run the project locally.

### Prerequisites

Both [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/download/) are required to run this project locally.

### Installing

Please copy and paste below commands to your Git terminal step by step to get a development env running.

Download a repository:

```node
git clone git@github.com:szympol/Slicing-dashboard-to-static-site.git dashboard
```

Go to the project working directory:

```node
cd dashboard
```

Install all of the dependencies with the following command:

```node
npm install
```

View the project

```node
npm run watch
```

#### Under the hood of `npm run watch`

This command watches any changes in `sass/style.scss`. Once a change detected, SCSS file starts to be converted into `css/style.css` with autoprefixes attached. This command also deploys the project to the live stream on `http://localhost:3000`.

## Built With

- [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting for designers & developers.

## Author

- **Szymon Polanowski** - [GitHub Account](https://github.com/szympol)

## License

This project is licensed under the MIT License.
