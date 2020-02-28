### FrontEnd Proposal

## What problem does your app solve?
Airbnb has successfully disrupted the traditional hospitality industry as more and more traveler

## What is the mission statement?
	Maximizing profitability for our clients.


## Features

- What features are required for your minimum viable product?
Data Modelling
Train a predictive model on AirBnB prices using historical data.
Make predictions accessible to the rest of the team. E.g. deploy via a Flask API (or equivalent) to receive inputs (location, size, etc), and output predicted optimal price in JSON format.

## Web
User register/login flow
User can add their AirBnB listings to their profile
User can edit properties about each listing (ie room type, minimum number of nights, location, etc) . Make sure to collaborate with the DS students on the best data to send to them.  When properties are saved, the data is sent to the DS API and the returned optimal price is dynamically saved for the current home/property.
User can edit properties for their listings and get an updated optimal price
User can delete listings

Redux Actions
Registration
Login
Post Property
Get Properties
Edit/Update Property
Delete Property
Components
Forms
Property Creation Form
Login Form
Registration Form
Property List
Property
Routes
Private Route for Logged In Users
Routes for individual properties
Route for property list

Task Splitting
React 1
Property
Property List
Property Creation Form
React 2
Redux Store
Router
Private Router
Axios with Auth Function
Login Form
Register Form

Marketing Page
Have a CTA that allows users to login via the react app
Display a clear messaging and visual imagery in coherence with the rest of the web application

## What features may you wish to put in a future release?
Use feature importances to create visual recommendations to user (e.g. you're in the green zone in terms of location, but your availability is in the red zone). [Stretch]

User can add pictures to their listings using an API like Cloudinary [Stretch]
User can set their database to check the optimal price at certain intervals (weekly, monthly, etc) and they are alerted when there is a change via email or text. [Stretch]

##  What do the top 3 similar apps do for their users?  
   Vacation Rentals by Owner (Vrbo): They have over a million properties on their books and have been around since 1996, 12 years longer than AirBnB. They only rent out vacation properties. It’s not a hosted experience, and works best for families or groups of four or more for a longer stay. Used to not charge booking fees to the guests. AirBnB has better UX. Owner can pay an annual fee or pay a fee per booking. 

   Booking.com: Great for hotel bookings when travelling. They have a great choice, the site is easy to use, and prices are the best. They also have homes and apartments. Owners: Free to list on Booking.com with a fee applied per booking. 

   HomeAway: Parent company to Vrbo. HomeAway has a bit more inventory on their books, like smaller apartments, meaning you get more options if you are travelling solo or as a couple. Owners: Annual subscription where you pay no booking fees, and a free listing option where you pay per booking. 

Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using? React Router, Styled-Components, Axios, LESS, etc. 
- Do APIs require you to contact its maintainer to gain access?
- Are you required to pay to use the API?
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
For Data Scientists


##  Describe the Established data source with at least rough data able to be provided on day 1. 
- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)
- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

Target Audience

- Who is your target audience? Be specific.
Users are AirBnB hosts that are looking to price their listing relative to their local market and historical demand conditions. This will allow users better forecast and understand their potential future property earnings. 

- What feedback have you gotten from potential users?
- Have you validated the problem and your solution with your target audience? How?


Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.


Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

