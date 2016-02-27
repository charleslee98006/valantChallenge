# valantChallenge
Coding Challenge for Valant

Instructions:

1. Download the github repository and click on the index.html to run the program.

Assumptions:

1. In memory data structure is okay - This means that we did not need a Database. Thus, we can push everything to the frontend as there is no API calls to the backend.

2. Production quality code - To me, this means that the code needs to be readable, testable and compartmentizable. Hence, the code needs to be broken to their single functionality in order to test and be readable to whomever will be using my code.

3. duplicates items can be added as well - Since only one item can be added at the same time and that we have the flexiblity of added more than 1 of the same items, I decided to treat duplicate objects as another objects. This can be deleted as I have attached a button at the end of each item that sends their item id.

4. Empty strings must not be allowed in order to limit the scope of the coding challenge. 

5. ArrayList will be used - For testing purposes, I have decided to use an arrayList so that I can store multiple objects with different attributes needed for each item with a big O(1) with the Javascript array.pop(). However, I do know that an arrayList isn't efficient, but testing purpose it is much faster and easier to implement given the time frame.

Next Step:

1.Expiration and notification
	I have added the countdown feature but was not able to get the feature working in time of the challenge. The next step to completing this would be to use the countdown jQuery plugin and add it to each item in the inventory list. There will also be a function that will be called with the countdown reaches to zero. Once that happens, the user will be notified that the item is expired and a yellow color code will highlight the background of the expired item.

2. Tests

	Though I have tested out the functionality of Add and delete and notification and empty strings. I did not write an actual test for them. In order to do programming test, I would need to research on frontend tools to programmatically test out the different features for the coding challenges.

3. ArrayList Storage

	The function that I have written has a big O(n) when it is coming to deleting and searching for the an item in the list. The next step would involve research to see if reimplement a faster way of searching and deleting or use another data structure that is more efficient in its big O complexity. 

4. Security
	The user will have to sign in first to the user's account prior to see the list that the user has made. Ideally, the user name and password would call to the database and match the user name and password in the system. If either the user name and password are incorrect, a message will be displayed to tell the user that the user must try log in again for the correct password and user name.
