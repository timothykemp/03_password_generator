# Password Generator Pseudocode

1. When user clicks the "Generate Password" button, they are presented with several prompts
    * Reset existing variables?

1. Prompt user to input a desired password length
    * Must be a whole number >= 8 and <= 128
    * Include data validation to ensure instructions are followed
    * Press OK to continue
    * Store this number in a variable
    * Console log this number

1. Prompt user to ask if they would like lowercase characters included in their password
    * Press OK for Yes or Cancel for No
    * Store the user's decision in a variable
    * Options are a-z

1. Prompt user to ask if they would like uppercase characters included in their password
    * Press OK for Yes or Cancel for No
    * Store the user's decision in a variable
    * Options are A-Z

1. Prompt user to ask if they would like numeric characters included in their password
    * Press OK for Yes or Cancel for No
    * Store the user's decision in a variable
    * Options are 0-9

1. Prompt user to ask if they would like special characters included in their password
    * Press OK for Yes or Cancel for No
    * Store the user's decision in a variable
    * Options found here: <https://owasp.org/www-community/password-special-characters>

1. Once all prompts are answered:
    * If user does not select OK on at least one option, then Alert user letting them know they have to choose at least one option
    * "You must select at least one character type"
    * Else generate password with user's selected criteria
    * Display password in the designated space on the page
