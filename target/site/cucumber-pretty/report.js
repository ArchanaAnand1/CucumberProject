$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./features/youtubeSearch.feature");
formatter.feature({
  "name": "Youube search validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UATTesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Youtube search positive scenarios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "open chrome and enter URL and search \"\u003cSearch\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "enter search criteria",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Search"
      ]
    },
    {
      "cells": [
        "Bakkappa selenium"
      ]
    },
    {
      "cells": [
        "Firends"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Youtube search positive scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UATTesting"
    }
  ]
});
formatter.step({
  "name": "open chrome and enter URL and search \"Bakkappa selenium\"",
  "keyword": "Given "
});
formatter.match({
  "location": "YoutubeSearch.open_chrome_browser_and_enter_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter search criteria",
  "keyword": "When "
});
formatter.match({
  "location": "YoutubeSearch.enterSearchCriteria()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Youtube search positive scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UATTesting"
    }
  ]
});
formatter.step({
  "name": "open chrome and enter URL and search \"Firends\"",
  "keyword": "Given "
});
formatter.match({
  "location": "YoutubeSearch.open_chrome_browser_and_enter_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter search criteria",
  "keyword": "When "
});
formatter.match({
  "location": "YoutubeSearch.enterSearchCriteria()"
});
formatter.result({
  "status": "passed"
});
});