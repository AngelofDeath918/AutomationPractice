Feature: Header - Search

Background: A smartmedPage is accesible

Scenario: Perform a search through the header
  When I click on the search icon in the header
  And I enter "medication management" into the search field
  Then I should see search results related to <search>
  
		Examples:
			| Username              | 
			| medication management | 
