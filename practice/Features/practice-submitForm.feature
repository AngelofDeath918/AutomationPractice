Feature: Header - Submission form
  
  Background: A smartmedPage is accesible
  
  Scenario: Filling contact us form    
    When I click on contact button
    Then I see a form to be filled
    And I am able to submit the form by filling it

    Examples:
			| Name      | email        | Company |phoneNumber|msgTextBox    |
			| Cristhiam | cdg@test.com | Test    |321321321  |This is a test|