# 03_Password_Generator

## Description

This password generator web application was my third homework assignment in the KU Coding Bootcamp. The purpose of this assignment was to experience how coding in JavaScript can make web applications much more interactive and robust.

This particular web application required me to plan out the logic using psuedocoding initial, since the requirements for the application involved several dynamic variables and interaction based on the user's input.

## Acceptance Criteria

The application itself had the following Acceptance Criteria, all of which has been met (along with some additional improvements I decided to add to enhance the user experience):

```text
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

-----

## Deployed Version

<https://timothykemp.dev/03_password_generator>

-----

## Screenshots & Functionality Explanations

The following image shows the web application's appearance upon the initial load:

<img src="./assets/images/password_generator_initial_view.png?raw=true" alt="Password Generator Initial View" width="600px" style= "border: 2px solid black" />

When the user clicks on "Generate Password" button, the following prompt will appear asking them to enter a desired password length:

<img src="./assets/images/password_length_prompt.png?raw=true" alt="Desired Password Length Prompt" width="600px" style= "border: 2px solid black" />

If user clicks on "Cancel", the following message will appear instead of a generated password:

<img src="./assets/images/user_cancel_message.png?raw=true" alt="User Cancel Message" width="600px" style= "border: 2px solid black" />

If user clicks "OK", if the application determines the user's entry as invalid (see details above), the following alert will appear. If the user clicks "OK" on the alert, they are able to try submitting a desired password length again:

<img src="./assets/images/invalid_entry.png?raw=true" alt="Invalid Password Length Alert" width="600px" style= "border: 2px solid black" />

If user enters a valid desired password length, they are then presented with the following four confirm messages to determine the types of characters they would like included in their password (OK for yes, Cancel for no):

<img src="./assets/images/lower_case_characters.png?raw=true" alt="Lowercase Characters Message" width="600px" style= "border: 2px solid black" />
<img src="./assets/images/upper_case_characters.png?raw=true" alt="Uppercase Characters Message" width="600px" style= "border: 2px solid black" />
<img src="./assets/images/numeric_characters.png?raw=true" alt="Numeric Characters Message" width="600px" style= "border: 2px solid black" />
<img src="./assets/images/special_characters.png?raw=true" alt="Special Characters Message" width="600px" style= "border: 2px solid black" />

If user does not click "OK" to include any of the four character types, the following alert will appear. If the user clicks "OK" on the alert, they are able presented with the same four messages above to choose at least one character type:

<img src="./assets/images/must_choose_one.png?raw=true" alt="Must Choose One Message" width="600px" style= "border: 2px solid black" />

Here is an example of a password generated by the application where all four character types were requested, and the user desired a password length of 8 characters. The password can be copied from here and used wherever desired:

<img src="./assets/images/generated_password.png?raw=true" alt="Generated Password" width="600px" style= "border: 2px solid black" />

-----

## Important Notes

1. This project has been deployed and does produce truly random passwords; however, it is not advisable at this time to utilize this site for creating passwords you intend to actually use as there is no encryption built in to the application.

1. The HTML, CSS, and initial JavaScript files were provided for me. My assignment was to code the Generate Password function from scratch within the provided JavaScript file.

-----

## Third-Party Libraries

None

-----

## Credits

Built & designed by Timothy Kemp
