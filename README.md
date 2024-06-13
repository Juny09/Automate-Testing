## XE Convert Automation using selenuim (javascript)

## Prerequisites
Nodejs
Selenium WebDriver
Google Chrome 
ChromeDriver 

## Setup Instructions
1. Install Node.js
Download and install the latest version of Node.js from the official website. https://nodejs.org/en/download/package-manager/current

2. Install npm
npm install selenium-webdriver chromedriver

## Run the program
node testcase1.js
node testcase2.js
node testcase3.js
node testcase4.js
node testcase5.js

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# XE Convert Button Load Test

This repository contains the load test setup for the Convert button on XE.com using Apache JMeter.

## Project Structure
## Prerequisites

- Apache JMeter
- Java (required to run JMeter)
- Web Browser (for recording the HTTP requests)

## Setup Instructions
Install Apache JMeter https://jmeter.apache.org/download_jmeter.cgi

### 1. Open JMeter
- Launch JMeter.

### 2. Create a New Test Plan
- File > New.

### 3. Add a Thread Group
- Right-click on the Test Plan > Add > Threads (Users) > Thread Group.
- Configure the number of users (threads), ramp-up period, and loop count.

### 4. Add an HTTP Request
- Right-click on the Thread Group > Add > Sampler > HTTP Request.
- Set the Server Name or IP to `www.xe.com`.
- Add parameters as necessary.

### 5. Record the HTTP Request
- Add a Recording Controller.
- Configure the HTTP(S) Test Script Recorder.
- Perform the conversion action on XE.com using your browser.

### 6. Add HTTP Header Manager
- Right-click on the HTTP Request > Add > Config Element > HTTP Header Manager.

### 7. Add Listeners
- Add View Results Tree and Summary Report listeners to the Thread Group.

### 8. Run the Test
- Click the Start button to run the test.

## Test Results
The test results can be viewed in the Summary Report listener. 


