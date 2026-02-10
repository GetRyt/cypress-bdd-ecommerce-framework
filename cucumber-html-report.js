const report = require("multiple-cucumber-html-reporter");

function formatDate(date) {
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

const startTime = new Date();
const endTime = new Date();

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-html-report.html",

  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows 10 Pro",
      version: "22H2",
    },
  },

  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: formatDate(startTime) },
      { label: "Execution End Time", value: formatDate(endTime) },
    ],
  },
});
